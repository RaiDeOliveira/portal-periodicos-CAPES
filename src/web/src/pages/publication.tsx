import { PublicationHeader } from "@/components/publicationHeader";
import { PublicationDetails } from "@/components/publicationDetails";
import { PublicationLinks } from "@/components/publicationLinks";
import { Metrics } from "@/components/metrics";
import { PublicationChat } from "@/components/publicationChat";

export function Publication() {
  return (
    <div className="p-6 min-h-screen flex flex-col">
      <div className="mx-auto p-6 flex-grow">
        <PublicationHeader
          title="Software Testing With Large Language Models: Survey, Landscape, and Vision"
          year="2024"
          source="IEEE Computer Society"
          volume="50"
          issue="4"
          language="Inglês"
          doi="10.1109/tse.2024.3368208"
        />
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mt-6">
          <div className="lg:col-span-2">
            <PublicationDetails
              issn="2326-3881"
              authors="Junjie Wang, Yuchao Huang, Chunyang Chen, Zhe Liu, Song Wang, Junjie Wang"
              topics="Software Reliability Assessment and Prediction"
              summary="Pre-trained large language models (LLMs) have recently emerged as a breakthrough technology in natural language processing and artificial intelligence, with the ability to handle large-scale datasets and exhibit remarkable performance across a wide range of tasks. Meanwhile, software testing is a crucial undertaking that serves as a cornerstone for ensuring the quality and reliability of software products. As the scope and complexity of software systems continue to grow, the need for more effective software testing techniques becomes increasingly urgent, making it an area ripe for innovative approaches such as the use of LLMs. This paper provides a comprehensive review of the utilization of LLMs in software testing. It analyzes 102 relevant studies that have used LLMs for software testing, from both the software testing and LLMs perspectives. The paper presents a detailed discussion of the software testing tasks for which LLMs are commonly used, among which test case preparation and program repair are the most representative. It also analyzes the commonly used LLMs, the types of prompt engineering that are employed, as well as the accompanied techniques with these LLMs. It also summarizes the key challenges and potential opportunities in this direction. This work can serve as a roadmap for future research in this area, highlighting potential avenues for exploration, and identifying gaps in our current understanding of the use of LLMs in software testing."
            />
            <div className="mt-6 w-full">
              <PublicationChat />
            </div>
          </div>
          <div className="flex flex-col items-center">
            <Metrics citations="14" readers="167" qualis="A1" />
            <PublicationLinks link="https://ieeexplore.ieee.org/document/10440574" />
          </div>
        </div>
      </div>
    </div>
  );
}
