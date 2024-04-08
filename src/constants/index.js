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
    figma,
    c,
    java,
    nextJs,
    ps,
    python,
    solana,
    itag,
    cdd,
    nasOndas,
    carrent,
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
    },
    {
      name: "photoshop",
      icon: ps,
    }
  ];
  
  const experiences = [
    {
      title: "Trainee",
      company_name: "Itag",
      icon: itag,
      iconBg: "#f18322",
      date: "Março 2018 -  Maio 2018",
      points: [
        "Aprendi o básico sobre linguagem de programação.",
        "Conversei com clientes em Inglês.",
        "Entendi o funcionamento da tecnologia RFID, com uso de etiquetas."
      ],
    },
    {
      title: "Vendedor",
      company_name: "NasOndas",
      icon: nasOndas,
      iconBg: "#E6DEDD",
      date: "Julho 2019 - Setembro 2019",
      points: [
        "Aprendi muito sobre PNL.",
        "Conversar com clientes e vender produtos",
      ],
    },
    {
      title: "Jovem aprendiz",
      company_name: "Casa de David",
      icon: cdd,
      iconBg: "#E6DEDD",
      date: "Janeiro 2021 - Novembro 2021",
      points: [
        "Fiquei 4 meses na T.I (Onde eu arrumava computador  e instalava câmeras de segurança) ",
        "7 meses no marketing, onde eu editava vídeos e cuidava do site para arrecadar doações",
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
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel, dolores. Debitis, quia?",
      name: "Lisa Wang",
      designation: "CTO",
      company: "456 Enterprises",
      image: "https://randomuser.me/api/portraits/women/6.jpg",
    },
  ];
  
  const projects = [
    {
      name: "Car Rent",
      description:
        "Web-based platform that allows users to search, book, and manage car rentals from various providers, providing a convenient and efficient solution for transportation needs.",
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
      ],
      image: carrent,
      source_code_link: "https://github.com/",
    },
    {
      name: "Job IT",
      description:
        "Web application that enables users to search for job openings, view estimated salary ranges for positions, and locate available jobs based on their current location.",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "restapi",
          color: "green-text-gradient",
        },
        {
          name: "scss",
          color: "pink-text-gradient",
        },
      ],
      image: jobit,
      source_code_link: "https://github.com/",
    },
    {
      name: "Trip Guide",
      description:
        "A comprehensive travel booking platform that allows users to book flights, hotels, and rental cars, and offers curated recommendations for popular destinations.",
      tags: [
        {
          name: "nextjs",
          color: "blue-text-gradient",
        },
        {
          name: "supabase",
          color: "green-text-gradient",
        },
        {
          name: "css",
          color: "pink-text-gradient",
        },
      ],
      image: tripguide,
      source_code_link: "https://github.com/",
    },
  ];
  
  export { services, technologies, experiences, testimonials, projects };