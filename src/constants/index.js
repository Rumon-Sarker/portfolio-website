import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  meta,
  starbucks,
  tesla,
  shopify,
  carrent,
  jobit,
  tripguide,
  threejs,
  dart,
  flutter,
  java,
  android,
  iso,
  firebase,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "project",
    title: "Project",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Web Developer",
    icon: web,
  },
  {
    title: "Front-End Developer",
    icon: mobile,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "MERN Stack Developer",
    icon: creator,
  },
];

const technologies = [
  {
    name: "Flutter",
    icon: flutter,
  },
  {
    name: "Dart",
    icon: dart,
  },
  {
    name: "Android",
    icon: android,
  },
  {
    name: "Iso",
    icon: iso,
  },
  {
    name: "Firebase",
    icon: firebase,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  },
  {
    name: "docker",
    icon: docker,
  },
];

const experiences = [
  {
    title: "Software Engineer",
    company_name: "Hasan's It Solution",
    icon: flutter,
    iconBg: "#E6DEDD",
    date: "March 2024 – Present",
    points: [
      "Executed 4 mobile app projects at Omega Solution using Flutter:CRM, HRM, Ecommerce, and Support Ticket using BLoC,Riverpod, Rest Api etc.",
      "Successfully completed all projects independently.",
    ],
  },
  {
    title: "Junior Software Engineer",
    company_name: "Omega Solution",
    icon: dart,
    iconBg: "#E6DEDD",
    date: "September 2023 – February 2024",
    points: [
      "Executed 4 mobile app projects at Omega Solution using Flutter:CRM, HRM, Ecommerce, and Support Ticket using BLoC,Riverpod, Rest Api etc.",
      "Successfully completed all projects independently.",
    ],
  },
  {
    title: "Mobile Apps Developer (Flutter)",
    company_name: "DPSSL TECH",
    icon: flutter,
    iconBg: "#383E56",
    date: "May 2023 – August 2023",
    points: [
      "Completed a project EasyPark at DPSSL Tech for 4 months, a Flutter app for a smart car parking system.",
      "Collaborated on business logic, Firebase database setup.Completed the project using BLoC, Firebase, Google Maps, andBkash Live Payment Gateway .",
    ],
  },
  {
    title: "Mobile Apps Developer (Flutter)",
    company_name: "MotorX",
    icon: dart,
    iconBg: "#E6DEDD",
    date: "June 2022 – April 2023",
    points: [
      "Collaborated with two senior Flutter developers at Motorxduring a 10-month period, including an initial 2-monthinternship.",
      "Improved the Protibeshi app project for neighborhood renting,using Riverpod, Firebase, Google Maps, and push notifications.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
    name: "Sara Lee",
    designation: "CFO",
    company: "Acme Co",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Rick does.",
    name: "Chris Brown",
    designation: "COO",
    company: "DEF Corp",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Lisa Wang",
    designation: "CTO",
    company: "456 Enterprises",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projects = [
  {
    name: "Modern Furniture",
    description:
      "This is a mini warehouse based website. There are lot of collection of Furniture This website can maintain a small warehouse business There are no admin dashboard. so a simple user can delete, add products etc.There was multi-functional Login system email-password and google sign in. so an user can easily sign in with his choice",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "mongodb",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
      {
        name: "daisyui",
        color: "pink-text-gradient",
      },
      {
        name: "Firebase",
        color: "pink-text-gradient",
      },
    ],
    image: carrent,
    source_code_link:
      "https://github.com/SakhawatJony/Modern-Furniture-Website-client-side",
  },
  {
    name: "Private Tutor",
    description:
      "Web application that enables users to This is a personal private-Tutor service provider application. An user can buy any service by his choice. There are some services for a private tutor. This application has no admin dashboard. This is a react based static application.There was multi-functional Login system email-password and google sign in so an user can easily sign in with his choice.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "Bootstrap",
        color: "green-text-gradient",
      },
      {
        name: "Firebase",
        color: "pink-text-gradient",
      },
    ],
    image: jobit,
    source_code_link: "https://github.com/SakhawatJony/Private-Tutor",
  },
  {
    name: "Drink Hospital",
    description:
      "Web application that enables users to This is a Drink Hospital related service provider application.A responsive web application is providing Hospital services.Using Firebase Authentication for user login and register.Users can appoint Doctor and get to know more details about services.you can choice your best any doctors",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "Bootstrap",
        color: "green-text-gradient",
      },
      {
        name: "firebase",
        color: "pink-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: tripguide,
    source_code_link:
      "https://github.com/SakhawatJony/Hospital_Releted_WebSite",
  },
];

export { services, technologies, experiences, testimonials, projects };
