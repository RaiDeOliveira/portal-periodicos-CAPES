import { GoogleGenerativeAI } from "@google/generative-ai";

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
 * @param publication A publicação relacionada à mensagem.
 * @returns A resposta gerada pelo modelo.
 */
export async function sendMessage(
  userMessage: string,
  publication: string
): Promise<string> {
  publication =
    "Responda a pergunta baseado no resumo dessa publicação: " + publication;

  try {
    const result = await model.generateContent([userMessage, publication]);

    return (
      result.response.text() || "Desculpe, não consegui gerar uma resposta."
    );
  } catch (error) {
    console.error("Erro ao comunicar com o modelo:", error);
    return "Desculpe, houve um erro. Tente novamente mais tarde.";
  }
}
