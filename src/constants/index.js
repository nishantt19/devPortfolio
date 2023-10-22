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
    
    
    textify,
    rlogical,
    nextjs,


   skipsum,
    eCommerce,
    portfolio, 
    weather,
    threads,

    threejs,
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
      id: "projects",
      title: "Projects",
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
      title: "ReactJS Developer",
      icon: mobile,
    },
    {
      title: "NextJS Developer",
      icon: backend,
    },
    
  ];
  
  const technologies = [
    {
      name: "HTML 5",
      icon: html,
    },
    {
      name: "CSS 3",
      icon: css,
    },
    {
      name: "JavaScript",
      icon: javascript,
    },
    {
      name: "TypeScript",
      icon: typescript,
    },
    {
      name: "React JS",
      icon: reactjs,
    },{
      name: "Next JS",
      icon: nextjs,
    },
    {
      name: "Redux Toolkit",
      icon: redux,
    },
    {
      name: "Tailwind CSS",
      icon: tailwind,
    },
    {
      name: "Node JS",
      icon: nodejs,
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
    
  ];
  
  const experiences = [
    {
      title: "Front-End Developer",
      company_name: "Textify AI",
      icon: textify,
      iconBg: "#383E56",
      date: "May 2023 - Present",
      points: [
        "Created admin side and user side platform using NextJS 13.",
        "Implemented a robust and user-friendly multi-step form using NextJS, resulting in a 30% increase in completion rates for user-provided additional information.",
        "Developed a Chrome extension using ReactJS and TypeScript, which improved the user experience and provided additional functionality.",
        "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
        "Worked with Fast APIs to retrieve, modify data from database.",
        "Successfully identified and resolved bugs, improving the overall stability and performance of the extension.",
      ],
    },
    {
      title: "Front-End Developer",
      company_name: "rLogical Techsoft ",
      icon: rlogical,
      iconBg: "#383E56",
      date: "Dec 2022 - Jan 2023",
      points: [
        "Developing and maintaining web applications using React.js and other related technologies.",
        "Integrated efficient and secure methods to store data and developed 3 new complex components with high level reusability.",
        "Implementing responsive design and ensuring cross-browser compatibility.",
        "Adapted web Debugging tools like Chrome Developer Tools and React-Dev tools.",
      ],
    },
    
    
    
  ];
  
  
  
  
  const projects = [
    {
      name: "Threads",
      description:
        "This project is a clone of the popular social media platform Threads, built using the Next.js framework. It allows users to create and join threads, which are essentially discussion groups on specific topics. Users can post comments to threads, and other users can then reply to those comments, creating a threaded conversation.",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "nextjs",
          color: "green-text-gradient",
        },
        {
          name: "tailwind",
          color: "pink-text-gradient",
        },
      ],
      image: threads,
      source_code_link: "https://github.com/nishantt19/threads",
    },
    {
      name: "E-Commerce",
      description:
        "This e-commerce project allows users to browse and purchase products, add them to their cart, and checkout. The project includes an authentication system so that users can create accounts and log in to manage their orders and purchase history.",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "firebase",
          color: "green-text-gradient",
        },
        {
          name: "sass",
          color: "pink-text-gradient",
        },
      ],
      image: eCommerce,
      source_code_link: "https://github.com/nishantt19/e-commerce",
    },
   
    {
      name: "Skip-Sum",
      description:
        "Skipsum is a website that uses OpenAI's GPT-4 summarizer API to summarize articles and blogs. With Skipsum, you can simply paste the URL of any article or blog you want to summarize, and the summarizer API will provide a concise summary of the article for you. ",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        
        {
          name: "tailwind",
          color: "pink-text-gradient",
        },
        {
          name: "rapid api",
          color: "green-text-gradient",
        },
      ],
      image: skipsum,
      source_code_link: "https://github.com/nishantt19/skip-sum",
    },
    
  ];
  
  export { services, technologies,  projects, experiences  };