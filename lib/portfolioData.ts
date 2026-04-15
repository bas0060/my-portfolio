


import { Github, Linkedin, Twitter, Mail } from 'lucide-react';
import checkslate from '@/public/checkslate-hero-section.png';
import weatherApp from '@/public/weather-checking-application.png';
import kredgift from '@/public/kredgift-hero-section.png';
import Ecommerce from '@/public/velora-Ecommerce.png';


export interface PortfolioData {
  personalInfo: {
    name: string;
    role: string;
    email: string;
    phone: string;
    location: string;
    bio: string;
    socialLinks: Array<{
      id: number;
      name: string;
      url: string;
      icon: any;
    }>;
  };
  about: string;
  education: Array<{
    id: number;
    school: string;
    degree: string;
    field: string;
    year: string;
    details?: string;
  }>;
  experience: Array<{
    id: number;
    company: string;
    position: string;
    duration: string;
    description: string;
    technologies?: string[];
  }>;
  skills: Array<{
    category: string;
    skills: Array<{
      name: string;
      proficiency: number;
    }>;
  }>;
  portfolio: Array<{
    id: number;
    name: string;
    description: string;
    image: any;
    technologies: string[];
    links: {
      github?: string;
      live?: string;
    };
  }>;
  testimonials: Array<{
    id: number;
    author: string;
    role: string;
    company: string;
    message: string;
    image?: any;
  }>;
  contact: {
    message: string;
    email: string;
    phone: string;
  };
}

const portfolioData: PortfolioData = {
  personalInfo: {
    name: "Abdulbasit Makinde",
    role: "Frontend Developer",
    email: "adelekemakinde64@gmail.com",
    phone: "+234 906 402 8886",
    location: "Lagos, Nigeria",
    bio: "Driven by a passion for crafting beautiful and high-performance web experiences, I bring 3+ years of hands-on experience with React, Node.js, and the latest web technologies.",
    socialLinks: [
      {
        id: 1,
        name: "GitHub",
        url: "https://github.com/bas0060",
        icon: Github,
      },
      {
        id: 2,
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/makinde-abdulbasit-79b580311/",
        icon: Linkedin,
      },
      {
        id: 3,
        name: "Twitter",
        url: "https://x.com/adeleke0060?s=21",
        icon: Twitter,
      },
      {
        id: 4,
        name: "Email",
        url: "mailto:adelekemakinde64@gmail.com",
        icon: Mail,
      },
    ],
  },
  about: "I'm a passionate Frontend Developer with over 3 years of experience building beautiful, performant web applications. I specialize in implementing responsive, user-friendly interfaces that prioritize performance and accessibility. With a strong foundation in JavaScript and a keen eye for design, I’m dedicated to creating seamless digital experiences that delight users and drive business success. I have a proven track record of delivering impactful projects that drive business growth and user engagement, and I'm committed to continuously improving my skills to stay at the forefront of web development.",
  // about: "I'm a passionate Frontend Developer with over 5 years of experience building beautiful, performant web applications. Specializing in React, TypeScript, and modern web technologies, I focus on creating seamless user experiences and writing clean, maintainable code. I have a proven track record of delivering impactful projects that drive business growth and user engagement, and I'm committed to continuously improving my skills to stay at the forefront of web development.",
  education: [
    {
      id: 1,
      school: "Federal University of Technology, Minna",
      degree: "Bachelor of Engineering",
      field: "Chemical Engineering",
      year: "2019 - 2025",
      // details: "Focused on Web Development and Software Engineering",
    },
    {
      id: 2,
      school: "Axia Afica",
      degree: "Certification",
      field: "Advanced Web Development",
      year: "2024",
      details: "Specialized in JavaScript and modern web technologies",
    },
  ],
  experience: [
    {
      id: 1,
      company: "Wudify Africa",
      position: "Frontend Developer",
      duration: "2025 - Present",
      description: "Wudify is an e-commerce platform focused on providing role-based solutions for customers, vendors, and admins. The team develops secure, scalable web applications, optimizing user experience and transaction reliability. I’ve contributed by improving navigation efficiency by 40%, reducing unauthorized access by 95%, and ensuring 99% payment reliability with Paystack integration.",
      technologies: ["React", "Tailwind CSS", "JavaScript", "Redux Toolkit", "Context API", "React Query", "OAuth 2.0 / JWT", "Paystack Integration"],
    },
    {
      id: 2,
      company: "Kinel Academy",
      position: "Frontend Developer Intern",
      duration: "2024 - 2025",
      description: "Kinel Academy is an edu-tech platform that empowers students to learn key tech stacks like Frontend Development, Backend Development, Data Analysis, Product Management, UI/UX Design and more. The team builds interactive learning environments that facilitate real-time knowledge transfer. I helped improve performance, enhancing LCP by 38% and TTI by 30%, while also implementing caching solutions to reduce API calls by 60%.",
      technologies: ["Next.js", "TypeScript", "Tailwind CSS", "Git & GitHub", "Context API", "Blusalt Payment Integration"],
    },
    {
      id: 3,
      company: "Fundform Capital",
      position: "Frontend Developer Intern",
      duration: "2024",
      description: "Funform is a platform that enables seamless loan applications with dynamic, multi-step forms and real-time validation. The team focuses on streamlining user input and improving platform performance. I played a role in reducing form abandonment by 25% and optimizing rendering performance, resulting in a 40% decrease in unnecessary re-renders.",
      technologies: ["JavaScript", "React", "Tailwind CSS", "Git & GitHub", "Context API"],
    },
  ],
  skills: [
    {
      category: "Languages & Frameworks",
      skills: [
        { name: "React", proficiency: 95 },
        { name: "TypeScript", proficiency: 40 },
        { name: "Next.js", proficiency: 80 },
        { name: "Tailwind CSS", proficiency: 97 },
        { name: "JavaScript (ES6+)", proficiency: 92 },
      ],
    },
    {
      category: "State & Data",
      skills: [
        { name: "Redux Toolkit", proficiency: 88 },
        { name: "React Query", proficiency: 90 },
        { name: "RESTful APIs / Axios", proficiency: 90 },
        { name: "Context API", proficiency: 92 },
      ],
    },
    {
      category: "Performance & Tooling",
      skills: [
        { name: "Figma", proficiency: 95 },
        { name: "Lazy Loading & Code Splitting", proficiency: 85 },
        { name: "Lighthouse Audits", proficiency: 85 },
        { name: "Webpack / Vite", proficiency: 90 },
        { name: "Browser DevTools", proficiency: 95 },
        { name: "Git & GitHub", proficiency: 95 },
        { name: "UI/UX Principles", proficiency: 85 },
        { name: "Responsive Design", proficiency: 99 },
      ],
    },
    {
      category: "Auth & Payments",
      skills: [
        { name: "OAuth 2.0 / JWT", proficiency: 90 },
        { name: "Paystack Integration", proficiency: 87 },
        { name: "Role-Based Access Control", proficiency: 87 },
        { name: "Protected Routes", proficiency: 92 },
      ],
    },
  ],
  portfolio: [
    {
      id: 1,
      name: "E-Commerce Platform",
      description: "A full-stack shopping application built with React and TypeScript, integrated with RESTful APIs. The platform features a dynamic product catalog, wishlist, cart, and checkout system integrated with Paystack for secure payments. Customers can track their order history, improving user experience by enabling smooth navigation through a variety of e-commerce functionalities. The app ensures secure transactions and provides a seamless shopping experience.",
      image: Ecommerce,
      technologies: ["React", "Tailwind CSS", "JavaScript", "Context API", "React Query", "OAuth 2.0 / JWT", "Paystack Integration"],
      links: {
        github: "https://github.com/bas0060/Velora-E-commerce",
        live: "https://velora-e-commerce.pages.dev",
      },
    },
    {
      id: 2,
      name: "Weather Checker",
      description: "A React-based weather application that leverages the OpenWeather API to provide real-time weather updates. It features geolocation support, a 5-day forecast, and dynamic icons that visually represent the weather conditions. The app also caches weather data locally for faster retrieval on subsequent visits, improving the overall user experience and responsiveness.",
      image: weatherApp,
      technologies: ["React", "JavaScript", "OpenAI API", "Tailwind CSS", "Git & GitHub", "Context API"],
      links: {
        github: "https://github.com/bas0060/weather-app",
        live: "https://weather-checking-app.pages.dev/",
      },
    },
    {
      id: 3,
      name: "checkslate",
      description: "A two-sided marketplace designed for customers and service providers, built with React. This platform enables users to book and schedule services with ease, while providing service providers with comprehensive dashboards to manage their schedules, clients, and earnings. It ensures both parties enjoy a smooth, user-friendly experience, allowing for easy interactions and bookings.",
      image: checkslate,
      technologies: ["Git & GitHub", "RESTful APIs / Axios ", "JavaScript", "React", "Tailwind CSS",],
      links: {
        github: "https://github.com/Aarif195/Checkslate/",
        live: "https://checkslate-project.netlify.app/",
      },
    },
    {
      id: 4,
      name: "Giftcard Trading Platform",
      description: "A platform for buying, selling, and trading gift cards, with secure user authentication, real-time transaction processing, and efficient user dashboards for tracking trade history. Integrated with payment gateways for secure financial transactions, this platform aims to create a trusted marketplace for gift card trading with seamless user experience and robust security.",
      image: kredgift,
      technologies: ["JavaScript", "React", "Tailwind CSS", "Git & GitHub", "RESTful APIs / Axios "],
      links: {
        github: "https://github.com/KredGift01/kredgift-frontend/",
        live: "https://kredgift-frontend.onrender.com",
      },
    },
  ],
  testimonials: [
    {
      id: 1,
      author: "Olabisi Kolawole",
      role: "Product Manager",
      company: "Wudify Africa",
      message: "Abdulbasit is an exceptional developer who consistently delivers high-quality code. His attention to detail and problem-solving skills are outstanding. He is a great team player and always willing to go the extra mile to ensure project success. I highly recommend him for any frontend development role.",
    },
    {
      id: 2,
      author: "Sokariba Lawson",
      role: "Product Owner & Program Lead",
      company: "Fundform Capital",
      message: "Abdulbasit demonstrated an outstanding technical ability, creativity, and commitment in building the user-facing and admin side of a fintech MVP. Specifically, he Led the frontend architecture and implemented core user interfaces and functionalities. He also Collaborated with designers and backend engineers to ensure seamless integration and responsiveness.",
    },
    {
      id: 3,
      author: "Ridwan Makinde",
      role: "CTO",
      company: "Kinel Academy",
      message: "Working with Abdulbasit was a game-changer for our project. His expertise in full-stack development and mentoring abilities are invaluable. Makinde has proven to be a reliable team player with a strong technical foundation and problem-solving mindset. I strongly recommend him for opportunities in Frontend Development, and I’m confident they will thrive in any engineering team.",
    },
  ],
  contact: {
    message: "I'm always interested in hearing about new projects and opportunities. Feel free to get in touch!",
    email: "adelekemakinde64@gmail.com",
    phone: "+234 906 402 8886",
  },
};

export default portfolioData;
