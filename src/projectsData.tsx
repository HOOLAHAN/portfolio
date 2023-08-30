// src/projectsData.ts
import tipsyTouristLogo from './logos/tipsy_tourist.svg';
import stratoStructLogo from './logos/stratostruct.svg';
import findAFilmLogo from './logos/find_a_film.svg';
import harbourContractors from './logos/harbourcontractors.svg';

export interface Project {
  title: string;
  logo: string;
  description: string;
  url: string;
  client_repo: string;
  server_repo: string;
  technologies: string[];
}

const projects: Project[] = [
  {
    title: "Tipsy Tourist",
    logo: tipsyTouristLogo,
    description: "A web page to generate a pub crawl/tourist attractions itinerary",
    url: "http://www.tipsytourist.org/",
    client_repo: "https://github.com/HOOLAHAN/tipsy-tourist",
    server_repo: "https://github.com/HOOLAHAN/tipsy-tourist-lambda",
    technologies: [
      "JavaScript", "Node", "Express", "React", "Chakra UI", "Google API", "AWS S3", "AWS Lambda"
    ]
  },
  {
    title: "StratoStruct",
    logo: stratoStructLogo,
    description: "A web page to find local suppliers of prefabricated construction products ranked by proximity",
    url: "http://www.stratostruct.com",
    client_repo: "https://github.com/HOOLAHAN/stratostruct",
    server_repo: "https://github.com/HOOLAHAN/stratostruct_server",
    technologies: [
      "MongoDB", "Express", "React", "Node", "HTML", "CSS", "Mapbox API", "AWS S3", "AWS EC2"
    ]
  },
  {
    title: "Find A Film",
    logo: findAFilmLogo,
    description: "A web page to search for films to watch",
    url: "http://findafilm.s3-website.eu-west-2.amazonaws.com/",
    client_repo: "https://github.com/HOOLAHAN/Find_A_Film",
    server_repo: "N/A",
    technologies: [
      "TypeScript", "Node", "Express", "React", "HTML", "CSS", "TMDB API", "AWS S3"
    ]
  },
  {
    title: "Harbour Contractors Ltd",
    logo: harbourContractors,
    description: "A company website showcasing projects and services",
    url: "http://www.harbourcontractors.co.uk/",
    client_repo: "https://github.com/HOOLAHAN/harbour_contractors_client",
    server_repo: "https://github.com/HOOLAHAN/harbour_contractors_lambda",
    technologies: [
      "React", "Node", "Chakra UI", "Twilio API", "AWS S3", "AWS Lambda"
    ]
  },
];

export default projects;
