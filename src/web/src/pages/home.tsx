import { Input } from "@/components/ui/input";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Avatar } from "@/components/ui/avatar";

export function Home() {
  return (
    <div className="font-rawline">
      <div className="pt-[110px] bg-[#ECECEC]">
        <div className="py-4 w-1/2 mx-auto font-bold">
          <Input
            placeholder="Olá! O que você quer buscar?"
            className="shadow-md rounded-md focus:outline-none focus:ring-2 focus:ring-[#001D6C]"
          />
        </div>

        <div className="py-4 px-16 w-full flex space-x-12">
          {/* Coluna da esquerda: Artigos */}
          <div className="flex-1 h-[720px] overflow-hidden">
            <h1 className="font-bold text-2xl pb-4">Artigos para você</h1>
            <div className="flex flex-col space-y-6 h-full overflow-y-scroll scrollbar-hide">
              {/* Artigos */}
              <Card className="w-full max-w-full">
                <CardHeader>
                  <div className="flex items-center space-x-4">
                    <Avatar>
                      <img
                        src="https://via.placeholder.com/40"
                        alt="Avatar"
                        className="rounded-full"
                      />
                    </Avatar>
                    <CardTitle>
                      Computação quântica: uma abordagem de ensino baseada em
                      projetos
                    </CardTitle>
                    <img
                      src="/save.svg"
                      alt="Imagem 2"
                      className="pl-4 h-6"
                    />
                  </div>
                  <CardDescription>Por Carlos Almeida Júnior</CardDescription>
                </CardHeader>
                <CardContent>
                  Este artigo explora como a computação quântica pode ser
                  ensinada por meio de projetos práticos, destacando abordagens
                  inovadoras e benefícios para a formação de novos profissionais
                  nesta área emergente da ciência.
                </CardContent>
              </Card>

              <Card className="w-full max-w-full">
                <CardHeader>
                  <div className="flex items-center space-x-4">
                    <Avatar>
                      <img
                        src="https://via.placeholder.com/40"
                        alt="Avatar"
                        className="rounded-full"
                      />
                    </Avatar>
                    <CardTitle>
                      Desigualdades de gênero no Sistema Único de Saúde e
                      impactos no bem estar social da mulher
                    </CardTitle>
                    <img
                      src="/save.svg"
                      alt="Imagem 2"
                      className="pl-4 h-6"
                    />
                  </div>
                  <CardDescription>Por Aline Gonçales de Souza</CardDescription>
                </CardHeader>
                <CardContent>
                  O artigo investiga como as desigualdades de gênero afetam o
                  acesso e a qualidade do atendimento no Sistema Único de Saúde
                  (SUS), destacando o impacto disso no bem-estar social das
                  mulheres no Brasil.
                </CardContent>
              </Card>

              {/* Novo Artigo */}
              <Card className="w-full max-w-full">
                <CardHeader>
                  <div className="flex items-center space-x-4">
                    <Avatar>
                      <img
                        src="https://via.placeholder.com/40"
                        alt="Avatar"
                        className="rounded-full"
                      />
                    </Avatar>
                    <CardTitle>
                      A influência da inteligência artificial na medicina
                      personalizada
                    </CardTitle>
                    <img
                      src="/save.svg"
                      alt="Imagem 2"
                      className="pl-4 h-6"
                    />
                  </div>
                  <CardDescription>Por João Paulo Rocha</CardDescription>
                </CardHeader>
                <CardContent>
                  Este artigo analisa o impacto da inteligência artificial (IA)
                  no desenvolvimento da medicina personalizada, discutindo como
                  as tecnologias de IA estão transformando os tratamentos
                  médicos e a personalização do cuidado para pacientes.
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Coluna da direita: Mega Card para Notícias Científicas */}
          <div className="pt-12 w-3/10">
            <Card className="w-full h-[720px] overflow-hidden shadow-md">
              <CardHeader>
                <CardTitle className="text-center">Notícias</CardTitle>
              </CardHeader>
              <CardContent className="overflow-y-scroll h-[calc(100%-50px)] scrollbar-hide">
                <ul className="space-y-8">
                  <li className="flex flex-col items-center space-y-2">
                    <div className="w-72">
                      <img
                        src="https://via.placeholder.com/300x150"
                        alt="Imagem 1"
                        className="w-full h-36 object-cover rounded-lg"
                      />
                      <div className="text-left">
                        <h2 className="font-semibold w-full">
                          Descoberta de novos materiais supercondutores
                        </h2>
                        <p className="text-sm text-gray-600 w-full">
                          Cientistas avançam na busca por materiais
                          supercondutores em temperatura ambiente.
                        </p>
                      </div>
                    </div>
                  </li>
                  <li className="flex flex-col items-center space-y-2">
                    <div className="w-72">
                      <img
                        src="https://via.placeholder.com/300x150"
                        alt="Imagem 2"
                        className="w-full h-36 object-cover rounded-lg"
                      />
                      <div className="text-left">
                        <h2 className="font-semibold w-full">
                          Impactos das mudanças climáticas na biodiversidade
                        </h2>
                        <p className="text-sm text-gray-600 w-full">
                          Novo estudo mostra como espécies estão migrando para
                          regiões mais frias devido às mudanças no clima.
                        </p>
                      </div>
                    </div>
                  </li>
                  <li className="flex flex-col items-center space-y-2">
                    <div className="w-72">
                      <img
                        src="https://via.placeholder.com/300x150"
                        alt="Imagem 3"
                        className="w-full h-36 object-cover rounded-lg"
                      />
                      <div className="text-left">
                        <h2 className="font-semibold w-full">
                          Exploração de oceanos profundos revela novas espécies
                        </h2>
                        <p className="text-sm text-gray-600 w-full">
                          Pesquisadores identificam criaturas nunca antes vistas
                          em expedição marítima aos oceanos profundos.
                        </p>
                      </div>
                    </div>
                  </li>
                  <li className="flex flex-col items-center space-y-2">
                    <div className="w-72">
                      <img
                        src="https://via.placeholder.com/300x150"
                        alt="Imagem 4"
                        className="w-full h-36 object-cover rounded-lg"
                      />
                      <div className="text-left">
                        <h2 className="font-semibold w-full">
                          Progresso em terapias genéticas para doenças raras
                        </h2>
                        <p className="text-sm text-gray-600 w-full">
                          Avanços na edição de genes CRISPR trazem novas
                          esperanças para tratamentos de doenças raras.
                        </p>
                      </div>
                    </div>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Seção de Pesquisadores Recomendados */}
        <div className="pt-12 px-16">
          <h1 className="font-bold text-2xl pb-4">
            Pesquisadores Recomendados
          </h1>
          <div className="grid grid-cols-3 gap-8 text-center">
            {/* Pesquisador 1 */}
            <Card className="shadow-md flex flex-col items-center p-6 px-24">
              <Avatar className="w-24 h-24 mb-4">
                <img
                  src="https://via.placeholder.com/100"
                  alt="Avatar"
                  className="rounded-full"
                />
              </Avatar>
              <CardTitle className="text-lg font-semibold">
                Maria Silva
              </CardTitle>
              <p className="text-sm text-gray-600 mb-4">
                Inteligência Artificial
              </p>
              <button className="w-full bg-blue-500 text-white py-2 rounded-md">
                Seguir
              </button>
            </Card>

            {/* Pesquisador 2 */}
            <Card className="shadow-md flex flex-col items-center p-6 px-24">
              <Avatar className="w-24 h-24 mb-4">
                <img
                  src="https://via.placeholder.com/100"
                  alt="Avatar"
                  className="rounded-full"
                />
              </Avatar>
              <CardTitle className="text-lg font-semibold">
                José Costa
              </CardTitle>
              <p className="text-sm text-gray-600 mb-4">Bioengenharia</p>
              <button className="w-full bg-blue-500 text-white py-2 rounded-md">
                Seguir
              </button>
            </Card>

            {/* Pesquisador 3 */}
            <Card className="shadow-md flex flex-col items-center p-6 px-24">
              <Avatar className="w-24 h-24 mb-4">
                <img
                  src="https://via.placeholder.com/100"
                  alt="Avatar"
                  className="rounded-full"
                />
              </Avatar>
              <CardTitle className="text-lg font-semibold">
                Carlos Almeida
              </CardTitle>
              <p className="text-sm text-gray-600 mb-4">Computação Quântica</p>
              <button className="w-full bg-blue-500 text-white py-2 rounded-md">
                Seguir
              </button>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}
