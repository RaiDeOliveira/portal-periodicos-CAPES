import { NavBar } from "@/components/navbar";

export function Home() {
  return (
    <div>
      {/* Barra de navegação fixa */}
      <NavBar />

      {/* Conteúdo da página, com espaçamento para não sobrepor a NavBar */}
      <div className="pt-[80px]"> {/* Ajuste o padding para garantir que o conteúdo não fique escondido atrás da navbar */}
        <div>
          {/* Seu conteúdo vai aqui */}
        </div>
      </div>
    </div>
  );
}
