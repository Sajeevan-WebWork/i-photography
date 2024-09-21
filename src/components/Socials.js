import React, {useContext, useState} from 'react';

import {
  ImFacebook,
  ImTwitter,
  ImPrinter,
  ImInstagram,
  ImYoutube
} from 'react-icons/im'

import { CursorContext } from '../context/CursorContext';


const Socials = () => {
  const {mouseEnterHandler, mouseLeaveHandler} = useContext(CursorContext)

  return (
  <>
  <div className='hidden xl:flex ml-24'>
    <ul 
    onMouseEnter={mouseEnterHandler}
    onMouseLeave={mouseLeaveHandler}
    className='flex gap-x-4'>
      <li>
        <a href='https://www.facebook.com/' target='_blank' rel='noreferrer'><ImFacebook /></a>
      </li>

      <li>
        <a href='https://twitter.com/x/migrate?tok=7b2265223a222f3f6c616e673d656e222c2274223a313732313036343839317de2fdd199135deb02c92684118ea4dc0c' target='_blank' rel='noreferrer'><ImTwitter /></a>
      </li>

      <li>
        <a href='https://www.instagram.com/' target='_blank' rel='noreferrer'><ImInstagram /></a>
      </li>

      <li>
        <a href='https://www.youtube.com/' target='_blank' rel='noreferrer'><ImYoutube /></a>
      </li>
    </ul>
  </div>
  </>
  )
};

export default Socials;
