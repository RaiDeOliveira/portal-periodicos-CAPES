import { DialogSave } from "@/components/dialogSave";

interface PublicationHeaderProps {
  title: string;
  year: string;
  source: string;
  volume: string;
  issue: string;
  language: string;
  doi: string;
}

export function PublicationHeader({
  title,
  year,
  source,
  volume,
  issue,
  language,
  doi,
}: PublicationHeaderProps) {
  return (
    <div className="flex border-b pb-4 mb-4 flex-row justify-between">
      <div>
        <h1 className="text-2xl font-semibold text-dark1">{title}</h1>
        <p className="text-gray-600">
          {year}; {source}; Volume: {volume}; Issue: {issue}; Linguagem: {language}
        </p>
        <p className="text-sm text-blue1 mt-1">
          DOI: <a href={`https://doi.org/${doi}`} target="_blank" rel="noopener noreferrer">{doi}</a>
        </p>
      </div>
      <div className="self-center">
        <DialogSave />
      </div>
    </div>
  );
}
