import { Button } from "@/components/ui/button"


interface PublicationLinksProps {
  link: string;
}

export function PublicationLinks({ link}: PublicationLinksProps) {
  return (
    <div className="space-y-2">
      <Button asChild variant={"outline"}>
        <a href={link} target="_blank" rel="noopener noreferrer">
          Acesse o artigo
        </a>
      </Button>
      
    </div>
  )
}