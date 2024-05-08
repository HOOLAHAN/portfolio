// educationData.ts

import cardiff from './logos/cardiff.png'
import makers from './logos/Makers.png'

type Education = {
  institute: string;
  logo: string;
  course: string;
  duration: string;
  content: [string, string][];
};

const educationData: Education[] = [
  {
    institute: "Makers Academy",
    logo: makers,
    course: "Full Stack Software Development Bootcamp",
    duration: "Sept 2022 - Jan 2023",
    content: [
      ["Test Driven Development", "Adopted Test-Driven Development (TDD) as a core approach, enhancing code reliability and maintainability."],
      ["Debugging", "Leveraged strong analytical skills and attention to detail for efficient debugging."],
      ["Agile Working", "Completed four engineering projects using Agile frameworks, including Scrum and Kanban."],
      ["Team Communication", "Conducted daily stand-ups, sprint planning, and retrospectives to ensure effective team communication."],
      ["Collaboration Tools", "Utilised tools such as Jira, Miro, Trello and Slack for remote and in-person collaboration."],
      ["Object Oriented Programming", "Learned to design multi-class systems following OOP principles like encapsulation, inheritance, and polymorphism."],
      ["Version Control/Git", "Practiced frequent commits with meaningful messages to maintain code history. Demonstrated proficiency in Git operations such as branching, merging, rebasing, pull requests, and code reviews."],
      ["Clean Code", "Focused on writing clean, maintainable code. Techniques employed include refactoring, implementing clear naming conventions, and using inline comments to enhance code readability and understandability."],
      ["DevOps", "Deployed projects on AWS services including S3, EC2, and Lambda. Set up CI/CD pipelines using GitHub Actions for streamlined development and deployment."]
    ],
  },
  {
    institute: "Cardiff University",
    logo: cardiff,
    course: "MEng Civil Engineering",
    duration: "Sept 2011 - Jun 2015",
    content: [
      ["Achieved", "Second Class Honours Division One (2:1) Grade."],
      ["Modules included", "Engineering Analysis, Structural Mechanics, Computing, Civil Engineering Design, Continuum Solid Mechanics, Business Management, Hydraulics."]
      ]
  }
];

export default educationData;
