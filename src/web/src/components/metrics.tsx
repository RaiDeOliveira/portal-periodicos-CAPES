interface MetricsProps {
  citations: string;
  readers: string;
  qualis: string;
}

export function Metrics({ citations, readers, qualis }: MetricsProps) {
  return (
    <div className="w-full p-6">
      {/* Título centralizado e destacado */}
      <h2 className="text-2xl font-bold text-dark1 text-center mb-4 border-b border-gray-300 pb-2">
        Métricas
      </h2>

      {/* Dados de Métricas */}
      <div className="space-y-4">
        {/* Linha de Citações */}
        <div className="flex items-center justify-between text-lg">
          <span className="text-purple1 font-semibold">Citações</span>
          <span className="text-dark1 font-medium">{citations}</span>
        </div>

        {/* Linha de Leitores */}
        <div className="flex items-center justify-between text-lg">
          <span className="text-blue1 font-semibold">Leitores</span>
          <span className="text-dark1 font-medium">{readers}</span>
        </div>

        {/* Linha de Qualis */}
        <div className="flex items-center justify-between text-lg">
          <span className="text-green1 font-semibold">Qualis</span>
          <span className="text-dark1 font-medium">{qualis}</span>
        </div>
      </div>
    </div>
  );
}
