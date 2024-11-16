import { useParams } from "react-router-dom";
import publications from "@/data/publications.json";
import { PublicationHeader } from "@/components/publicationHeader";
import { PublicationDetails } from "@/components/publicationDetails";
import { PublicationLinks } from "@/components/publicationLinks";
import { Metrics } from "@/components/metrics";
import { PublicationChat } from "@/components/publicationChat";
import { PublicationGraph } from "@/components/publicationGraph"; 

export function Publication() {
  const { id } = useParams();
  const publication = publications.find(
    (pub) => pub.id === parseInt(id || "0")
  );

  if (!publication) {
    return <div className="p-6">Artigo não encontrado.</div>;
  }

  return (
    <div className="p-6 min-h-screen pt-[96px] flex flex-col">
      <div className="mx-auto p-6 flex-grow">
        {/* Cabeçalho do artigo */}
        <PublicationHeader
          title={publication.title}
          year={publication.year}
          source={publication.source}
          volume={publication.volume}
          issue={publication.issue}
          language={publication.language}
          doi={publication.doi}
        />

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mt-6">
          {/* Detalhes e métricas do artigo */}
          <div className="lg:col-span-2">
            <PublicationDetails
              issn={publication.issn}
              authors={publication.authors}
              topics={publication.topics}
              summary={publication.summary}
            />
          </div>
          <div className="flex flex-col items-center space-y-">
            <div className="w-full">
              <PublicationLinks link={publication.link} />
              <Metrics
                citations={publication.citations.toString()}
                readers={publication.readers.toString()}
                qualis={publication.qualis}
              />
              <PublicationChat publication={publication.id} />
            </div>
          </div>
        </div>

        {/* Grafo dos artigos relacionados */}
        <div className="mt-12">
          <h2 className="text-2xl font-semibold mb-4">Artigos Relacionados</h2>
          <PublicationGraph />
        </div>
      </div>
    </div>
  );
}
