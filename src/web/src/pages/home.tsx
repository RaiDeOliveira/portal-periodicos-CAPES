import { useState } from "react";
import { Input } from "@/components/ui/input";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Avatar } from "@/components/ui/avatar";

import publication from "@/data/publications.json";

// Tipos para os componentes
interface ArticleProps {
  id: number;
  title: string;
  author: string;
  description: string;
  link: string;
  avatarSrc: string;
}

interface NewsProps {
  imageSrc: string;
  headline: string;
  summary: string;
}

interface ResearcherProps {
  id: number;
  avatarSrc: string;
  name: string;
  field: string;
}

// Componente para Artigo
function ArticleCard({
  id,
  title,
  author,
  description,
  avatarSrc,
}: ArticleProps) {
  const shortDescription =
    description.length > 200 ? `${description.slice(0, 200)}...` : description;

  return (
    <a href={`/publication/${id}`}>
      <Card className="w-full max-w-full rounded-none">
        <CardHeader>
          <div className="flex items-center space-x-4 justify-between">
            <Avatar className="w-12 h-12">
              <img src={avatarSrc} alt="Avatar" className="rounded-full" />
            </Avatar>
            <CardTitle className="flex self-start">{title}</CardTitle>
            <img src="/save.svg" alt="Salvar" className="pl-4 h-6" />
          </div>
          <CardDescription>Por {author}</CardDescription>
        </CardHeader>
        <CardContent className="rounded-none">{shortDescription}</CardContent>
      </Card>
    </a>
  );
}

// Componente para Notícia
function NewsCard({ imageSrc, headline, summary }: NewsProps) {
  return (
    <li className="flex flex-col items-center space-y-2">
      <div className="w-72">
        <img
          src={imageSrc}
          alt={headline}
          className="w-full h-36 object-cover rounded-none"
        />
        <div className="text-left">
          <h2 className="font-semibold w-full">{headline}</h2>
          <p className="text-sm text-gray-600 w-full">{summary}</p>
        </div>
      </div>
    </li>
  );
}

// Componente para Pesquisador com funcionalidade "Seguindo"
function ResearcherCard({ avatarSrc, name, field }: ResearcherProps) {
  const [isFollowing, setIsFollowing] = useState(false);

  const handleFollow = () => {
    setIsFollowing(!isFollowing);
  };

  return (
    <Card className="shadow-md flex flex-col items-center p-6 px-24 rounded-none">
      <Avatar className="w-24 h-24 mb-4">
        <img src={avatarSrc} alt="Avatar" className="rounded-full" />
      </Avatar>
      <CardTitle className="text-lg font-semibold">{name}</CardTitle>
      <p className="text-sm text-gray-600 mb-4">{field}</p>
      <button
        onClick={handleFollow}
        className={`group w-full flex items-center justify-center gap-2 font-bold border border-[#001D6C] py-2 rounded-none transition-colors ${
          isFollowing
            ? "bg-[#001D6C] text-white"
            : "bg-white text-[#001D6C] hover:bg-[#001D6C] hover:text-white"
        }`}
      >
        {!isFollowing && (
          <img
            src="/add_icon.svg"
            alt="Adicionar"
            className="w-4 h-4 group-hover:brightness-0 group-hover:invert"
          />
        )}
        {isFollowing ? "Seguindo" : "Seguir"}
      </button>
    </Card>
  );
}

// Página principal
export function Home() {
  const articles: ArticleProps[] = publication.map((publication, index) => ({
    id: publication.id,
    title: publication.title,
    author: publication.authors,
    description: publication.summary,
    link: publication.link,
    avatarSrc: `/people/${index + 1}.png`, // Alterna avatares de 1 a 3
  }));

  const news: NewsProps[] = [
    {
      imageSrc: "/news/n1.png",
      headline: "Descoberta de novos materiais supercondutores",
      summary:
        "Cientistas avançam na busca por materiais supercondutores em temperatura ambiente.",
    },
    {
      imageSrc: "/news/n2.png",
      headline: "Impactos das mudanças climáticas na biodiversidade",
      summary:
        "Novo estudo mostra como espécies estão migrando para regiões mais frias devido às mudanças no clima.",
    },
    {
      imageSrc: "/news/n3.png",
      headline: "Exploração de oceanos profundos revela novas espécies",
      summary:
        "Pesquisadores identificam criaturas nunca antes vistas em expedição marítima aos oceanos profundos.",
    },
    {
      imageSrc: "/news/n4.png",
      headline: "Progresso em terapias genéticas para doenças raras",
      summary:
        "Avanços na edição de genes CRISPR trazem novas esperanças para tratamentos de doenças raras.",
    },
  ];

  const researchers: ResearcherProps[] = [
    {
      avatarSrc: "/people/p1.png",
      name: "Maria Silva",
      field: "Inteligência Artificial",
      id: 1,
    },
    {
      avatarSrc: "/people/p2.png",
      name: "José Costa",
      field: "Engenharia biomédica",
      id: 2,
    },
    {
      avatarSrc: "/people/p3.png",
      name: "Milena Pinheiros",
      field: "Biotecnologia",
      id: 3,
    },
  ];

  return (
    <div className="font-rawline">
      <div className="pt-[110px] bg-[#ECECEC]">
        <div className="py-4 w-1/2 mx-auto font-bold">
          <Input
            placeholder="Olá! O que você quer buscar?"
            className="shadow-md rounded-none focus:outline-none focus:ring-2 focus:ring-[#001D6C]"
          />
        </div>

        <div className="py-4 px-16 w-full flex space-x-12">
          <div className="flex-1 h-[720px] overflow-hidden">
            <h1 className="font-bold text-2xl pb-4">Artigos para você</h1>
            <div className="flex flex-col space-y-6 h-full overflow-y-scroll scrollbar-hide">
              {articles.map((article, index) => (
                <ArticleCard key={index} {...article} />
              ))}
            </div>
          </div>

          <div className="pt-12 w-3/10">
            <Card className="w-full h-[680px] overflow-hidden shadow-md rounded-none">
              <CardHeader>
                <CardTitle className="text-center">Notícias</CardTitle>
              </CardHeader>
              <CardContent className="overflow-y-scroll h-[calc(100%-50px)] scrollbar-hide">
                <ul className="space-y-8">
                  {news.map((newsItem, index) => (
                    <NewsCard key={index} {...newsItem} />
                  ))}
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>

        <div className="py-12 px-16">
          <h1 className="font-bold text-2xl pb-4">
            Pesquisadores Recomendados
          </h1>
          <div className="grid grid-cols-3 gap-8 text-center">
            {researchers.map((researcher, index) => (
              <ResearcherCard key={index} {...researcher} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
