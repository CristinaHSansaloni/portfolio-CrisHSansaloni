import React from 'react';
import '../styles/nav.css';
import {AiFillHome} from 'react-icons/ai';
import {FaUserAstronaut} from 'react-icons/fa';
import {FaCode} from 'react-icons/fa';
import {BsImages} from 'react-icons/bs';
import {RiMessage3Fill} from 'react-icons/ri';
import { useState } from 'react';

const Nav = () => {
  const [activeNav, setActiveNav] = useState('#')
  return (
    <nav>
      <a href='#' onClick={() => setActiveNav('#')} className={activeNav === '#' ? 'active' : ''}><AiFillHome /></a>
      <a href='#about' onClick={() => setActiveNav('#about')} className={activeNav === '#about' ? 'active' : ''}><FaUserAstronaut /></a>
      <a href='#experience' onClick={() => setActiveNav('#experience')} className={activeNav === '#experience' ? 'active' : ''}><FaCode /></a>
      <a href='#portfolio' onClick={() => setActiveNav('#portfolio')} className={activeNav === '#portfolio' ? 'active' : ''}><BsImages /></a>
      <a href='#contact' onClick={() => setActiveNav('#contact')} className={activeNav === '#contact' ? 'active' : ''}><RiMessage3Fill /></a>
    </nav>
  )
}

export default Nav;