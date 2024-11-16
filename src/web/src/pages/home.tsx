import { NavBar } from "@/components/navbar";
import { Input } from "@/components/ui/input";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Avatar } from "@/components/ui/avatar";

// Tipos para os componentes
interface ArticleProps {
  avatarSrc: string;
  title: string;
  author: string;
  description: string;
}

interface NewsProps {
  imageSrc: string;
  headline: string;
  summary: string;
}

interface ResearcherProps {
  avatarSrc: string;
  name: string;
  field: string;
}

// Componente para Artigo
function ArticleCard({ avatarSrc, title, author, description }: ArticleProps) {
  return (
    <Card className="w-full max-w-full">
      <CardHeader>
        <div className="flex items-center space-x-4">
          <Avatar>
            <img src={avatarSrc} alt="Avatar" className="rounded-full" />
          </Avatar>
          <CardTitle>{title}</CardTitle>
          <img src="/save_icon.svg" alt="Salvar" className="pl-4 h-6" />
        </div>
        <CardDescription>Por {author}</CardDescription>
      </CardHeader>
      <CardContent>{description}</CardContent>
    </Card>
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
          className="w-full h-36 object-cover rounded-lg"
        />
        <div className="text-left">
          <h2 className="font-semibold w-full">{headline}</h2>
          <p className="text-sm text-gray-600 w-full">{summary}</p>
        </div>
      </div>
    </li>
  );
}

// Componente para Pesquisador
function ResearcherCard({ avatarSrc, name, field }: ResearcherProps) {
  return (
    <Card className="shadow-md flex flex-col items-center p-6 px-24">
      <Avatar className="w-24 h-24 mb-4">
        <img src={avatarSrc} alt="Avatar" className="rounded-full" />
      </Avatar>
      <CardTitle className="text-lg font-semibold">{name}</CardTitle>
      <p className="text-sm text-gray-600 mb-4">{field}</p>
      <button className="w-full bg-blue-500 text-white py-2 rounded-md">
        Seguir
      </button>
    </Card>
  );
}

export function Home() {
  const articles: ArticleProps[] = [
    {
      avatarSrc: "https://via.placeholder.com/40",
      title: "Computação quântica: uma abordagem de ensino baseada em projetos",
      author: "Carlos Almeida Júnior",
      description:
        "Este artigo explora como a computação quântica pode ser ensinada por meio de projetos práticos, destacando abordagens inovadoras e benefícios para a formação de novos profissionais nesta área emergente da ciência. Ao focar em aplicações reais e no desenvolvimento de habilidades críticas, a abordagem baseada em projetos oferece uma experiência de aprendizado imersiva, ideal para preparar alunos para os desafios do futuro. Exemplos de projetos incluem a simulação de algoritmos quânticos e o desenvolvimento de soluções para problemas complexos usando princípios quânticos.",
    },
    {
      avatarSrc: "https://via.placeholder.com/40",
      title:
        "Desigualdades de gênero no Sistema Único de Saúde e impactos no bem estar social da mulher",
      author: "Aline Gonçales de Souza",
      description:
        "O artigo investiga como as desigualdades de gênero afetam o acesso e a qualidade do atendimento no Sistema Único de Saúde (SUS), destacando o impacto disso no bem-estar social das mulheres no Brasil. Ele aborda questões como o preconceito de gênero no atendimento médico, a falta de políticas públicas específicas para as necessidades femininas e os desafios enfrentados por mulheres em situação de vulnerabilidade social. Além disso, propõe medidas para promover a equidade e melhorar a qualidade dos serviços oferecidos.",
    },
    {
      avatarSrc: "https://via.placeholder.com/40",
      title: "A influência da inteligência artificial na medicina personalizada",
      author: "João Paulo Rocha",
      description:
        "Este artigo analisa o impacto da inteligência artificial (IA) no desenvolvimento da medicina personalizada, discutindo como as tecnologias de IA estão transformando os tratamentos médicos e a personalização do cuidado para pacientes. Exemplos incluem o uso de aprendizado de máquina para prever diagnósticos, adaptar terapias às necessidades individuais e criar medicamentos personalizados. O texto também aborda os desafios éticos e de privacidade associados ao uso de dados sensíveis em saúde.",
    },
  ];

  const news: NewsProps[] = [
    {
      imageSrc: "https://via.placeholder.com/300x150",
      headline: "Descoberta de novos materiais supercondutores",
      summary:
        "Cientistas avançam na busca por materiais supercondutores em temperatura ambiente.",
    },
    {
      imageSrc: "https://via.placeholder.com/300x150",
      headline: "Impactos das mudanças climáticas na biodiversidade",
      summary:
        "Novo estudo mostra como espécies estão migrando para regiões mais frias devido às mudanças no clima.",
    },
    {
      imageSrc: "https://via.placeholder.com/300x150",
      headline: "Exploração de oceanos profundos revela novas espécies",
      summary:
        "Pesquisadores identificam criaturas nunca antes vistas em expedição marítima aos oceanos profundos.",
    },
    {
      imageSrc: "https://via.placeholder.com/300x150",
      headline: "Progresso em terapias genéticas para doenças raras",
      summary:
        "Avanços na edição de genes CRISPR trazem novas esperanças para tratamentos de doenças raras.",
    },
  ];

  const researchers: ResearcherProps[] = [
    {
      avatarSrc: "https://via.placeholder.com/100",
      name: "Maria Silva",
      field: "Inteligência Artificial",
    },
    {
      avatarSrc: "https://via.placeholder.com/100",
      name: "José Costa",
      field: "Bioengenharia",
    },
    {
      avatarSrc: "https://via.placeholder.com/100",
      name: "Carlos Almeida",
      field: "Computação Quântica",
    },
  ];

  return (
    <div className="font-rawline">
      <NavBar />

      <div className="pt-[110px] bg-[#ECECEC]">
        <div className="py-4 w-1/2 mx-auto font-bold">
          <Input
            placeholder="Olá! O que você quer buscar?"
            className="shadow-md rounded-md focus:outline-none focus:ring-2 focus:ring-[#001D6C]"
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
            <Card className="w-full h-[680px] overflow-hidden shadow-md">
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
          <h1 className="font-bold text-2xl pb-4">Pesquisadores Recomendados</h1>
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
