import { Avatar } from "@/components/ui/avatar";
import { Card, CardHeader, CardContent } from "@/components/ui/card";

// Dados de exemplo dos pesquisadores que estão sendo seguidos
const followingResearchers = [
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

export function Profile() {
  return (
    <div className="font-rawline pt-32 px-16 pb-8 bg-white">
      <h1 className="font-rawline font-semibold text-2xl mb-8 text-[#001D6C]">
        Meu perfil
      </h1>
      <div className="flex items-center space-x-12">
        <Avatar>
          <img
            src="/people/4.png"
            alt="Foto do pesquisador"
            className="rounded-full w-40 h-40 object-cover border-8 border-[#001D6C]"
          />
        </Avatar>
        <div>
          <h2 className="font-rawline font-semibold text-2xl text-[#001D6C] mb-3">
            Andrea da Silva Cestari
          </h2>
          <p className="text-gray-600 text-sm mb-3">
            Alma Mater: UFSCAR - Universidade Federal de São Carlos
          </p>
          <p className="text-gray-600 text-sm mb-3">
            Áreas de atuação: engenharia da computação, ciência da computação
          </p>
          <div className="flex items-center">
            <a href="http://lattes.cnpq.br/7391655378104188" target="_blank" rel="noopener noreferrer">
              <img src="/assets/logo_lattes.png" className="h-12 mr-3" alt="Logo Lattes" />
            </a>
            <a href="https://www.linkedin.com/in/carleane-reis-4a39351a7/" target="_blank" rel="noopener noreferrer">
              <img src="/assets/logo_linkedin.png" className="h-16 mr-3" alt="Logo LinkedIn" />
            </a>
            <a href="https://openalex.org/works?page=1&filter=authorships.author.id%3Aa5026738610" target="_blank" rel="noopener noreferrer">
              <img src="/assets/logo_open_alex.png" className="h-12 mr-3" alt="Logo OpenAlex" />
            </a>
          </div>
        </div>
      </div>

      <div className="mt-12">
        <h3 className="font-rawline font-semibold text-xl text-[#001D6C] mb-6">
          Artigos Salvos
        </h3>
        <div className="flex space-x-8">
          <Card className="w-64 h-32 flex items-center font-medium pt-6 justify-center bg-[#ECECEC] shadow-md border-2">
            <CardContent className="text-center">Meus favoritos</CardContent>
          </Card>
          <Card className="w-64 h-32 flex items-center font-medium pt-6 justify-center bg-[#ECECEC] shadow-md border-2">
            <CardContent className="text-center">Microplásticos</CardContent>
          </Card>
          <Card className="w-64 h-32 flex items-center font-medium pt-6 justify-center bg-[#ECECEC] shadow-md border-2">
            <CardContent className="text-center">DNA</CardContent>
          </Card>
          <Card className="w-64 h-32 flex items-center font-medium pt-6 justify-center bg-[#ECECEC] shadow-md border-2">
            <CardContent className="text-center">Tecnologia</CardContent>
          </Card>
        </div>
      </div>

      <div className="mt-12">
        <h3 className="font-rawline font-semibold text-xl text-[#001D6C] mb-6">
          Seguindo
        </h3>
        <div className="flex space-x-16 overflow-x-auto">
          {followingResearchers.map((researcher, index) => (
            <Card key={index} className="w-52 h-72 shadow-md flex flex-col items-center p-6">
              <Avatar className="w-24 h-24 mb-4">
                <img
                  src={researcher.avatarSrc}
                  alt="Avatar"
                  className="rounded-full"
                />
              </Avatar>
              <p className="font-semibold text-lg">{researcher.name}</p>
              <p className="text-sm text-gray-600 mb-4">{researcher.field}</p>
            </Card>
          ))}
          <button className="mt-4 flex items-center text-blue-600">
            <img src="/arrow_right_icon.svg" alt="Ver mais pesquisadores" className="h-6 w-6" />
          </button>
        </div>
      </div>
    </div>
  );
}
