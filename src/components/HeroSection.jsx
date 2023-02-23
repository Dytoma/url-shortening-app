import React from 'react';
import HeroImage from '../assets/images/illustration-working.svg';
import { motion } from 'framer-motion'

const smoothTransition = "transition-all duration-500 ease-in-out";


const HeroSection = () => {
  return (
    <div className='mt-10 lg:mt-20 md:mt-10 flex flex-col-reverse md:flex-row lg:pl-[165px] md:pl-20 md:items-center'>
      <motion.div 
        className='md:w-4/6 px-6 md:px-0 mt-8 md:mt-0'
        whileInView={{x: [-100, 0], opacity: [0, 1]}} 
        transition={{ duration: 1, ease: 'easeInOut' }}
      >
        <h1 className='font-bold lg:text-[83px] md:text-7xl text-4xl md:leading-[90px] tracking-tighter text-veryDarkViolet text-center md:text-left'>
          More than just shorter links
        </h1>
        <p className='font-medium text-base text-center md:text-left md:leading-9 track-[0.01em] text-grayishViolet lg:pr-52 md:pr-36 mt-2'>
          Build your brand’s recognition and get detailed insights on how your links are performing.
        </p>
        <div className='mt-10 text-center md:text-left'>
          <a href="#Get-started" className={`px-6 text-center font-semibold inline-block py-2 rounded-full bg-cyan text-white -tracking-[0.03em] hover:opacity-70 ${smoothTransition}`}>Get Started</a>
        </div>
      </motion.div>

      <div className='lg:w-[800px] md:w-[600px] md:h-[362px]'>
        <div className='h-full md:relative overflow-hidden'>
          <img src={HeroImage} alt="Illustration working" className='md:h-full md:w-full md:absolute lg:left-[123px] md:left-24' />
        </div>
      </div>

    </div>
  )
}

export default HeroSection