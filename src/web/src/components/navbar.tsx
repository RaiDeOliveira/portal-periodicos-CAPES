import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import { BaseButton } from "./baseButton";

export function NavBar() {
  return (
    <div className="fixed top-0 left-0 w-full z-10 bg-white shadow-md h-[96px]">
      <div className="font-rawline flex justify-between items-center px-1 py-4">
        {/* Container para as imagens */}
        <div className="flex items-center space-x-4">
          <img src="/assets/logo_capes.png" alt="Imagem 1" className="h-8" />
          <img
            src="/assets/logo_periodicos.png"
            alt="Imagem 2"
            className="h-8"
          />
        </div>

        {/* Container para o Navigation Menu e o botão */}
        <div className="flex items-center space-x-4">
          <NavigationMenu>
            <NavigationMenuList>
              <NavigationMenuItem>
                <NavigationMenuTrigger className="text-sm hover:text-[#001D6C] hover:font-bold">
                  Sobre
                </NavigationMenuTrigger>
                <NavigationMenuContent>
                  <ul className="flex flex-col items-start space-y-2 w-[540px]">
                    <li className="w-full">
                      <NavigationMenuLink className="block w-full px-4 py-2 text-sm hover:text-[#001D6C] hover:font-bold">
                        Acesso Aberto
                      </NavigationMenuLink>
                    </li>
                    <li className="w-full">
                      <NavigationMenuLink className="block w-full px-4 py-2 text-sm hover:text-[#001D6C] hover:font-bold">
                        Quem somos
                      </NavigationMenuLink>
                    </li>
                    <li className="w-full">
                      <NavigationMenuLink className="block w-full px-4 py-2 text-sm hover:text-[#001D6C] hover:font-bold">
                        Missão e objetivos
                      </NavigationMenuLink>
                    </li>
                    <li className="w-full">
                      <NavigationMenuLink className="block w-full px-4 py-2 text-sm hover:text-[#001D6C] hover:font-bold">
                        Nossa história
                      </NavigationMenuLink>
                    </li>
                    <li className="w-full">
                      <NavigationMenuLink className="block w-full px-4 py-2 text-sm hover:text-[#001D6C] hover:font-bold">
                        Quem participa
                      </NavigationMenuLink>
                    </li>
                    <li className="w-full">
                      <NavigationMenuLink className="block w-full px-4 py-2 text-sm hover:text-[#001D6C] hover:font-bold">
                        Parceiros
                      </NavigationMenuLink>
                    </li>
                    <li className="w-full">
                      <NavigationMenuLink className="block w-full px-4 py-2 text-sm hover:text-[#001D6C] hover:font-bold">
                        Documentação
                      </NavigationMenuLink>
                    </li>
                    <li className="w-full">
                      <NavigationMenuLink className="block w-full px-4 py-2 text-sm hover:text-[#001D6C] hover:font-bold">
                        Contratos
                      </NavigationMenuLink>
                    </li>
                  </ul>
                </NavigationMenuContent>
              </NavigationMenuItem>

              <NavigationMenuItem>
                <NavigationMenuTrigger className="text-sm hover:text-[#001D6C] hover:font-bold">
                  Acervo
                </NavigationMenuTrigger>
                <NavigationMenuContent>
                  <ul className="flex flex-col items-start space-y-2 w-[540px]">
                    <li className="w-full">
                      <NavigationMenuLink className="block w-full px-4 py-2 text-sm hover:text-[#001D6C] hover:font-bold">
                        Buscar assunto
                      </NavigationMenuLink>
                    </li>
                    <li className="w-full">
                      <NavigationMenuLink className="block w-full px-4 py-2 text-sm hover:text-[#001D6C] hover:font-bold">
                        Lista de bases e coleções
                      </NavigationMenuLink>
                    </li>
                    <li className="w-full">
                      <NavigationMenuLink className="block w-full px-4 py-2 text-sm hover:text-[#001D6C] hover:font-bold">
                        Lista de livros
                      </NavigationMenuLink>
                    </li>
                    <li className="w-full">
                      <NavigationMenuLink className="block w-full px-4 py-2 text-sm hover:text-[#001D6C] hover:font-bold">
                        Lista de periódicos
                      </NavigationMenuLink>
                    </li>
                  </ul>
                </NavigationMenuContent>
              </NavigationMenuItem>

              <NavigationMenuItem>
                <NavigationMenuTrigger className="text-sm hover:text-[#001D6C] hover:font-bold">
                  Treinamentos
                </NavigationMenuTrigger>
                <NavigationMenuContent>
                  <ul className="flex flex-col items-start space-y-2 w-[540px]">
                    <li className="w-full">
                      <NavigationMenuLink className="block w-full px-4 py-2 text-sm hover:text-[#001D6C] hover:font-bold">
                        Calendário
                      </NavigationMenuLink>
                    </li>
                    <li className="w-full">
                      <NavigationMenuLink className="block w-full px-4 py-2 text-sm hover:text-[#001D6C] hover:font-bold">
                        Materiais de apoio
                      </NavigationMenuLink>
                    </li>
                  </ul>
                </NavigationMenuContent>
              </NavigationMenuItem>

              <NavigationMenuItem>
                <NavigationMenuLink
                  className="text-sm font-medium hover:text-[#001D6C] hover:font-bold"
                  href="#"
                >
                  Informativos
                </NavigationMenuLink>
              </NavigationMenuItem>

              <NavigationMenuItem>
                <NavigationMenuTrigger className="text-sm hover:text-[#001D6C] hover:font-bold">
                  Ajuda
                </NavigationMenuTrigger>
                <NavigationMenuContent>
                  <ul className="flex flex-col items-start space-y-2 w-[540px]">
                    <li className="w-full">
                      <NavigationMenuLink className="block w-full px-4 py-2 text-sm hover:text-[#001D6C] hover:font-bold">
                        Perguntas frequentes
                      </NavigationMenuLink>
                    </li>
                    <li className="w-full">
                      <NavigationMenuLink className="block w-full px-4 py-2 text-sm hover:text-[#001D6C] hover:font-bold">
                        Suporte regional
                      </NavigationMenuLink>
                    </li>
                    <li className="w-full">
                      <NavigationMenuLink className="block w-full px-4 py-2 text-sm hover:text-[#001D6C] hover:font-bold">
                        Fale conosco
                      </NavigationMenuLink>
                    </li>
                  </ul>
                </NavigationMenuContent>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>

          {/* Botão base */}
          <a href="/profile">
            <BaseButton />
          </a>
        </div>
      </div>

      <div className="w-full h-8 bg-[#001D6C] flex items-center justify-left pl-4">
        <a href="/" className="hover:opacity-80 transition-opacity">
          <img src="/home_icon.svg" alt="Home" className="h-5 w-5" />
        </a>
      </div>

    </div>
  );
}
