// src/projectsData.ts
import tipsyTouristLogo from './logos/tipsy_tourist.svg';
import stratoStructLogo from './logos/stratostruct.svg';
import findAFilmLogo from './logos/find_a_film.svg';
import harbourContractors from './logos/harbourcontractors.svg';
import yahtzeeLogo from './logos/yahtzee_logo.png'
import pfgeomatics from './logos/pfgeomatics.webp'

export interface Project {
  title: string;
  logo: string;
  altTextLogo: string;
  description: string;
  url: string;
  client_repo: string;
  server_repo: string;
  technologies: string[];
  features: [string, string][];
}

const projects: Project[] = [
  {
    "title": "Yahtzee!",
    "logo": yahtzeeLogo,
    "altTextLogo": "Logo of Yahtzee!",
    "description": "A web-based Yahtzee game allowing single players to enjoy the classic dice game with modern UI features",
    "url": "http://yahtzeehub.s3-website.eu-west-2.amazonaws.com/",
    "client_repo": "https://github.com/HOOLAHAN/yahtzee",
    "server_repo": "N/A",
    "technologies": [
      "React", "TypeScript", "Tailwind CSS", "AWS S3", "AWS Amplify", "AWS Cognito", "DynamoDB"
    ],
    "features": [
      ["Interactive Dice Rolling", "Users can roll the dice with a click and decide which dice to hold for the next roll."],
      ["Dynamic Scoring", "Automatic calculation and display of potential scores in various categories based on the current dice roll."],
      ["User-Friendly Interface", "Clean and intuitive UI featuring score history, current dice state, and actionable buttons."],
      ["Score Locking", "Allows users to lock in their score for a category after each round."],
      ["Game Reset", "Option to reset the game to its initial state, clearing all scores and history."],
      ["Cross-Platform Compatibility", "Designed to function seamlessly on both mobile devices and desktops."],
      ["User Authentication", "Secure login and registration functionality using AWS Cognito to provide a personalised gaming experience."],
      ["Score Storage", "A leaderboard implemented with DynamoDB to showcase top scores, encouraging competition among players."]
    ]
  },
  {
    title: "Tipsy Tourist",
    logo: tipsyTouristLogo,
    altTextLogo: "Logo of Tipsy Tourist",
    description: "A web page to generate a pub crawl/tourist attractions itinerary",
    url: "http://www.tipsytourist.org/",
    client_repo: "https://github.com/HOOLAHAN/tipsy-tourist",
    server_repo: "https://github.com/HOOLAHAN/tipsy-tourst-lambda",
    technologies: [
      "JavaScript", "Node", "Express", "React", "Chakra UI", "Google API", "AWS S3", "AWS Lambda"
    ],
    features: [
      ["User-Friendly Interface", "Single-page design featuring a map, customisable search form, itinerary, and location details."],
      ["Customised Experience", "Allows users to input a starting and ending point, along with the number of pubs and attractions they want to visit, for a tailored pub crawl and sightseeing experience."],
      ["Interactive Map", "Offers a full-screen map where the planned route is displayed."],
      ["Accessible Itinerary", "Features a side drawer that can be opened to view the detailed itinerary of the planned route."],
      ["Detailed Location Info", "Provides extra information about each stop in the itinerary when clicked, such as operating hours and customer reviews."],
      ["Cross-Platform Compatibility", "Designed to function seamlessly on both mobile devices and desktops."]
    ]
  },
  {
    title: "StratoStruct",
    logo: stratoStructLogo,
    altTextLogo: "Logo of StratoStruct",
    description: "A web page to find local suppliers of prefabricated construction products ranked by proximity",
    url: "http://www.stratostruct.com",
    client_repo: "https://github.com/HOOLAHAN/stratostruct_client",
    server_repo: "https://github.com/HOOLAHAN/stratostruct_server",
    technologies: [
      "MongoDB", "Express", "React", "Node", "HTML", "CSS", "Mapbox API", "AWS S3", "AWS EC2"
    ],
    features: [
      ["User Authentication", "Utilises JWTs (JSON Web Tokens) to facilitate secure user sign-up and login."],
      ["Search and Query Functionality", "Allows users to query the MongoDB database to find suppliers based on selected construction products."],
      ["Location-Based Ranking", "Users can input their postcode, and suppliers are ranked by driving distance to the provided location using the Mapbox API."],
      ["Comprehensive Product List", "Offers an extensive list of prefabricated construction products for users to choose from."],
      ["Admin Dashboard", "Administrators have access to a protected route where they can update the supplier database."],
      ["Responsive Design", "Built with HTML and CSS to ensure the website is fully responsive and compatible across different devices."],
      ["High-Performance Backend", "Uses Express and Node to ensure a fast and efficient server-side experience."],
      ["Secure Storage", "Leverages AWS S3 for secure and scalable storage solutions."],
      ["Server Deployment", "Utilises AWS EC2 for reliable and robust server hosting."]
    ]
  },
  {
    title: "Find A Film",
    logo: findAFilmLogo,
    altTextLogo: "Logo of Find A Film",
    description: "A web page to search for films to watch",
    url: "http://findafilm.s3-website.eu-west-2.amazonaws.com/",
    client_repo: "https://github.com/HOOLAHAN/Find_A_Film",
    server_repo: "N/A",
    technologies: [
      "TypeScript", "Node", "Express", "React", "HTML", "CSS", "TMDB API", "AWS S3"
    ],
    features: [
      ["Quick Search", "Offers quick results from user input via the search bar."],
      ["Error Handling", "Displays error messages for enhanced user experience."],
      ["Clean UI", "Provides key information in a clean and easy-to-read user interface."],
      ["Sorting and Filtering", "Allows users to filter by genre, rating and release date."],
      ["Keyword Search", "Users can use keywords in their search for more refined results."],
      ["Similar Films", "Offers recommendations for similar films based on the user's search."],
      ["Detailed Information", "Provides detailed information about each film including synopsis, runtime, rating and more."],
      ["Streaming Services", "Shows the streaming services where the film is available."],
      ["Responsive Design", "Optimised for both desktop and mobile devices."]
    ]
  },
  {
    title: "Harbour Contractors Ltd",
    logo: harbourContractors,
    altTextLogo: "Logo of Harbour Contractors Ltd",
    description: "A company website showcasing projects and services",
    url: "http://www.harbourcontractors.co.uk/",
    client_repo: "https://github.com/HOOLAHAN/harbour_contractors_client",
    server_repo: "https://github.com/HOOLAHAN/harbour-contractors-lambda",
    technologies: [
      "React", "Node", "Chakra UI", "AWS S3", "AWS Lambda"
    ],
    features: [
      ["Homepage", "A welcoming homepage to introduce visitors to Harbour Contractors Ltd."],
      ["Side Drawer Menu", "Features a side drawer that provides a menu of links to various pages on the website."],
      ["About Us Page", "An 'About Us' page offering details about the company’s history, mission, and team."],
      ["Services Page", "A 'Services' page describing the different services offered by the company."],
      ["Projects Carousel", "Features a 'Projects' page with a carousel displaying images of past projects."],
      ["Chakra UI Styling", "Utilises Chakra UI for a modern and responsive design."]
    ]
  },
  {
    "title": "PF Geomatics Ltd",
    "logo": pfgeomatics,
    "altTextLogo": "Logo of PF Geomatics Ltd",
    "description": "Official company website for PF Geomatics Ltd.",
    "url": "http://www.pfgeomatics.com/",
    "client_repo": "https://github.com/HOOLAHAN/pfgeomatics",
    "server_repo": "Not Applicable",
    "technologies": [
      "React", 
      "TypeScript", 
      "Node", 
      "Chakra UI", 
      "AWS S3"
    ],
    "features": [
      ["Cover Video", "Homepage video loop showcasing the PF Geomatics team at work, highlighting our field activities and technological expertise."],
      ["About Component", "Modal dialog with detailed information about PF Geomatics' mission, team, and ethos."],
      ["Services Component", "Interactive modal listing the various services PF Geomatics offers, with descriptions to help visitors understand our capabilities."],
      ["Projects Carousel", "Image carousel featuring past projects to demonstrate our track record of success and expertise."],
      ["Chakra UI Styling", "Website utilises Chakra UI for a sleek, modern, and responsive design."],
      ["Colour Mode Switcher", "Feature allowing users to toggle between light and dark modes, enhancing usability and visual experience."]
    ]
  }
];

export default projects;
