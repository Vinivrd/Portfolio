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
    tailwind,
    nodejs,
    mongodb,
    git,
    c,
    java,
    nextJs,
    python,
    itag,
    cdd,
    nasOndas,
    admin_dash,
    jobit,
    tripguide,
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
      title: "React Native Developer",
      icon: mobile,
    },
    {
      title: "Backend Developer",
      icon: backend,
    },
    {
      title: "Content Creator",
      icon: creator,
    },
  ];
  
  const technologies = [
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
      name: "c",
      icon: c,
    },
    {
      name: "java",
      icon: java,
    },
    {
      name: "nextJs",
      icon: nextJs,
    },
    {
      name: "python",
      icon: python,
    }
  ];
  
  const experiences = [
    {
      title: "Trainee",
      company_name: "Itag",
      icon: itag,
      iconBg: "#f18322",
      date: "March 2018 - May 2018",
      points: [
        "Learned the basics of programming language.",
        "Conversed with clients in English.",
        "Understood the functioning of RFID technology, including the use of tags."
      ],
    },
    {
      title: "Salesperson",
      company_name: "NasOndas",
      icon: nasOndas,
      iconBg: "#E6DEDD",
      date: "July 2019 - September 2019",
      points: [
        "Learned a lot about NLP.",
        "Conversing with customers and selling products."
      ],
    },
    {
      title: "Jovem aprendiz",
      company_name: "Casa de David",
      icon: cdd,
      iconBg: "#E6DEDD",
      date: "January 2021 - November 2021",
      points: [
        "Spent 4 months in IT (where I fixed computers and installed security cameras).",
        "7 months in marketing, where I edited videos and managed the website to raise donations."
      ],
    },
  ];
  
  const testimonials = [
    {
      testimonial:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel, dolores. Debitis, quia?.",
      name: "Sara Lee",
      designation: "CFO",
      company: "Acme Co",
      image: "https://randomuser.me/api/portraits/women/4.jpg",
    },
    {
      testimonial:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel, dolores. Debitis, quia?",
      name: "Chris Brown",
      designation: "COO",
      company: "DEF Corp",
      image: "https://randomuser.me/api/portraits/men/5.jpg",
    },
    {
      testimonial:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit1. Vel, dolores. Debitis, quia?",
      name: "Lisa Wang",
      designation: "CTO",
      company: "456 Enterprises",
      image: "https://randomuser.me/api/portraits/women/6.jpg",
    },
  ];
  
  const projects = [
    {
      name: "Admin-Dashboard",
      description:
      "This is my personal project where I utilize Syncfusion and Tailwind.",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "syncfusion",
          color: "green-text-gradient",
        },
        {
          name: "tailwind",
          color: "pink-text-gradient",
        },
      ],
      image: admin_dash ,
      source_code_link: "https://admin-dashboard-git-main-vinicius-diniz-s-projects.vercel.app/",
    }
   
  ];
  
  export { services, technologies, experiences, testimonials, projects };