// experienceData.ts
import LORlogo from './logos/LOR.png';
import harbourContractors from './logos/harbourcontractors.svg';
import pfgeomatics from './logos/pfgeomatics.webp'

type Experience = {
  jobTitle: string;
  company: string;
  logo: string;
  duration: string;
  website: string;
  responsibilities: string[];
};

const experienceData: Experience[] = [
  {
    jobTitle: "Engineer / Surveyor",
    company: "PF Geomatics Ltd",
    logo: pfgeomatics,
    duration: "Apr 2023 - Present",
    website: "http:/www.pfgeomatics.com/",
    responsibilities: [
      "Collaborated with clients on multiple projects across London area to understand project requirements and objectives, ensuring effective communication.",
      "Conducted site surveys, utilising advanced surveying equipment/software.",
      "Prepared accurate and detailed survey reports, delivering comprehensive documentation to clients for informed decision-making",
      "Applied engineering principles and best practices to resolve technical challenges encountered on- site, optimising project efficiency.",
      "Built the official company website to showcase projects and services"
    ],
  },
  {
    jobTitle: "Project Manager",
    company: "Harbour Contractors Ltd",
    logo: harbourContractors,
    duration: "Sept 2020 - Aug 2022",
    website: "http://www.harbourcontractors.co.uk/",
    responsibilities: [
      "Co-founded and managed a successful construction management firm that specialised in domestic projects, overseeing a £1.9M new-build project and an £800K extension for private clients.",
      "Demonstrated expert project management and organisational skills to take ownership of the entire process from start to finish",
      "Managed multiple stakeholders, including sub-contractors, and provided regular updates to clients on progress and budget to ensure successful completion of each project",
      "Transitioned from a large UK contractor to self-employment, showcasing self-motivation, adaptability, and a strong sense of accountability."
    ],
  },
  {
    jobTitle: "Civil Engineer",
    company: "Laing O'Rourke",
    logo: LORlogo,
    duration: "Sep 2015 - Aug 2020",
    website: "https://www.laingorourke.com/",
    responsibilities: [
      "Successfully managed quality processes, client relationships and technical challenges for the Hinkley Point C nuclear power station project while also mentoring junior engineers.",
      "Managed sub-contract installation of fit-out packages at the Liverpool Street Station job site as part of the Crossrail project.",
      "Provided geotechnical temporary works design solutions to support delivery teams across all UK projects through Group Technical Services",
      "Completed a rigorous graduate development programme and relevant training courses to enhance my skills and knowledge in civil engineering.",
      "Delivered effective presentations and briefings that utilised my strong public speaking and communication abilities."
    ],
  },
];

export default experienceData;
