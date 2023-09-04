// educationData.ts

type Education = {
  institute: string;
  course: string;
  duration: string;
  content: [string, string][];
};

const educationData: Education[] = [
  {
    institute: "Makers Academy",
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
      ["Clean Code", "Adhered to SOLID principles to write clean, maintainable code. Employed refactoring, clear naming conventions, and inline comments to enhance code readability."],
      ["DevOps", "Deployed projects on AWS services including S3, EC2, and Lambda. Set up CI/CD pipelines using GitHub Actions for streamlined development and deployment."]
    ],
  },
  {
    institute: "Cardiff University",
    course: "MEng Civil Engineering",
    duration: "Sept 2011 - Jun 2015",
    content: []
  }
];

export default educationData;
