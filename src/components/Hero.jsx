import {motion} from 'framer-motion'
import { Tilt } from 'react-tilt'
import { styles } from '../styles'
import { fadeIn } from '../utils/motion'
import { meuLogo } from '../assets'

const LogoFoto = () => {
  return (
    <Tilt className="xs:w-[550px] w-full">
      <motion.div
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          duration: 1.5,
          delay: 0.5,
          ease: "easeOut"
        }}
      >
        <div
          options={{
            max: 45,
            scale: 1,
            speed: 250
          }}
          className="flex justify-evenly items-center flex-col "
        >
          <motion.img 
            src={meuLogo} 
            alt="Meu Logo" 
            className="w-[550px] h-auto object-contain shadow-card rounded-full" 
            initial={{ scale: 0.5, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{
              duration: 1.8,
              delay: 0.8,
              ease: "easeOut"
            }}
          />
        </div>
      </motion.div>
    </Tilt>
  )
}

const Hero = () => {
  return (
    <section className='relative w-full h-screen mx-auto'>
      <div className={`${styles.paddingX} absolute inset-0 top-[120px] max-w-7xl mx-auto flex flex-col items-center gap-5`}>
        <div>
          <h1 className={`${styles.heroHeadText} text-white text-center`}>
            Hi, I'm  
            <span className='text-[#915eff]'> Vinivrd</span> 
          </h1>

          <p className={`${styles.heroSubText} text-white-100 text-center`}>
            I'm college studend and  <br className='sm:block hidden'/>
            this is my portifolio
          </p>
        </div>

        <div className="mt-8">
          <LogoFoto />
        </div>
      </div>

      <div className='absolute xs:bottom-10
      bottom-32 w-full flex justify-center
      items-center'>

        <a href="#about">
          <div className='w-[35px] h-[64px]
          rounded-3xl border-4 border-secondary
          flex justify-center items-start p-2'>
            <motion.dev
              animate = {{
                y: [0,24,0]
              }}
              transition = {{
                duration: 1.5,
                repeat: Infinity,
                repeatType:'loop'
              }}
              className = 'w-3 h-3 rounded-full bg-secondary mb-1'
            />


          </div>
        </a>
      </div>
    </section>
  )
}

export default Hero