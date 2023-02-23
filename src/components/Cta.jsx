import React from 'react';
import { motion } from 'framer-motion';

const smoothTransition = "transition-all duration-500 ease-in-out";

const Cta = () => {
  return (
    <div className='lg:px-[450px] md:px-20 py-14 ctaSection bg-darkViolet text-center'>
      <motion.h3 className='text-center font-bold text-white md:text-[40px]  md:leading-[61px] tracking-tight text-3xl mb-5'
        whileInView={{ y: [20, 0], opacity: [0, 1] }}
        transition={{ duration: 0.5, ease: 'easeInOut', delay: 0.1 }}
      >
        Boost your links today
      </motion.h3>
      <motion.a href="#Get-started" className={`px-6 text-center font-semibold inline-block py-2 rounded-full bg-cyan text-white -tracking-[0.03em] hover:opacity-70 ${smoothTransition}`}
        whileInView={{ y: [20, 0], opacity: [0, 1] }}
        transition={{ duration: 0.5, ease: 'easeInOut', delay: 0.1 }}
      >Get Started</motion.a>
    </div>
  )
}

export default Cta;