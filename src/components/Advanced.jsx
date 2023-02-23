import React, { useEffect, useState } from 'react';
import Recognition from '../assets/images/icon-brand-recognition.svg';
import Detailed from '../assets/images/icon-detailed-records.svg';
import Customizable from '../assets/images/icon-fully-customizable.svg';

import { fetchFromAPI } from '../assets/fetchFromAPI';
import { motion } from 'framer-motion';

const smoothTransition = "transition-all duration-500 ease-in-out";

const LinkShortened = ({ shortenedLink, originalLink }) => {
  const [copied, setCopied] = useState(false);

  const copyLink = (e) => {
    const myLink = document.getElementById(shortenedLink).textContent;
    navigator.clipboard.writeText(myLink);
    setCopied(true);
  }
  return (
    <motion.div className='md:mx-[165px] mx-6 bg-white py-5 px-4 md:px-8 md:flex md:flex-row justify-between rounded-md items-center shadow-sm'
      whileInView={{ y: [30, 0], opacity: [0, 1] }}
      transition={{ delay: 0.3, duration: 0.8, ease: 'easeIn' }}
    >
      <h3 className='text-veryDarkViolet text-base md:text-xl font-medium md:mb-0 mb-4 text-ellipsis overflow-hidden' title={originalLink}>{originalLink}</h3>
      <div className='md:gap-x-6 gap-y-3 md:gap-y-0 flex flex-col md:flex-row items-center pt-5 md:pt-0 border-t-2 border-t-gray md:border-none'>
        <h3 className='text-cyan text-base md:text-xl font-medium' id={shortenedLink}>{shortenedLink}</h3>
        <button className={`py-2 px-8 text-white font-bold text-base rounded text-center w-full md:w-auto hover:opacity-70 ${smoothTransition} ${copied ? 'bg-veryDarkViolet' : 'bg-cyan'}`} onClick={copyLink}>{copied ? "copied!" : "copy"}</button>
      </div>
    </motion.div>
  )
}

const Statistic = ({ header, text, decorationImage, placeSelf }) => {

  return (
    <motion.div className={`relative pt-[4.625rem] shadow-sm px-8 md:px-5 lg:px-8 md:pb-5 lg:pb-8 pb-8  bg-white rounded-lg h-auto z-20 ${placeSelf}`}
      whileInView={{ y: [30, 0], opacity: [0, 1] }}
      transition={{ delay: 0.2, duration: 0.8, ease: 'easeIn' }}
    >
      <div className='w-[89px] aspect-square rounded-full bg-darkViolet grid place-items-center absolute -top-[44.5px] md:left-8 left-0 right-0 md:right-auto mx-auto md:mx-0' aria-hidden="true">
        <img src={decorationImage} alt="" />
      </div>
      <div className=''>
        <h4 className='font-bold text-xl md:leading-9 tracking-[0.01em] text-veryDarkBlue'>{header}</h4>
        <p className='mt-3 font-medium text-base tracking-tight text-grayishViolet'>{text}</p>
      </div>
    </motion.div>
  )
}

const Advanced = () => {
  const [url, setUrl] = useState("");
  const [shortenedUrls, setShortenedUrls] = useState([]);
  const [response, setResponse] = useState([]);
  const [res, setRes] = useState(false);
  const [error, setError] = useState(false)


  useEffect(() => {
    setShortenedUrls([])

    fetchFromAPI(`${url.replace("https://", "")}`)
      .then((data) => setShortenedUrls(shortenedUrls => [...shortenedUrls, data["result"]]))
    console.log(shortenedUrls);
  }, [url]);

  // useEffect(() => {
  //   const storedValue = localStorage.getItem('response');

  //   console.log(storedValue);

  //   if (storedValue.length > 0) {

  //     setResponse(storedValue);

  //   }
  // }, [])

  // useEffect(() => {
  //   if (response) {
  //     localStorage.setItem('response', [...response])
  //   }
  // }, [response])

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!url) {
      setError(true);
    } else {
      setError(false);
      setResponse(prevState => [...response, ...shortenedUrls]);
      if (response.length === 0) {
        setRes(true);
      }
      console.log(response)
      //  localStorage.setItem('response', [...response, ...shortenedUrls]);
    }
  }

  return (
    <div className='md:mt-[152px] mt-[168px] relative bg-[#F0F1F6] pt-[203px] md:pb-28 pb-12'>
      <motion.form action="" className='lg:mx-[165px] md:mx-20 mx-6 md:px-16 p-8 md:py-12 bg-darkViolet rounded-xl absolute right-0 left-0 -top-[102px] md:-top-[78px] shadow-sm'
        onSubmit={handleSubmit}
        whileInView={{ y: [30, 0], opacity: [0,1] }}
        transition={{ delay: 0.2, duration: 0.8, ease: 'easeIn' }}
      >
        <div className='flex flex-col md:flex-row space-y-6 md:space-y-0 md:space-x-6 items-center justify-center'>
          <input type="text" name="link" id="link" placeholder='Shorten a link here...' className={`py-4 px-8 flex-1 rounded-lg ${error ? 'border-2 border-red' : 'border-none'}`} onChange={(e) => setUrl(e.target.value)} />
          <button type="submit" className={`rounded-lg bg-cyan py-4 px-10 text-center font-bold text-xl tracking-tight text-white w-full flex-1 md:flex-none md:w-auto hover:opacity-75 ${smoothTransition}`}>Shorten it!</button>
        </div>
        {error && <p className='text-red text-base font-medium italic'>Please add a link</p>}
      </motion.form>

      <div className='space-y-5 md:-mt-28 -mt-14 font-bold'>
        {res && <motion.h2 className=' text-darkViolet text-center mt-3'
          whileInView={{y: [20, 0], opacity: [0,1]}}
          transition={{delay: 0.8, ease: 'easeInOut', duration: 0.3}}
          initial={false}
        >🥴 Sorry! This service is not available at the moment, come back later.</motion.h2>}
        { response?.map((links, id) => (
          <LinkShortened key={id} originalLink={links?.original_link} shortenedLink={links?.full_share_link} />
        ))}
      </div>

      <motion.div className='mb-[100px] md:mt-24 mt-12'
       whileInView={{y: [20, 0], opacity: [0,1]}}
       transition={{duration: 0.5, ease: 'easeInOut', delay: 0.1}}
      >
        <h3 className='font-bold md:text-[40px] text-3xl md:leading-[61px] tracking-tight text-center text-veryDarkBlue'>
          Advanced statistics
        </h3>
        <p className='font-medium md:text-00xl text-base md:tracking-[0.005em] text-grayishViolet md:w-[532px] text-center mx-auto'>
          Track how your links are performing across the web with our advanced statistics dashboard.
        </p>
      </motion.div>
      <div className='lg:px-[165px] md:px-20 px-6 grid md:gap-x-7 gap-y-24 md:gap-y-0 md:h-[316px] md:grid-cols-3 grid-rows-3 md:grid-rows-none lineStyle'>
        <Statistic decorationImage={Recognition} header="Brand Recognition" text="Boost your brand recognition with each click. Generic links don’t mean a thing. Branded links help instil confidence in your content." placeSelf="place-self-start" />
        <Statistic decorationImage={Detailed} header="Detailed Records" text="Gain insights into who is clicking your links. Knowing when and where people engage with your content helps inform better decisions." placeSelf="place-self-center" />
        <Statistic decorationImage={Customizable} header="Fully Customizable" text="Improve brand awareness and content discoverability through customizable links, supercharging audience engagement." placeSelf="place-self-end" />
      </div>
    </div>
  )
}

export default Advanced;