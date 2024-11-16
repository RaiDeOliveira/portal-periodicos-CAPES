interface PublicationDetailsProps {
  issn: string;
  authors: string;
  topics: string;
  summary: string;
}

export function PublicationDetails({
  issn,
  authors,
  topics,
  summary,
}: PublicationDetailsProps) {
  return (
    <div className="flex-1">
      <div className="mb-4">
        <h2 className="font-semibold text-lg text-dark2">ISSN</h2>
        <p className="text-gray-700">{issn}</p>
      </div>
      <div className="mb-4">
        <h2 className="font-semibold text-lg text-dark2">Autores</h2>
        <p className="text-gray-700">{authors}</p>
      </div>
      <div className="mb-4">
        <h2 className="font-semibold text-lg text-dark2">Tópico(s)</h2>
        <p className="text-gray-700">{topics}</p>
      </div>
      <div>
        <h2 className="font-semibold text-lg text-dark2">Resumo</h2>
        <p className="text-gray-700">{summary}</p>
      </div>
    </div>
  );
}
