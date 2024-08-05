import {
  algorithms,
  devNotes,
  oscs,
  imageOne,
  imageTwo,
  imageThree,
  imageFour,
  imageFive,
} from "../assets";

export const navLinks = [
  {
    id: "hero",
    title: "Home",
  },
  {
    id: "portfolio",
    title: "Portfolio",
  },
  {
    id: "experience",
    title: "Experience",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const experiences = [
  {
    title: "IT-Help Desk",
    company_name: "Massasoit CC",
    date: "2024 - Present",
    details: [
      "Maintained, uploaded, and contributed to daily operations<span style='color: white;'>.",
      "Experienced in Team Dynamix ticking sytem, Microsoft Azure, Excell, Microsoft 365.<span style='color: white;'></span>.",
      "Responsible for uploading documentation and removing/repairing hardware<span style='color: white;'></span>.",
    ],
  },
  {
    title: "Software Developer",
    company_name: "Zenyte",
    date: "2023 - Present",
    details: [
      "Develope for server with over 4,000 active community memebers<span style='color: white;'> </span>.",
      "<span style='color: white;'>Written in Java, Kotlin, using Gradle, Maven, Json, Yaml, Docker, NGINX, git, Github </span>",
      "<span style='color: white;'>Deobfiscated, and implemented (upgrading) current game</span>. Continously mainting and contributing to the ongoing success of the game.",
    ],
  },
  {
    title: "Freelance",
    company_name: "Sarin-RSPS",

    details: [
      "Built a fully customizable webiste <span style='color: white;'>hosting the server via Hostinger</span> and maintained the website.",
      "Developed and maintained <span style='color: white;'><a href= 'https://sarinrsps.com/'>Sarin-RSPS</a></span>",
      "<span style='color: white;'>Collaborated with a team</span> ",
    ],
  },
  {
    title: "Massasoit Community College",
    company_name: "2023 - 2024",
    date: "GPA: 3.97",
    details: [
      "Studied <span style='color: white;'>computer science</span> at Massasoit Community College.",
      "Extensive studies in Mathmatics, Computer theory, along with Data Structures and Algorithms.<span style='color: white;'></span>",
      "Excelled in Calculus, Discrete Mathmatics, and Programming<span style='color: white;'>; worked f</span>.",
    ],
  },
];

const portfolio = [
  {
    name: "Open Source",
    description:
      "Contribute, maintain, and update for multiple Github Repositories. Zenyte, is an online MMORPG with over 5,000 active community members via Discord, and over 100 concurrent players.",
    image: oscs,
    extraImages: [imageOne, imageTwo, imageThree, imageFour, imageFive],
  },
  {
    name: "Music",
    description: "Accumulated over 500,000 stream's, reaching across ",
    image: devNotes,
  },
  {
    name: "Visually Understanding Algorithms",
    description:
      "A showcase of animated algorithms coded using TypeScript, with the video garnering over 400,000 views.",
    image: algorithms,
  },
];

export { experiences, portfolio };
