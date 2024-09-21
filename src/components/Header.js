import React, { useContext, useState } from 'react';
import Socials from './Socials'
import Logo from '../img/header/logo.svg'
import MobileNav from './MobileNav'
import { Link } from 'react-router-dom';
import './app.css'
import { CursorContext } from '../context/CursorContext';

// import {Link} from 'react-router-dom'

const Header = () => {
  const { mouseEnterHandler, mouseLeaveHandler } = useContext(CursorContext)

  return (

    <>
      <header className="fixed w-full px:[20px] px-30 lg:px-[100px] z-30 h-[100px] lg:h-[140px] flex items-center Herader__container">
        <div
          onMouseEnter={mouseEnterHandler}
          onMouseLeave={mouseLeaveHandler}
          className='flex flex-col lg:flex-row lg:items-center w-full justify-between'>
          <Link to={'/'} className='max-w-[200px]'>
            <img src={Logo} alt='' />
          </Link>

          <nav
            onMouseEnter={mouseEnterHandler}
            onMouseLeave={mouseLeaveHandler}
            className='hidden xl:flex gap-x-12 font-semibold'>
            <Link to={'/'} className='text-[#696c6d] hover:text-primary transition'>Home</Link>
            <Link to={'/about'} className='text-[#696c6d] hover:text-primary transition'>About</Link>
            <Link to={'/portfolio'} className='text-[#696c6d] hover:text-primary transition'>Portfolio</Link>
            <Link to={'/contact'} className='text-[#696c6d] hover:text-primary transition'>Contact</Link>
          </nav>
        </div>
        <MobileNav />
        <Socials />
      </header>
    </>
  )
};

export default Header;
