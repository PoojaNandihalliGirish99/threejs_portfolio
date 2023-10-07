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
    heitrello,
    admindash,
    invouge,
    bulb
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
      title: "Fullstack Developer",
      icon: web,
    },
    {
      title: "Yoga, Jogging and Trekking",
      icon: mobile,
    },
    {
      title: "Painting and Music",
      icon: backend,
    },
    {
      title: "A devoted dog lover",
      icon: creator,
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
    {
      name: "docker",
      icon: docker,
    },
  ];
  
  const experiences = [
    {
      title: "Frontend Developer",
      company_name: "Startup incubated at college",
      icon: bulb,
      iconBg: "#383E56",
      date: "February 2020 - July 2020",
      points: [
        "Working with a team of 6 members.",
        "Understanding the target consumer market and trends, leveraging the creative inputs of the team.",
        "Accepting the uncertainity while constantly dedicating time for the learning/ research required.",
        "Developing web application using HTML, CSS, JS and PHP, hosting it via hostinger.",
      ],
    },
    {
      title: "Junior Software Engineer",
      company_name: "Spurtree Technologies",
      icon: tesla,
      iconBg: "#E6DEDD",
      date: "August 2021 - September 2022",
      points: [
        "Developing mobile first screens using SCSS and Angular 11 and integrating APIs for the same using Swagger api reference.",
        "Demoing minor features developed to the client and working with them to make necessary changes.",
        "Understanding NodeJS backend while working on minor tasks.",
        "Collaborating with cross-functional teams including designers, product managers, and other developers to work on new feature requests.",
        "Debugging issues and fixing UI/ functional bugs with swiftness, gaining constructive feedback on code reviews."
      ],
    },
    {
      title: "Software Engineer (Contractee)",
      company_name: "VMware",
      icon: shopify,
      iconBg: "#383E56",
      date: "October 2022 - present",
      points: [
        "Developing and maintaining applications using Vanilla JS, CSS, Nodejs and Postgres over Grafana, ensuring cross-browser compatibility.",
        "Collaborating with the team to understand the design/ functional requirements.",
        "Writing python scripts for the scheduled db backups, Jenkins trigger automation.",
        "Understanding basics of docker, kubernetes and computer networks.",
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
      name: "Hei Trello",
      description:
        "Web-based single screen that allows user to create and delete tasks.",
      tags: [
        {
          name: "nextjs",
          color: "blue-text-gradient",
        },
        {
          name: "react-dnd",
          color: "blue-text-gradient",
        },
        {
          name: "zustand",
          color: "green-text-gradient",
        },
        {
          name: "tailwind",
          color: "pink-text-gradient",
        },
      ],
      image: heitrello,
      source_code_link: "https://github.com/",
    },
    {
      name: "In Vouge",
      description:
        "Web application that enables users view shopping items, add them to cart, filter based on few categories.",
      tags: [
        {
          name: "reactjs",
          color: "blue-text-gradient",
        },
        {
          name: "redux-toolkit",
          color: "green-text-gradient",
        },
        {
          name: "tailwind",
          color: "pink-text-gradient",
        },
      ],
      image: invouge,
      source_code_link: "https://github.com/",
    },
    {
      name: "Admin Dashboard",
      description:
        "A project to explore and learn ",
      tags: [
        {
          name: "reactjs",
          color: "blue-text-gradient",
        },
        {
          name: "mui/x-data-grid",
          color: "green-text-gradient",
        },
        {
          name: "full-calender",
          color: "pink-text-gradient",
        },
        {
          name: "nivo",
          color: "pink-text-gradient",
        },
      ],
      image: admindash,
      source_code_link: "https://github.com/",
    },
  ];
  
  export { services, technologies, experiences, testimonials, projects };