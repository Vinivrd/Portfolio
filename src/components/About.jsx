import React from 'react';
import { Tilt } from 'react-tilt'; // to modify the card
import  {motion } from 'framer-motion';

import { styles } from '../styles';
import { services} from '../constants'
import {fadeIn,textVariant} from '../utils/motion'
import { SectionWrapper } from '../hoc';


const ServiceCard =  ({index,title,icon}) => {
  return (
    <Tilt className = "xs:w-[250px] w-full">
      <motion.div
        variants={fadeIn("right","spring",0.5 * index,0.75)}
        className="w-full green-pink-gradient p-[1px]
        rounded-[20px] shadow-card">
          <div
            options = {{
              max:45,
              scale:1,
              speed:450 
            }}
            className="bg-tertiary rounded-[20px]
            py-5 px-12 min-h-[280px] flex
            justify-evenly items-center flex-col">

            <img src={icon} alt={title} 
            className = "w-16 h-16 object-contain"/>

            <h3 className='text-white text-[20px]
            font-bold text-center'>{title}</h3>

          </div>

      </motion.div>

    </Tilt>
  )
}

const About = () => {
  return (
   <>
    <motion.div variants={textVariant()}>
      <p className={styles.sectionSubText}>
        Introduction</p>
      <h2 className={styles.sectionHeadText}>Overview.</h2>
    </motion.div>

    <motion.p
    variants={fadeIn("","",0.1,1)}
    className ="mt-4 text-secondary text-[17px]
    max-w-3x1 leading-[30px]"
    >
      - ThreeJS - a powerful 3D graphics library for rendering and animating the 3D model
      - React Three Fiber - a popular library for creating 3D graphics with ThreeJS in React
      - TailwindCSS - a popular utility-first CSS styling framework
      - Framer Motion - the most popular library used to bring your React website to life with animations
        You'll also learn how to:
      - Load, create and customize stunning 3D models and geometries with various lights, as well as understand the 3D world with a camera and positioning of an object in space.
      - Make your code reusable and scalable using Higher Order Components (HOCs) and other industry-standard best practices
      - Implement sending emails through a form on the website
      - Ensure responsiveness across all devices and improve your site's performance using Suspense and Preload.
    </motion.p>

    <div className='mt-20 flex flex-wrap gap-10'>
      {services.map((service,index) => (
       <ServiceCard key={service.title} index = {index} {...service}/>
      ))}
    </div>
   </>
  )
}

export default SectionWrapper(About,"about");