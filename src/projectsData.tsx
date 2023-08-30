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
  technologies: string[];
}

const projects: Project[] = [
  {
    title: "Tipsy Tourist",
    logo: tipsyTouristLogo,
    description: "A travel app for tourists.",
    url: "http://www.tipsytourist.org/",
    technologies: [
      "JavaScript", "Node", "Express", "React", "Chakra UI", "Google API", "AWS S3", "AWS Lambda"
    ]
  },
  {
    title: "StratoStruct",
    logo: stratoStructLogo,
    description: "A tool for finding pre-cast suppliers",
    url: "http://www.stratostruct.com",
    technologies: [
      "MongoDB", "Express", "React", "Node", "HTML", "CSS", "Mapbox API", "AWS S3", "AWS EC2"
    ]
  },
  {
    title: "Find A Film",
    logo: findAFilmLogo,
    description: "A tool for finding films to watch",
    url: "http://findafilm.s3-website.eu-west-2.amazonaws.com/",
    technologies: [
      "TypeScript", "Node", "Express", "React", "HTML", "CSS", "TMDB API", "AWS S3"
    ]
  },
  {
    title: "Harbour Contractors Ltd",
    logo: harbourContractors,
    description: "A company website showcasing projects",
    url: "http://www.harbourcontractors.co.uk/",
    technologies: [
      "React", "Node", "Chakra UI", "Twilio API", "AWS S3", "AWS Lambda"
    ]
  },
];

export default projects;
