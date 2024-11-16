import { Button } from "@/components/ui/button";

interface PublicationLinksProps {
  link: string;
}

export function PublicationLinks({ link }: PublicationLinksProps) {
  return (
    <div className="space-y-4 w-full">
      <Button
        asChild
        variant="secondary"
        className="bg-blue2 text-white hover:bg-purple2 transition-colors w-full h-12 text-lg font-semibold rounded-none"
      >
        <a href={link} target="_blank" rel="noopener noreferrer">
          Acesse o artigo
        </a>
      </Button>

      {/* Botões auxiliares */}
      <div className="grid grid-cols-2 gap-2">
        <Button asChild variant="outline" className="text-dark3 hover:bg-gray-100 h-12 rounded-none">
          <a href="#disponibilidade">Baixar</a>
        </Button>
        <Button asChild variant="outline" className="text-dark3 hover:bg-gray-100 h-12 rounded-none">
          <a href="#compartilhar">Compartilhar</a>
        </Button>
      </div>
    </div>
  );
}
