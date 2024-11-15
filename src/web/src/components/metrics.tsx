interface MetricsProps {
  citations: string;
  readers: string;
  qualis: string
}

export function Metrics({ citations, readers, qualis }: MetricsProps) {
  return (
    <div className="w-full bg-light2 rounded-lg p-4 mb-2 shadow-md border border-gray-300">
      <h2 className="text-lg font-semibold text-dark2">Métricas</h2>
      <div className="space-y-1">
        <div className="flex items-center justify-between ">
          <span className="text-purple1 font-medium">Citações</span>
          <span className="text-dark1">{citations}</span>
        </div>
        <div className="flex items-center justify-between">
          <span className="text-blue1 font-medium">Leitores</span>
          <span className="text-dark1">{readers}</span>
        </div>
        <div className="flex items-center justify-between">
          <span className="text-blue1 font-medium">Qualis</span>
          <span className="text-dark1">{qualis}</span>
        </div>
      </div>
    </div>
  );
}
