export interface Experience {
  company: string;
  location: string;
  role: string;
  period: string;
  type: string; // WFA, WFO, Hybrid
  description: string[];
}

export interface Education {
  period: string;
  institution: string;
  degree: string;
  details?: string[];
}

export interface Skill {
  name: string;
}

export interface Language {
  name: string;
  level: string;
}

export interface PortfolioItem {
  title: string;
  description: string;
  url?: string;
  imageUrl?: string;
  appStoreUrl?: string;
  playStoreUrl?: string;
  tags?: string[];
}

export const resumeData = {
  name: "Muhammad Naufal Ammar",
  title: "Software Developer",
  avatarUrl: "/profile.jpeg",
  contact: {
    phone: "+62 858 0650 5480",
    email: "dxord.work@gmail.com",
    address: "Kedung doro 8 No. 15, Surabaya, Indonesia 60251",
    website: "naufalammarwork.github.io/aboutme",
  },
  about: "Passionate software engineer with expertise in JavaScript/TypeScript and growing skills in Node JS for back-end development. Experienced in building efficient, scalable applications and integrating modern technologies. Adept at problem-solving, clean coding, and collaborating in agile environments. Constantly learning and adapting to deliver high-quality solutions.",
  experience: [
    {
      company: "Kemang Internet",
      location: "Singapore",
      role: "Web & Mobile Developer (Frontend)",
      period: "Feb 2025 - Sept 2025",
      type: "WFA",
      description: [
        "Develop, publishing and execute AroundChess Chess game analytics using Stockfish AI, etc for German client.",
        "Collaborating with great team using React Framework (NodeJS, NextJS and React Native).",
        "Make sure consistency across Web and mobile about flow and functionality, upload versioning on cross platform console (Apple & Android)."
      ]
    },
    {
      company: "STEBASIA",
      location: "Jakarta",
      role: "Web & Mobile Developer (Frontend)",
      period: "Des 2022 - Jan 2025",
      type: "WFA",
      description: [
        "Develop, publishing and execute HausBuddy & MyCondo building management information system for German client.",
        "Collaborating with great team using React Framework (NextJS and React Native).",
        "Make sure consistency across Web and mobile about flow and functionality, upload versioning on cross platform console (Apple & Android)."
      ]
    },
    {
      company: "Crocodic",
      location: "Semarang",
      role: "Mobile Developer (Frontend)",
      period: "Sep 2022 - 2023",
      type: "WFA",
      description: [
        "Develop, publishing and execute KIPASKU focused on Alarm to do information system for Surabaya client.",
        "Collaborating with great team using React Framework (React Native).",
        "Make sure consistency about flow and functionality, upload versioning on cross platform console (Apple & Android)."
      ]
    },
    {
      company: "Software Gallery",
      location: "Surabaya",
      role: "Web & Mobile Developer (Fullstack)",
      period: "Jul 2022 - Oct 2022",
      type: "WFO",
      description: [
        "Developing and publishing Apps and Web for clients in Surabaya.",
        "Integrating online store APIs from Shopee for dashboard sales.",
        "Technology used: React Native, React JS, Node JS, Mongo DB, SQL."
      ]
    },
    {
      company: "DIGITELS",
      location: "Bali",
      role: "Mobile Developer (Frontend)",
      period: "Oct 2021 - Apr 2022",
      type: "Hybrid",
      description: [
        "Develop, publishing and execute DIGITELS Hotel lifecycle system for Profuct.",
        "Collaborating with great team using React Framework (React Native) and MQTT for IOT integration.",
        "Make sure consistency about flow and functionality, upload versioning on cross platform console (Apple & Android)."
      ]
    },
    {
      company: "CAHAYA UTAMA",
      location: "Surabaya",
      role: "Staff IT & Fullstack Developer",
      period: "Jun 2020 - Jan 2022",
      type: "",
      description: [
        "Develop and execute Attendance lifecycle system for Employees Outsource.",
        "Collaborating with great team using React Framework (React Native) and Face Recognition for Biomethrics authentication.",
        "Make sure consistency about flow and functionality, upload versioning."
      ]
    },
    {
      company: "Arkana Technology",
      location: "Sidoarjo",
      role: "Web & Mobile Developer, Leader Project",
      period: "Jan 2018 - Jun 2020",
      type: "",
      description: [
        "Develop and execute a project for a client in Surabaya and outside.",
        "Collaborating with great team using React Framework (React Native) and Node JS for back-end development.",
        "Make sure consistency about flow and functionality, upload versioning.",
        "Lead a project from start to finish, including project planning, task delegation, and meeting with clients to understand their requirements."
      ]
    },
    {
      company: "Freelance while studying",
      location: "Surabaya",
      role: "Web & Mobile Developer",
      period: "Sept 2016 - Jan 2018",
      type: "WFA",
      description: [
        "Develop and execute a project for a client in Surabaya and outside.",
        "Collaborating with great team using React Framework (React Native) and Node JS for back-end development.",
        "Make sure consistency about flow and functionality, upload versioning.",
      ]
    }
  ] as Experience[],
  education: [
    {
      period: "2013 - 2016",
      institution: "SMKN 2 SURABAYA",
      degree: "Software Engineering"
    },
    {
      period: "2017 - 2021",
      institution: "MAARIF HASYIM LATIEF UNIVERSITY",
      degree: "Informatics Engineering",
      details: ["GPA: 3.4 / 4.0"]
    }
  ] as Education[],
  skills: [
    "React Native", "React JS/Next JS", "Typescript", "Firebase Google", "Figma", "Node JS", "Wordpress", "MongoDB, SQL", "Tailwind", "Java", "Swift"
  ],
  languages: [
    { name: "English", level: "Comprehension" },
    { name: "Indonesia", level: "Fluent" }
  ],
  portfolio: [
    {
      title: "AroundChess",
      description: "Project on Kemang Internet (Singapore)",
      url: "https://aroundchess.com",
      appStoreUrl: "https://apps.apple.com/ch/app/aroundchess",
      playStoreUrl: "https://play.google.com/store/apps/details?id=com.aroundchess",
    },
    {
      title: "HausBuddy",
      description: "Project on STEBASIA (Jakarta)",
      url: "https://mycondo.kuningan.de/",
      appStoreUrl: "https://apps.apple.com/id/app/hausbuddy/id6444334330",
      playStoreUrl: "https://play.google.com/store/apps/details?id=com.hausbuddy.app&hl=en",
    },
    {
      title: "Digitels",
      description: "Project on DIGITELS (Bali)",
      url: "https://digitels.com/",
      appStoreUrl: "https://apps.apple.com/id/app/digitels/id1606879984",
      playStoreUrl: "https://play.google.com/store/apps/details?id=com.digitels&hl=en",
    }
  ] as PortfolioItem[]
};
