export interface ConstructionProject {
  company: string;
  website: string;
  projects: {
    projectName: string;
    image: string;
    startDate: string;
    endDate: string;
    location: string;
    details: string;
  }[];
}

const constructionProjects: ConstructionProject[] = [
  {
    company: "PF Geomatics Ltd",
    website: "https://www.pfgeomatics.com/",
    projects: [
      {
        projectName: "105 Victoria Street",
        image: "victoria_street.png",
        startDate: "June 2024",
        endDate: "April 2025",
        location: "Westminster, London",
        details: "At 105 Victoria Street, I collaborated with Severfield, a leading steel specialist, to facilitate steel erection and the installation of precast planks. My responsibilities included surveying embedments cast into the core, creating fin plate setting out drawings, and verifying steel alignments. I effectively communicated tirfor/pack requirements, set out precast planks, and delivered as-built survey reports for handover, ensuring precision and quality."
      },
      {
        projectName: "53 Clarendon Road",
        image: "clarendon_road.png",
        startDate: "November 2023",
        endDate: "February 2024",
        location: "Watford, London",
        details: "I played a key role in Regal's The Clarendon project, a high-rise residential development in Watford. Collaborating closely with the Regal team, I oversaw the concrete subcontractor's work, ensuring quality standards through meticulous quality checks, rebar inspections, and both pre-pour and post-pour surveys. I also conducted setting out verifications to maintain the stringent tolerances needed for cladding, contributing to the project's success in Watford's regeneration."
      },
      {
        projectName: "Gatwick Station Project",
        image: "gatwick_station.png",
        startDate: "April 2023",
        endDate: "November 2023",
        location: "Gatwick, London",
        details: "I led essential site engineering and surveying tasks for Lindner Prater Ltd, focusing on the precise installation of roofing, internal/external cladding, and escalator glazing. My role required a high level of accuracy, where I conducted comprehensive surveys to identify potential tolerance issues and interface challenges, ensuring high-quality construction standards."
      }
    ]
  },
  {
    company: "Harbour Contractors Ltd",
    website: "https://www.harbourcontractors.co.uk/",
    projects: [
      {
        projectName: "Trippets",
        image: "trippets.png",
        startDate: "September 2020",
        endDate: "September 2022",
        location: "West Sussex, UK",
        details: "I managed the Trippets project, a £2M new build for a private client, from demolition to completion. The project included piled foundations, a green oak frame, timber framing with high-quality insulation to achieve an EPC A rating, underfloor heating, a swimming pool, garage, pool house, landscaped gardens, solar panels, and a ground source heat pump using 9 boreholes. The property featured premium finishes, cedar cladding, a slate roof, and limestone walls, reflecting my commitment to delivering high-quality results."
      },
      {
        projectName: "Java Sound",
        image: "java_sound.png",
        startDate: "November 2021",
        endDate: "September 2022",
        location: "West Sussex, UK",
        details: "I managed the Java Sound project, a £1M house extension that seamlessly blended modern features with traditional aesthetics. Key elements included a green oak structure, bifolding doors, a spacious decking area, an air source heat pump, underfloor heating, larch cladding, and a zinc roof. I coordinated subcontractors effectively and ensured regular client updates, maintaining project timelines and budget."
      }
    ]
  },
  {
    company: "Laing O'Rourke",
    website: "https://www.laingorourke.com/",
    projects: [
      {
        projectName: "Hinkley Point C Nuclear Power Station",
        image: "hinkley.png",
        startDate: "April 2019",
        endDate: "September 2020",
        location: "Somerset, UK",
        details: "As a Setting Out Engineer / Section Engineer at Hinkley Point C, I gained invaluable field experience working on the Nuclear Island Unit 1, including a record-breaking UK raft slab pour of 9000m3. I managed material deliveries, quality checks, Health & Safety protocols, and technical issue resolution, while mentoring junior engineers and maintaining client relationships."
      },
      {
        projectName: "Crossrail: Liverpool Street Station",
        image: "crossrail.png",
        startDate: "September 2016",
        endDate: "April 2019",
        location: "Liverpool Street, London",
        details: "As a Package Manager, I led the coordination of fit-out package subcontractors, including handrails, edge protection, and balustrades. I ensured adherence to Health & Safety and Quality Assurance standards while managing contract deliverables and collaborating with commercial and planning teams to meet project timelines."
      },
      {
        projectName: "Group Technical Services",
        image: "gts.png",
        startDate: "September 2015",
        endDate: "September 2016",
        location: "Dartford, UK",
        details: "In my role as a Temporary Works Design Engineer, I developed geotechnical temporary works design solutions to enhance construction site safety and infrastructure. I also improved my communication and presentation skills through delivering technical presentations."
      }
    ]
  }
];

export default constructionProjects;
