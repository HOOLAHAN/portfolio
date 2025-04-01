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
        details: "Details to follow"
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
        details: "Details to follow"
      },
      {
        projectName: "Java Sound",
        image: "java_sound.png",
        startDate: "November 2021",
        endDate: "September 2022",
        location: "West Sussex, UK",
        details: "Details to follow"
      }
    ]
  },
  {
    company: "Laing O'Rourke",
    website: "https://www.laingorourke.com/",
    projects: [
      {
        projectName: "Group Technical Services",
        image: "gts.png",
        startDate: "September 2015",
        endDate: "September 2016",
        location: "Dartford, UK",
        details: "Details to follow"
      },
      {
        projectName: "Crossrail: Liverpool Street",
        image: "crossrail.png",
        startDate: "September 2016",
        endDate: "April 2019",
        location: "Liverpool Street, London",
        details: "Details to follow"
      },
      {
        projectName: "Hinkley Point C",
        image: "hinkley.png",
        startDate: "April 2019",
        endDate: "September 2020",
        location: "Somerset, UK",
        details: "Details to follow"
      }
    ]
  }
];

export default constructionProjects;
