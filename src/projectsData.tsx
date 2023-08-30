// src/projectsData.ts

export interface Project {
  title: string;
  imageUrl: string;
  description: string;
  url: string;
}

const projects: Project[] = [
  {
    title: "Tipsy Tourist",
    imageUrl: "./logo.svg",
    description: "A travel app for tourists.",
    url: "http://www.tipsytourist.org/",
  },
  {
    title: "StratoStruct",
    imageUrl: "./logo.svg",
    description: "A tool for finding pre-cast suppliers",
    url: "http://www.stratostruct.com",
  },
];

export default projects;
