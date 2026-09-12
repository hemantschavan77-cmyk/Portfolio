// Centralized portfolio data source of truth

export const personalInfo = {
  name: "Hemant Chavan",
  title: "Full-Stack Java Developer",
  greeting: "Hi, I'm Hemant ",
  profileImage: "/Profile4.jpg",
  about:
    "Full-Stack Java Developer with hands-on experience building web applications using Java, Spring Boot, REST APIs, React.js, and MySQL. Experienced in developing backend services, integrating relational databases using JPA/Hibernate, and building responsive frontend interfaces. Strong foundation in object-oriented programming, database management, and full-stack application development."
};

export const skillsData = [
  {
    category: "Web Technologies",
    skills: ["HTML", "CSS", "Bootstrap", "React.js"]
  },
  {
    category: "Programming Languages",
    skills: ["Java","Javascript", "C", "CPP"]
  },
  {
    category: "Databases",
    skills: ["MySQL"]
  },
  {
    category: "Tools",
    skills: ["Git", "Github", "version Control"]
  },
  {
    category: "Other Skills",
    skills: ["Problem Solving", "Teamwork", "Communication"]
  }
  
];

export const educationData = [
  {
    degree: "S.S.C",
    institution: "Nashik Board",
    yearOfPassing: "2020",
    percentage: "86%"
  },
  {
    degree: "H.S.C",
    institution: "Nashik Board",
    yearOfPassing: "2022",
    percentage: "61%"
  },
  {
    degree: "Bachelor of Computer Application",
    institution: "KBC North Maharashtra University",
    yearOfPassing: "2025",
    percentage: "75%"
  },
  {
    degree: "Full Stack Java (Course)",
    institution: "ITVEDANT",
    yearOfPassing: "2026",
    percentage: "Completed"
  },
  {
    degree: "Master of Computer Application",
    institution: "G.H. Raisoni College",
    yearOfPassing: "Expected 2027",
    percentage: "Appearing"
  }
];

export const projectsData = [
  {
    id: "recipe-hub",
    title: "Recipe Hub",
    description:
      "A social recipe-sharing platform built with React.js where users can upload, explore, and search recipes based on their cravings. It features recipe categories, likes, and ratings, offering a social-media–like experience for food enthusiasts.",
    githubUrl: "https://github.com/hemantschavan77-cmyk/Hemant-s-Recipie-Hub.git",
    liveDemoUrl: "https://hemant-s-recipie-hub.vercel.app/"
  },
  {
    id: "movie-ticket-booking",
    title: "Movie Ticket Booking System",
    description:
      "A desktop-based movie ticket booking system developed using C# and MS Access. The application enables users to select movies, showtimes, and book seats while securely storing booking data in the database.",
    githubUrl: "https://github.com/hemantschavan77-cmyk/MovieBookingApp.git",
    liveDemoUrl: null
  },
  {
    id: "cinephile-quiz",
    title: "Cinephile Quiz",
    description:
      "A fun and interactive movie-themed quiz application built using HTML and CSS. Designed for movie lovers to test their knowledge through a simple, clean, and engaging interface.",
    githubUrl: null,
    liveDemoUrl: "https://cinema-quiz-roan.vercel.app/"
  }
];

export const contactConfig = {
  serviceId: "service_phwslut",
  templateId: "template_sd9ahy6",
  publicKey: "hSzjbil4fkOQKpVC2"
};

export const socialLinks = {
  github: "https://github.com/hemantschavan77-cmyk"
};

const portfolioData = {
  personalInfo,
  skillsData,
  educationData,
  projectsData,
  contactConfig,
  socialLinks
};

export default portfolioData;
