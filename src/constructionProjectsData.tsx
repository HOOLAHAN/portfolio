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
        projectName: "Gatwick Station Project",
        image: "gatwick_station.png",
        startDate: "April 2023",
        endDate: "November 2023",
        location: "Gatwick, London",
        details: "I carried out essential site engineering/surveying tasks for Lindner Prater Ltd, focusing on the precise installation of roofing, internal/external cladding and escalator glasing. This project required a high level of accuracy, and I conducted surveys to identify potential tolerance issues and interface challenges."
      },
      {
        projectName: "53 Clarendon Road",
        image: "clarendon_road.png",
        startDate: "November 2023",
        endDate: "February 2024",
        location: "Watford, London",
        details: "I worked on Regal's The Clarendon project in Watford, a high-rise residential development supported by PF Geomatics. I collaborated closely with the Regal team, overseeing the concrete subcontractor's work. The Clarendon features 168 private residences and amenities like a sky garden, concierge, cinema, and gym, playing a key role in Watford's regeneration. My responsibilities included quality checks, rebar inspections, and conducting pre-pour and post-pour surveys to maintain the tight tolerances needed for cladding. I also carried out general surveying and setting out verifications to ensure construction met the required quality standards."
      },
      {
        projectName: "105 Victoria Street",
        image: "victoria_street.png",
        startDate: "June 2024",
        endDate: "April 2025",
        location: "Westminster, London",
        details: "At 105 Victoria Street, I worked with Severfield, a leading steel specialist. My role involved performing site engineering duties to support steel erection and the installation of precast planks. I was responsible for surveying embedments cast into the core, producing fin plate setting out drawings, checking steel alignments, and communicating tirfor/pack requirements as needed. Additionally, I set out precast planks as they were landed on the steel structure and provided as-built survey reports of the completed works for handover."
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
        details: "Trippets was a new build project for a private client, which I project managed from demolition to completion through specialised subcontract packages. Key highlights of the project included piled foundations, a green oak frame, timber framing with high-quality insulation to achieve an EPC A+ rating, underfloor heating, a swimming pool, garage, pool house, landscaped gardens, solar panels, and a ground source heat pump utilising a network of 9 boreholes. The property also featured premium finishes, cedar cladding, a slate roof, and limestone walls."
      },
      {
        projectName: "Java Sound",
        image: "java_sound.png",
        startDate: "November 2021",
        endDate: "September 2022",
        location: "West Sussex, UK",
        details: "Java Sound was a house extension designed to integrate modern features with traditional aesthetics. The extension included a green oak structure, bifolding doors, a spacious decking area, an air source heat pump, underfloor heating, larch cladding, and a zinc roof. I effectively managed project timelines and budgets while coordinating with subcontractors and keeping clients regularly informed of progress."
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
        details: "As a Setting Out Engineer / Section Engineer at Hinkley Point C Nuclear Power Station, I gained invaluable field experience at Nuclear Island Unit 1, setting out and conducting QA checks for a record-breaking UK raft slab pour of 9000m3. As a Section Engineer, I ensured on-time material deliveries, planned, checked, and approved temporary works, conducted quality checks, managed Health & Safety through RAMS/briefings, resolved technical issues via RFIs/NCRs, and liaised with construction managers to discuss future project requirements. I also enhanced team performance and project delivery by mentoring junior engineers and maintaining robust client relationships."
      },
      {
        projectName: "Crossrail: Liverpool Street Station",
        image: "crossrail.png",
        startDate: "September 2016",
        endDate: "April 2019",
        location: "Liverpool Street, London",
        details: "As a Package Manager at Crossrail Liverpool Street Station, I managed fit-out package subcontractors including back-of-house handrails, edge protection, ladders, access hatches, fall restraint systems, and front-of-house handrails and balustrades. I demonstrated leadership by coordinating subcontractor efforts, ensuring the timely and quality delivery of critical station infrastructure. I maintained strict adherence to Health & Safety and Quality Assurance protocols, managing comprehensive documentation including RAMS, ITPs, and QA packs. I also worked closely with commercial and planning teams to ensure all contract deliverables aligned with project timelines."
      },
      {
        projectName: "Group Technical Services",
        image: "gts.png",
        startDate: "September 2015",
        endDate: "September 2016",
        location: "Dartford, UK",
        details: "As a Temporary Works Design Engineer at Group Technical Services, I created geotechnical temporary works design solutions to enhance the infrastructure and safety of construction sites across the UK. During this role, I also developed my public speaking and communication skills by delivering effective presentations."
      }
    ]
  }
];

export default constructionProjects;
