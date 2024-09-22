import {
  FaXTwitter,
  FaGithub,
  FaLinkedin,
  FaFacebook,
  FaDiscord,
  FaInstagram,
} from "react-icons/fa6";

import projectImage1 from "../assets/project1.jpg";
import projectImage2 from "../assets/project2.jpeg";
import projectImage3 from "../assets/project3.jpeg";
import projectImage4 from "../assets/project4.jpeg";
import projectImage5 from "../assets/project5.jpeg";
import projectImage6 from "../assets/project6.jpg";
import projectImage7 from "../assets/project7.jpg";
import projectImage8 from "../assets/project8.jpg";
import projectImage9 from "../assets/project9.jpg";
import projectImage10 from "../assets/project10.jpg";

import { RiReactjsLine } from "react-icons/ri";
import { TbBrandNextjs } from "react-icons/tb";
import { SiMongodb } from "react-icons/si";
import { DiRedis } from "react-icons/di";
import { FaNodeJs } from "react-icons/fa";
import { BiLogoPostgresql } from "react-icons/bi";
import { FaPython } from "react-icons/fa";
import { FaAws } from "react-icons/fa";
import { FaDocker } from "react-icons/fa";
import { SiKubernetes } from "react-icons/si";
import { SiDjango } from "react-icons/si";
import { FaHtml5 } from "react-icons/fa";
import { FaCss3Alt } from "react-icons/fa";
import { SiTailwindcss } from "react-icons/si";
import { IoLogoJavascript } from "react-icons/io5";
import { SiTypescript } from "react-icons/si";
import { SiExpress } from "react-icons/si";
import { FaGitAlt } from "react-icons/fa";
import { SiRedux } from "react-icons/si";


import { FaFileExcel } from "react-icons/fa";
import { SiPowerbi } from "react-icons/si";
import { IoLogoTableau } from "react-icons/io5";
import { FaDatabase } from "react-icons/fa";
import { FcStatistics } from "react-icons/fc";
import { Si365Datascience } from "react-icons/si";

export const NAVIGATION_LINKS = [
  { label: "Projects", href: "#projects" },
  { label: "Bio", href: "#bio" },
  { label: "Skills", href: "#skills" },
  { label: "Work Experience", href: "#work" },
  { label: "Education", href: "#education" },
  { label: "Contact", href: "#contact" },
];

export const HERO = {
  name: "Karthik Iyer",
  greet: "Hello there! 👋🏻",
  description:
  "I am a passionate Full Stack Developer with over four years of experience transforming ideas into dynamic and efficient web applications. I specialize in creating seamless user experiences while also building robust back-end systems, ensuring both functionality and performance across the stack.",
};

export const PROJECTS = [
  {
    id: 1,
    name: "Get Me a Chai - Patreon Clone",
    description:
    "Developed 'GetMeAChai', a full stack Next.js app with Tailwind CSS, NextAuth.js, React-Toastify, MongoDB, and Razorpay for secure donations and authentication.",
    image: projectImage1,
    githubLink: "https://github.com/KarthikIyer97/getmeachai",
    WebsiteLink: "https://getmeachaiii.vercel.app/"
  },
  {
    id: 2,
    name: "Password Manager",
    description:
    "Developed a secure password manager with save, edit, delete, and copy features using React, React Toastify, and LordIcon for the frontend, and Express.js with MongoDB for the backend.",
    image: projectImage2,
    githubLink: "https://github.com/KarthikIyer97/Password-Manager",
    WebsiteLink: "https://passwordmanager11.netlify.app/"
  },
  {
    id: 3,
    name: "To Do App",
    description:
      "Developed a To-Do app using React.js, Tailwind CSS, and React Icons, with full functionality for creating, editing, and deleting tasks.",
    image: projectImage3,
    githubLink: "https://github.com/KarthikIyer97/To-do-app",
    WebsiteLink: "https://to-do-application121.netlify.app/",
  },
  {
    id: 4,
    name: "Twitter UI Clone",
    description:
      "Developed a responsive UI clone of the Twitter website using HTML5, CSS3, and Tailwind CSS, replicating all core functionalities.",
    image: projectImage4,
    githubLink: "https://github.com/KarthikIyer97/Twitter_clone",
    WebsiteLink: "https://twitter-clonee22.netlify.app/"
  },
  {
    id: 5,
    name: "Netflix UI Clone",
    description:
      "This is a frontend responsive clone of netflix website using technologies Html5, css3 & Javascript.",
    image: projectImage5,
    githubLink: "https://github.com/KarthikIyer97/Netflix_clone",
    WebsiteLink: "https://netflix-clonee-omega.vercel.app/"

  },
  {
    id: 6,
    name: "Quiz App",
    description:
      "Developed a KBC-style quiz app using React.js, featuring multiple-choice questions, lifelines, and a dynamic score system. The app includes smooth transitions between questions, real-time feedback, and responsive design for an engaging user experience.",
    image: projectImage6,
    githubLink: "https://github.com/KarthikIyer97/quizapp",
    WebsiteLink: "https://kbcwithkarthik.netlify.app/"
  },
  {
    id: 7,
    name: "Google Keep Clone",
    description:
      "Developed a Google Keep clone using HTML, CSS, and JavaScript, featuring functionalities for adding, editing, and deleting notes with a clean, responsive UI. Implemented dynamic note organization and real-time updates for a seamless user experience.",
    image: projectImage7,
    githubLink: "https://github.com/KarthikIyer97/googlekeep",
    WebsiteLink: "https://hopeful-johnson-ce7b0d.netlify.app/"
  },
  {
    id: 8,
    name: "Cricket Website",
    description:
      "Built an interactive website displaying cricket team profiles, player details, venues, match results, and upcoming matches using ReactJS. Leveraged the map function for dynamic list rendering and ensured responsive design across devices to enhance user engagement.",
    image: projectImage8,
    githubLink: "https://github.com/KarthikIyer97/crickbuzz",
    WebsiteLink: "https://criccbuzz-com.onrender.com/"
  },
  {
    id: 9,
    name: "Covid-19 Tracker",
    description:
      "Crafted a COVID-19 tracker using ReactJS, Redux, and Firebase, featuring real-time data display in table, graph, and map formats, leveraging advanced front-end and data visualization techniques for enhanced user engagement",
    image: projectImage9,
    githubLink: "https://github.com/KarthikIyer97/covid19tracker",
    WebsiteLink: "https://covid19tracker971.netlify.app/"
  },
  {
    id: 10,
    name: "LinkedIn Clone",
    description:
      "Constructed LinkedIn’s UI using React and Redux, integrating Firebase for authentication, data storage, and post retrieval, providing a seamless user experience.",
    image: projectImage10,
    githubLink: "https://github.com/KarthikIyer97/linkedinclone",
    WebsiteLink: "https://linkedincloni-com.onrender.com/"
  },


];

export const BIO = [
  "I’m Karthik Iyer, a passionate software developer with a strong focus on front-end and full-stack development, particularly within the MERN stack (MongoDB, Express.js, React.js, Node.js). I have hands-on experience building dynamic and responsive web applications, with an emphasis on creating intuitive user interfaces and ensuring high performance, security, and scalability.",
  "Throughout my career, I’ve had the opportunity to work on diverse projects, including my recent role as a Software Developer Intern at Ocrawise in Dublin. I developed web applications, optimized database structures, and implemented secure user authentication systems, all while collaborating with teams to deliver solutions that meet real-world needs. My previous experience at eFleet Systems in India further strengthened my skills, especially in designing user-friendly interfaces and managing data flow using Redux.",
  "I’m always excited to explore new technologies, improve my existing skills, and apply best practices to create efficient, scalable software. With a Master's degree in Data Analytics from the National College of Ireland, I also enjoy working with data-driven projects, and I’m constantly looking for opportunities to learn and grow in the fast-evolving tech landscape.",



];

export const SOFTWARE_SKILLS = [
  {
    icon: <RiReactjsLine className="text-4xl text-cyan-400 lg:text-5xl" />,
    name: "React",
    experience: "4+ years",
  },
  {
    icon: <SiRedux className="text-4xl text-purple-600 lg:text-5xl" />,
    name: "Redux",
    experience: "4+ years",
  },
  {
    icon: <TbBrandNextjs className="text-4xl text-white lg:text-5xl" />,
    name: "Next.js",
    experience: "2+ year",
  },
  {
    icon: <SiMongodb className="text-4xl text-green-600 lg:text-5xl" />,
    name: "MongoDB",
    experience: "4+ years",
  },

  {
    icon: <DiRedis className="text-4xl text-red-600 lg:text-5xl" />,
    name: "Redis",
    experience: "2+ year",
  },
  {
    icon: <FaNodeJs className="text-4xl text-green-600 lg:text-5xl" />,
    name: "Node.js",
    experience: "4+ years",
  },
  {
    icon: <BiLogoPostgresql className="text-4xl text-sky-700 lg:text-5xl" />,
    name: "PostgreSQL",
    experience: "5+ year",
  },
  {
    icon: <FaPython className="text-4xl text-blue-400 lg:text-5xl" />,
    name: "Python",
    experience: "5+ years",
  },
  {
    icon: <FaAws className="text-4xl text-orange-500 lg:text-5xl" />,
    name: "AWS",
    experience: "2+ year",
  },
  {
    icon: <FaDocker className="text-4xl text-blue-600 lg:text-5xl" />,
    name: "Docker",
    experience: "2+ year",
  },
  {
    icon: <SiKubernetes className="text-4xl text-blue-500 lg:text-5xl" />,
    name: "Kubernetes",
    experience: "2+ year",
  },
  {
    icon: <SiDjango className="text-4xl text-green-700 lg:text-5xl" />,
    name: "Django",
    experience: "2+ year",
  },
  {
    icon: <FaHtml5 className="text-4xl text-orange-500 lg:text-5xl" />,
    name: "HTML5",
    experience: "5+ years",
  },
  {
    icon: <FaCss3Alt className="text-4xl text-blue-500 lg:text-5xl" />,
    name: "CSS3",
    experience: "5+ years",
  },
  {
    icon: <SiTailwindcss className="text-4xl text-cyan-500 lg:text-5xl" />,
    name: "Tailwind CSS",
    experience: "3+ years",
  },
  {
    icon: <IoLogoJavascript  className="text-4xl text-yellow-600 lg:text-5xl" />,
    name: "JavaScript",
    experience: "5+ years",
  },
  {
    icon: <SiTypescript className="text-4xl text-blue-600 lg:text-5xl" />,
    name: "TypeScript",
    experience: "3+ years",
  },
  {
    icon: <SiExpress className="text-4xl text-white lg:text-5xl" />,
    name: "Express.js",
    experience: "4+ years",
  },
  {
    icon: <FaGitAlt className="text-4xl text-orange-600 lg:text-5xl" />,
    name: "Git",
    experience: "4+ years",
  },
];


export const DATA_SKILLS = [
  { icon: <FaFileExcel className="text-4xl text-green-600 lg:text-5xl" />, name: "Excel", experience: "5+ years" },
  { icon: <SiPowerbi className="text-4xl text-orange-500 lg:text-5xl" />, name: "Power BI", experience: "2+ years" },
  { icon: <IoLogoTableau className="text-4xl text-purple-500 lg:text-5xl" />, name: "Tableau", experience: "2+ years" },
  { icon: <FcStatistics className="text-4xl text-indigo-500 lg:text-5xl" />, name: "Statistics", experience: "3+ years" },
  { icon: <FaDatabase className="text-4xl text-blue-600 lg:text-5xl" />, name: "SQL", experience: "3+ years" },
  { icon: <FaDatabase className="text-4xl text-blue-600 lg:text-5xl" />, name: "Data Mining & Machine Learning", experience: "3+ years" },
  { icon: <Si365Datascience className="text-4xl text-blue-600 lg:text-5xl" />, name: "Data Science", experience: "3+ years" },
];

export const EXPERIENCES = [
  {
    title: "Software Developer Intern",
    company: "Ocrawise",
    location: "Dublin, Ireland",
    duration: "February 2024 - July 2024",
    description:
      "As a Software Developer Intern at Ocrawise, I was responsible for the full-stack development of dynamic web applications using the MERN stack (MongoDB, Express.js, React.js, Node.js). I designed and managed databases, ensuring efficient data modeling and implementing CRUD operations to enhance functionality. I optimized application performance by identifying bottlenecks and applied best practices in both front-end and back-end development to reduce load times. I utilized Redux for state management, improving the user experience and ensuring seamless interactions. In addition, I was involved in server-side development, integrating APIs and implementing secure authentication and authorization systems using JWT. I conducted extensive testing, including unit, integration, and end-to-end testing using Jest, which led to error-free software delivery.",
  },
  {
    title: "Software Engineer",
    company: "eFleet Systems Private Limited",
    location: "Remote, India",
    duration: "April 2021 - August 2022",
    description:
      "At eFleet Systems, I took a lead role in developing and deploying full-stack web applications. I created and implemented responsive, mobile-first designs, ensuring optimal user experience across different devices and screen sizes. I spearheaded key feature development, enhancing user engagement through intuitive and user-friendly interfaces. I integrated advanced state management solutions using Redux in complex applications, improving application data flow and overall performance. I was also responsible for designing and implementing robust CRUD APIs using MongoDB, Node.js, and Express.js, which enabled efficient data management at scale. Additionally, I worked closely with cross-functional teams to deliver customized solutions that addressed business needs. I enhanced website performance, achieving an average load time of under 5 seconds, significantly boosting user satisfaction. I also integrated Firebase for back-end services, including authentication and real-time data synchronization.",
  },
];


export const EDUCATION = [
  {
    degree: "Master of Science in Data Analytics",
    institution: "National College of Ireland",
    location: "Dublin, Ireland",
    duration: "September 2022 - November 2023",
    description:
      "Specialized in data analysis, machine learning, and programming. Worked with Python, R, and SQL for data processing, developed machine learning models using Scikit-learn and Pytorch, and created visualizations with Tableau and Power BI. The final project focused on Retail Inventory Management using Deep Learning Techniques.",
  },
  {
    degree: "Bachelor of Engineering in Electronics",
    institution: "Ramrao Adik Institute of Technology",
    location: "Navi Mumbai, India",
    duration: "August 2018 - July 2021",
    description:
      "Studied programming and software development, applying languages like C, Python, Javascript, DBMS and MATLAB in projects. Developed database systems with SQL and implemented object-oriented programming techniques.",
  },
];


export const SOCIAL_MEDIA_LINKS = [
  {
    href: "https://www.facebook.com/karthikkrishnan.iyer",
    icon: <FaFacebook fontSize={25} className="hover:opacity-80" />,
  },
  {
    href: "https://www.instagram.com/karthik_iyer18/",
    icon: <FaInstagram fontSize={25} className="hover:opacity-80" />,
  },
  {
    href: "https://x.com/",
    icon: <FaXTwitter fontSize={25} className="hover:opacity-80" />,
  },
  {
    href: "https://github.com/KarthikIyer97?tab=repositories",
    icon: <FaGithub fontSize={25} className="hover:opacity-80" />,
  },
  {
    href: "https://www.linkedin.com/in/karthik-iyer7/",
    icon: <FaLinkedin fontSize={25} className="hover:opacity-80" />,
  },
];
