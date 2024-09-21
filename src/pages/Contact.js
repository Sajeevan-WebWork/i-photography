import React, {useContext, useState} from 'react';
import WomanImg from '../img/contact/woman.png'

import { motion } from 'framer-motion'

import { transition1 } from '../transitions'
import { CursorContext } from '../context/CursorContext';


const Contact = () => {
  const {mouseEnterHandler, mouseLeaveHandler} = useContext(CursorContext)
  return (
    <motion.section
      // initial={{ opacity: 0, y: '100%' }}
      // animate={{ opacity: 1, y: 0 }}
      // exit={{ opacity: 0, y: '100%' }}
      // transition={transition1}
      className='section bg-white'>
      <div className='container mx-auto h-full'>
        <div className='flex flex-col lg:flex-row h-full items-center justify-start pt-36 gap-x-8 text-center lg:text-left'>
          <motion.article
          initial={{ opacity: 0, y: '-100%' }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: '100%' }}
          onMouseEnter={mouseEnterHandler}
            onMouseLeave={mouseLeaveHandler}
          transition={{ transition: transition1, duration: 1 }}
            className='lg:flex-1 lg:pt-32 '>
            <h1 className='h1'>Contact Me</h1>
            <p className='mt-12'>I would love to get suggestion from you.</p>
            <form className='flex flex-col gap-y-4'>
              <div className='flex gap-x-10'>
                <input type="text" placeholder='Your Name' className='outline-none border-b border-b-primary h-[50px] bg-transparent font-secondary w-full pl-3 placeholder:text-[#757878]' />
                <input type="text" placeholder='Your EMail Address' className='outline-none border-b border-b-primary h-[50px] bg-transparent font-secondary w-full pl-3 placeholder:text-[#757878]' />
              </div>
              <input type="text" placeholder='Your Message' className='outline-none border-b border-b-primary h-[50px] bg-transparent font-secondary w-full pl-3 placeholder:text-[#757878]' />
              <button className='btn mt-[30px] m-auto lg:mx-0 self-start'>Send it</button>
            </form>
          </motion.article>
          {/* <motion.div
            initial={{ opacity: 0, y: '100%' }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: '100%' }}
            transition={transition1}
            className='hidden lg:flex bg-[#eef7f9] absolute bottom-0 left-0 right-0 top-72 -z-10'>
          </motion.div> */}
          <motion.figure
            initial={{ opacity: 0, y: '80%' }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: '80%' }}
            transition={{ transition: transition1, duration: 1 }}
            onMouseEnter={mouseEnterHandler}
            onMouseLeave={mouseLeaveHandler}
            className='lg:flex-1'>
            <img src={WomanImg} alt="images" />
          </motion.figure>
        </div>
      </div>
    </motion.section>
  )
};

export default Contact;
