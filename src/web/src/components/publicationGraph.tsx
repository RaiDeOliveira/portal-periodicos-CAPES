import CytoscapeComponent from "react-cytoscapejs";
import relatedPublications from "@/data/relatedPublications.json";

export function PublicationGraph() {
  const elements = [
    // Nó principal
    { data: { id: "main", label: "Artigo Atual" }, position: { x: 0, y: 0 } },
    // Nós relacionados
    ...relatedPublications.map((pub) => ({
      data: { id: `pub-${pub.id}`, label: `${pub.title} (${pub.year})` },
      position: pub.position, // Posição fixa definida no JSON
    })),
    // Conexões
    ...relatedPublications.map((pub) => ({
      data: { source: "main", target: `pub-${pub.id}` },
    })),
  ];

  return (
    <CytoscapeComponent
      elements={elements}
      style={{ width: "100%", height: "400px" }}
      layout={{ name: "preset" }} // Layout fixo
      stylesheet={[
        {
          selector: "node",
          style: {
            content: "data(label)",
            "text-valign": "center",
            "text-halign": "center",
            "background-color": "#48BFE3",
            "text-outline-width": 1,
            "text-outline-color": "#000",
            color: "#fff",
          },
        },
        {
          selector: "edge",
          style: {
            width: 2,
            "line-color": "#76D6E8",
            "target-arrow-color": "#76D6E8",
            "target-arrow-shape": "triangle",
          },
        },
      ]}
      // Impede movimentação dos nós
      cy={(cy) => {
        cy.autoungrabify(true);
      }}
    />
  );
}
