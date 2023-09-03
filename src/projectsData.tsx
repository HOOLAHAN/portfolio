// src/projectsData.ts
import tipsyTouristLogo from './logos/tipsy_tourist.svg';
import stratoStructLogo from './logos/stratostruct.svg';
import findAFilmLogo from './logos/find_a_film.svg';
import harbourContractors from './logos/harbourcontractors.svg';

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
    title: "Tipsy Tourist",
    logo: tipsyTouristLogo,
    altTextLogo: "Tipsy Tourist",
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
    title: "",
    logo: stratoStructLogo,
    altTextLogo: "StratoStruct",
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
    title: "",
    logo: findAFilmLogo,
    altTextLogo: "Find A Film",
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
    title: "",
    logo: harbourContractors,
    altTextLogo: "Harbour Contractors Ltd",
    description: "A company website showcasing projects and services",
    url: "http://www.harbourcontractors.co.uk/",
    client_repo: "https://github.com/HOOLAHAN/harbour_contractors_client",
    server_repo: "https://github.com/HOOLAHAN/harbour-contractors-lambda",
    technologies: [
      "React", "Node", "Chakra UI", "Twilio API", "AWS S3", "AWS Lambda"
    ],
    features: [
      ["Homepage", "A welcoming homepage to introduce visitors to Harbour Contractors Ltd."],
      ["Side Drawer Menu", "Features a side drawer that provides a menu of links to various pages on the website."],
      ["About Us Page", "An 'About Us' page offering details about the company’s history, mission, and team."],
      ["Services Page", "A 'Services' page describing the different services offered by the company."],
      ["Projects Carousel", "Features a 'Projects' page with a carousel displaying images of past projects."],
      ["Contact Us Form", "A 'Contact Us' page with a form allowing users to send messages directly to the company."],
      ["Chakra UI Styling", "Utilises Chakra UI for a modern and responsive design."]
    ]
  },
];

export default projects;
