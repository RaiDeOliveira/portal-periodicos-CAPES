import CytoscapeComponent from "react-cytoscapejs";
import cytoscape from "cytoscape";
import fcose from "cytoscape-fcose";
import relatedPublications from "@/data/relatedPublications.json";

cytoscape.use(fcose);

export function PublicationGraph() {
  const elements = [
    // Nó principal
    { data: { id: "main", label: "Artigo Atual" } },
    // Nós relacionados
    ...relatedPublications.map((pub) => ({
      data: {
        id: `pub-${pub.id}`,
        label: `${pub.title} (${pub.year})`,
      },
    })),
    // Conexões
    ...relatedPublications.map((pub) => ({
      data: { source: "main", target: `pub-${pub.id}` },
    })),
  ];

  return (
    <CytoscapeComponent
      elements={elements}
      style={{ width: "100%", height: "700px" }}
      layout={
        {
          name: "fcose",
          idealEdgeLength: 150,
          nodeRepulsion: 3000,
          animate: true,
          padding: 50,
        } as any
      }
      stylesheet={[
        {
          selector: "node",
          style: {
            content: "data(label)",
            "text-valign": "center",
            "text-halign": "center",
            "background-color": "#1c1c5e",
            "border-width": 2,
            "border-color": "#FFA500",
            "font-size": "12px",
            color: "#fff",
            width: 150,
            height: 60,
            shape: "roundrectangle",
            "text-wrap": "wrap",
            "text-max-width": "130px",
          },
        },
        {
          selector: "edge",
          style: {
            width: 2,
            "line-color": "#FFA500",
            "target-arrow-color": "#FFA500",
            "target-arrow-shape": "triangle",
            "arrow-scale": 1.5,
            "line-style": "solid",
          },
        },
        {
          selector: ":selected",
          style: {
            "background-color": "#1F3A64",
            "border-color": "#FFA500",
            "border-width": 3,
          },
        },
      ]}
      cy={(cy) => {
        cy.autoungrabify(true);
        cy.fit();
      }}
    />
  );
}
