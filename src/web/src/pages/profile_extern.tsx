import { useState } from "react";
import { Avatar } from "@/components/ui/avatar";
import {
  Card,
  CardHeader,
  CardContent,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";

// Tipos para os dados dos pesquisadores
interface Researcher {
  avatarSrc: string;
  name: string;
  field: string;
}

interface ArticleProps {
  avatarSrc: string;
  title: string;
  author: string;
  description: string;
}

// Dados de exemplo dos artigos
const articles: ArticleProps[] = [
  {
    avatarSrc: "/people/2.png",
    title:
      "Software Testing With Large Language Models: Survey, Landscape, and Vision",
    author: "Junjie Whang, Kenji Yamamoto, Mei Ling Zhang, Tao Li e Huan Chen",
    description:
      'O artigo "Software Testing With Large Language Models: Survey, Landscape, and Vision" (2024) apresenta uma revisão abrangente do uso de modelos de linguagem grandes (LLMs) em testes de software. A pesquisa analisou 102 estudos que empregam LLMs nessa área, focando em tarefas como preparação de casos de teste e reparo de programas. O artigo discute os LLMs comumente usados, as técnicas de prompt engineering empregadas e os desafios e oportunidades do campo. Serve como um guia para futuras pesquisas, identificando lacunas no conhecimento atual e apontando direções promissoras para o uso de LLMs em testes de software.',
  },
  {
    avatarSrc: "/people/2.png",
    title:
      "Deep Learning Approaches to Cybersecurity Threat Detection and Mitigation",
    author:
      "Junjie Whang, Takashi Kobayashi, Yuki Tanaka, Sora Kimura e Hina Watanabe",
    description:
      "O artigo explora como técnicas de deep learning estão sendo aplicadas para detectar e mitigar ameaças cibernéticas. A pesquisa abrange uma análise detalhada dos métodos mais eficazes de aprendizagem profunda usados na detecção de intrusões e na resposta automatizada a incidentes de segurança, além de abordar os desafios associados à implementação de modelos de IA em ambientes de segurança cibernética.",
  },
  {
    avatarSrc: "/people/2.png",
    title:
      "Optimizing Neural Networks for Edge Computing: Challenges and Solutions",
    author:
      "Junjie Whang, Naoki Suzuki, Li Wei, Riko Nakamura e Haruto Yamashita",
    description:
      "Este artigo investiga como redes neurais podem ser otimizadas para sistemas de computação em borda. Com o aumento da demanda por processamento descentralizado, o estudo examina os desafios na implementação de modelos de IA em dispositivos de borda e apresenta soluções para melhorar a eficiência e reduzir a latência, além de discutir as oportunidades de aplicação em áreas como Internet das Coisas (IoT) e computação móvel.",
  },
];

// Dados de exemplo dos pesquisadores relacionados
const relatedResearchers: Researcher[] = [
  {
    avatarSrc: "/people/p1.png",
    name: "Maria Silva",
    field: "Inteligência Artificial",
  },
  {
    avatarSrc: "/people/p2.png",
    name: "José Costa",
    field: "Engenharia biomédica",
  },
  {
    avatarSrc: "/people/p3.png",
    name: "Milena Pinheiros",
    field: "Biotecnologia",
  },
  {
    avatarSrc: "/people/2.png",
    name: "Cíntia Cruz",
    field: "Engenharia Química",
  },
];

export function ExternProfile() {
  const [following, setFollowing] = useState<boolean[]>(
    new Array(relatedResearchers.length).fill(false)
  );

  const handleFollow = (index: number) => {
    const updatedFollowing = [...following];
    updatedFollowing[index] = !updatedFollowing[index];
    setFollowing(updatedFollowing);
  };

  return (
    <div className="font-rawline pt-32 px-16 pb-8 bg-white">
      <h1 className="font-rawline font-semibold text-2xl mb-8 text-[#001D6C]">
        Perfil
      </h1>
      <div className="flex items-center space-x-12">
        <Avatar>
          <img
            src="/people/2.png"
            alt="Foto da pesquisadora"
            className="rounded-full w-40 h-40 object-cover border-8 border-[#001D6C]"
          />
        </Avatar>
        <div>
          <h2 className="font-rawline font-semibold text-2xl text-[#001D6C] mb-3">
            Junjie Wang
          </h2>
          <p className="text-gray-600 text-sm mb-3">
            Alma Mater: MIT - Massachussets Institute of Technology
          </p>
          <p className="text-gray-600 text-sm mb-3">
            Áreas de atuação: ciência da computação, ciência de dados
          </p>
          <div className="flex items-center space-x-3">
            <a
              href="http://lattes.cnpq.br/7391655378104188"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src="/assets/logo_lattes.png"
                className="h-12 w-auto"
                alt="Logo Lattes"
              />
            </a>
            <a
              href="https://www.linkedin.com/in/carleane-reis-4a39351a7/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src="/assets/logo_linkedin.png"
                className="h-16 w-auto"
                alt="Logo LinkedIn"
              />
            </a>
            <a
              href="https://openalex.org/works?page=1&filter=authorships.author.id%3Aa5026738610"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src="/assets/logo_open_alex.png"
                className="h-12 w-auto mr-4"
                alt="Logo OpenAlex"
              />
            </a>
            <button
              onClick={() => handleFollow(0)}
              className={`group flex items-center justify-center gap-2 font-bold border border-[#001D6C] py-2 px-4 rounded-md transition-colors w-32 ${
                following[0]
                  ? "bg-[#001D6C] text-white"
                  : "bg-white text-[#001D6C] hover:bg-[#001D6C] hover:text-white"
              }`}
            >
              {following[0] ? "Seguindo" : "Seguir"}
            </button>
          </div>
        </div>
      </div>

      {/* Artigos para você */}
      <div className="py-12">
        <h3 className="font-rawline font-semibold text-xl text-[#001D6C] mb-6">
          Artigos publicados
        </h3>
        <div className="space-y-6">
          {articles.map((article, index) => (
            <Card key={index} className="w-full max-w-full">
              <CardHeader>
                <div className="flex items-center space-x-4 justify-between w-full">
                  <div className="flex items-center space-x-4">
                    <Avatar className="w-12 h-12">
                      <img
                        src={article.avatarSrc}
                        alt="Avatar"
                        className="rounded-full"
                      />
                    </Avatar>
                    <CardTitle className="flex items-center">
                      {article.title}
                    </CardTitle>
                  </div>
                  <img
                    src="/save.svg"
                    alt="Salvar"
                    className="pl-4 h-6 cursor-pointer"
                  />
                </div>
                <CardDescription>Por {article.author}</CardDescription>
              </CardHeader>
              <CardContent>{article.description}</CardContent>
            </Card>
          ))}
        </div>
      </div>

      {/* Pesquisadores Relacionados */}
      <div className="mt-12">
        <h3 className="font-rawline font-semibold text-xl text-[#001D6C] mb-6">
          Pesquisadores Relacionados
        </h3>
        <div className="flex space-x-16 overflow-x-auto">
          {relatedResearchers.map((researcher, index) => (
            <Card
              key={index}
              className="w-52 h-72 shadow-md flex flex-col items-center p-6"
            >
              <Avatar className="w-24 h-24 mb-4">
                <img
                  src={researcher.avatarSrc}
                  alt="Avatar"
                  className="rounded-full"
                />
              </Avatar>
              <p className="font-semibold text-lg">{researcher.name}</p>
              <p className="text-sm text-gray-600 mb-4">{researcher.field}</p>
              <button
                onClick={() => handleFollow(index)}
                className={`group w-full flex items-center justify-center gap-2 font-bold border border-[#001D6C] py-2 rounded-md transition-colors ${
                  following[index]
                    ? "bg-[#001D6C] text-white"
                    : "bg-white text-[#001D6C] hover:bg-[#001D6C] hover:text-white"
                }`}
              >
                {following[index] ? "Seguindo" : "Seguir"}
              </button>
            </Card>
          ))}
          <button className="mt-4 flex items-center text-blue-600">
            <img
              src="/arrow_right_icon.svg"
              alt="Ver mais pesquisadores"
              className="h-6 w-6"
            />
          </button>
        </div>
      </div>
    </div>
  );
}
