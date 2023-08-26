import {
    mobile,
    backend,
    // creator,
    web,
    javascript,
    typescript,
    html,
    css,
    reactjs,
    // redux,
    tailwind,
    nodejs,
    mongodb,
    git,
    // figma,
    docker,
    meta,
    nooqs,
    phn,
    voois,
    f1project,
    dlad,
    hd,
    threejs,
    java,
    nextjs,
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
      title: "Backend Developer",
      icon: backend,
    },
    {
      title: "DevOps Enthusiast",
      icon: mobile,
    },
    
    // {
    //   title: "Content Creator",
    //   icon: creator,
    // },

  ];
  
  const technologies = [
    {
      name: "Java",
      icon: java,
    },
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
    },
    // {
    //   name: "Redux Toolkit",
    //   icon: redux,
    // },
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
      name: "NextJs",
      icon: nextjs,
    },
    {
      name: "Three JS",
      icon: threejs,
    },
    {
      name: "git",
      icon: git,
    },
    // {
    //   name: "figma",
    //   icon: figma,
    // },
    {
      name: "docker",
      icon: docker,
    },
  ];
  
  const experiences = [
    {
      title: "Web Developer Intern",
      company_name: "NoQs Digital",
      icon: nooqs,
      iconBg: "#383E56",
      date: "Jun 2023 - Aug 2023",
      points: [
            "My responsibility was to work on wordpress and jquery to make dynamic and responsive websites.",
            "Lead group of 4 developers to ensure efficient completion of tasks.",
            "Did bugfixing and perfomed troubleshooting practices.",
        // "Developing and maintaining web applications using React.js and other related technologies.",
        // "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
        // "Implementing responsive design and ensuring cross-browser compatibility.",
        // "Participating in code reviews and providing constructive feedback to other developers.",
      ],
    },
    {
      title: "Web Developer Intern",
      company_name: "PHN Technology",
      icon: phn,
      iconBg: "#E6DEDD",
      date: "Apr 2023 - May 2023",
      points: [
        "Developed dynamic websites for clients using HTML5, CSS, Javascript, Bootstrap.",
        "Enhanced existing projects by improving syntax and code structure.",
      ],
    },
    {
      title: "Project Intern",
      company_name: "Vodafone Intelligent Solutions",
      icon: voois,
      iconBg: "#383E56",
      date: "Aug 2022 - Oct 2022",
      points: [
        "Developed real time ML Model capable of detecting helmets.",
        "Improved the percentage of correct classifications of the Machine Learning model.",
      ],
    },
    // {
    //   title: "Project Intern",
    //   company_name: "Meta",
    //   icon: meta,
    //   iconBg: "#E6DEDD",
    //   date: "Jan 2023 - Present",
    //   points: [
    //     "Developing and maintaining web applications using React.js and other related technologies.",
    //     "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
    //     "Implementing responsive design and ensuring cross-browser compatibility.",
    //     "Participating in code reviews and providing constructive feedback to other developers.",
    //   ],
    // },
  ];
  
  const testimonials = [
    // {
    //   testimonial:
    //     // "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
    //     "-",
    //   name: "-",
    //   designation: "-",
    //   company: "-",
    //   // image: "",
    //   // image: "https://randomuser.me/api/portraits/women/4.jpg",
    // },
    // {
    //   testimonial:
    //     "I've never met a web developer who truly cares about their clients' success like Rick does.",
    //   name: "Chris Brown",
    //   designation: "COO",
    //   company: "DEF Corp",
    //   image: "https://randomuser.me/api/portraits/men/5.jpg",
    // },
    // {
    //   testimonial:
    //     "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
    //   name: "Lisa Wang",
    //   designation: "CTO",
    //   company: "456 Enterprises",
    //   image: "https://randomuser.me/api/portraits/women/6.jpg",
    // },
  ];
  
  const projects = [
    {
      name: "F-1 Race Winner Prediction",
      description:
        "Web-based platform that allows to predict the final positions of Formula 1 Grand Prix races.",
      tags: [
        {
          name: "Flask",
          color: "blue-text-gradient",
        },
        {
          name: "NextJs",
          color: "green-text-gradient",
        },
        {
          name: "tailwind",
          color: "pink-text-gradient",
        },
      ],
      image: f1project,
      source_code_link: "https://github.com/yashyegare/Formula-1-Prediction",
    },
    {
      name: "Discord like app for developers",
      description:
        "A Web application that enables users to interacts.",
      tags: [
        {
          name: "Django",
          color: "blue-text-gradient",
        },
        {
          name: "DRF",
          color: "green-text-gradient",
        },
        {
          name: "Bootstrap",
          color: "pink-text-gradient",
        },
      ],
      image: dlad,
      source_code_link: "https://github.com/yashyegare/dlad",
    },
    {
      name: "Helmet detection system",
      description:
        "Automatic Helmet Detection for Bike Riders using Surveillance Videos in real-time.",
      tags: [
        {
          name: "Deep-Learning",
          color: "blue-text-gradient",
        },
        {
          name: "YOLO",
          color: "green-text-gradient",
        },
        // {
        //   name: "css",
        //   color: "pink-text-gradient",
        // },
      ],
      image: hd,
      source_code_link: "https://github.com/yashyegare/helmet-detection",
    },
  ];
  
  export { services, technologies, experiences, testimonials, projects };