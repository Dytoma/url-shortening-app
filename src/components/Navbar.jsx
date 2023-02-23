import React, { useState } from 'react';
import Logo from "../assets/images/logo.svg";
import { FaBars } from 'react-icons/fa';
import { BsXLg } from 'react-icons/bs';
import { motion } from 'framer-motion';

const variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      delayChildren: 0.2
    }
  }
}

const smoothTransition = "transition-all duration-500 ease-in-out";

const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false)
  return (
    <div className='lg:px-[165px] md:px-20 md:pt-14 px-6 pt-10 overflow-hidden'>
      <motion.nav className='flex items-center'
        whileInView={{ y: [-30, 0], opacity: [0, 1] }}
        transition={{duration: 1, ease: 'easeInOut'}}
        variant={variants}
      >
        <div className='flex items-center justify-between w-full md:w-auto'>
          <img src={Logo} alt="logo" />
          <div className='md:hidden' onClick={() => setShowMenu(!showMenu)}>
            {!showMenu ? <FaBars className='w-6 h-6 text-gray animate-slowfade' /> : <BsXLg className='w-6 h-6 text-gray animate-slowfade' />}
          </div>
        </div>


        <div className={`fixed top-[96px] md:mx-0 w-[87.2%] md:static flex-col md:flex-row md:flex-1 flex md:w-full md:justify-between md:ml-11 items-center bg-darkViolet md:bg-transparent z-30 px-6 py-11 md:p-0 rounded-xl md:rounded-none ${showMenu ? "left-0 right-0 mx-auto animate-slideleft md:animate-slowfade" : "-left-full md:animate-slowfade"}`}>
          <div>
            <ul className='md:space-x-8 flex flex-col md:block text-base -tracking-[0.01em] md:text-grayishViolet text-white md:font-medium font-semibold space-y-10 md:space-y-0 items-center pb-8 md:pb-0 navbar'>
              <li><a href="#Features" className={`hover:text-veryDarkViolet ${smoothTransition}`}>Features</a></li>
              <li><a href="#Pricing" className={`hover:text-veryDarkViolet ${smoothTransition}`}>Pricing</a></li>
              <li><a href="#Resources" className={`hover:text-veryDarkViolet ${smoothTransition}`}>Resources</a></li>
            </ul>
          </div>
          <div className='font-semibold text-base md:space-x-9 flex flex-col md:block items-center w-full md:w-auto space-y-7 md:space-y-0 pt-8 md:pt-0 border-t-2 border-t-grayishViolet md:border-none'>
            <a href="#Login" className={`-tracking-[0.01em] md:text-grayishViolet text-white hover:text-veryDarkViolet ${smoothTransition}`}>Login</a>
            <a href="#Sign-up" className={`px-6 inline-block text-center py-2 w-full md:w-auto rounded-full bg-cyan text-white -tracking-[0.03em] hover:opacity-70 ${smoothTransition}`}>Sign Up</a>
          </div>
        </div>
      </motion.nav>
    </div>
  )
}

export default Navbar;