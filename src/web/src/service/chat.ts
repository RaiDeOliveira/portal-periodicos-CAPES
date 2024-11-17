import { GoogleGenerativeAI } from "@google/generative-ai";
import publications from "@/data/publications.json";

const apiKey = "AIzaSyCJ293-3Wmg2psxLG0bNE3tfY9Co9MlvlQ";
// const apiKey = process.env.API_KEY;
if (!apiKey) {
  throw new Error("API_KEY is not defined in the environment variables.");
}
const client = new GoogleGenerativeAI(apiKey);
const model = client.getGenerativeModel({ model: "gemini-1.5-flash" });

/**
 * Envia uma mensagem para o modelo e retorna a resposta.
 * @param userMessage A mensagem enviada pelo usuário.
 * @param publicationId O ID da publicação relacionada à mensagem.
 * @returns A resposta gerada pelo modelo.
 */
export async function sendMessage(
  userMessage: string,
  publicationId: number,
  retries: number = 3,
  delay: number = 2000
): Promise<string> {
  const publication = publications.find((pub) => pub.id === publicationId);

  if (!publication) {
    return "Publicação não encontrada.";
  }

  const publicationData = `
    Título: ${publication.title}
    Ano: ${publication.year}
    Fonte: ${publication.source}
    Volume: ${publication.volume}
    Edição: ${publication.issue}
    Idioma: ${publication.language}
    DOI: ${publication.doi}
    Resumo: ${publication.summary}
    ISSN: ${publication.issn}
    Tópicos: ${
      Array.isArray(publication.topics)
        ? publication.topics.join(", ")
        : publication.topics
    }
    Autores: ${
      Array.isArray(publication.authors)
        ? publication.authors.join(", ")
        : publication.authors
    }
    Citações: ${publication.citations}
    Leitores: ${publication.readers}
    Qualis: ${publication.qualis}
  `;

  const data = `Responda a pergunta baseado nas seguintes informações sobre a publicação:
    ${publicationData}
    Pergunta: ${userMessage}
  `;

  const trySendingMessage = async (): Promise<string> => {
    try {
      const result = await model.generateContent([data]);
      return (
        result.response.text() || "Desculpe, não consegui gerar uma resposta."
      );
    } catch (error) {
      if (retries > 0 && (error as Error).message.includes("503")) {
        console.log("Erro 503: Modelo sobrecarregado. Tentando novamente...");
        await new Promise((resolve) => setTimeout(resolve, delay));
        return sendMessage(userMessage, publicationId, retries - 1, delay);
      }
      console.error("Erro ao comunicar com o modelo:", error);
      return "Desculpe, houve um erro. Tente novamente mais tarde.";
    }
  };

  return await trySendingMessage();
}
