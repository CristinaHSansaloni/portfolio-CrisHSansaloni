import React from 'react';
import '../styles/nav.css';
import {AiFillHome} from 'react-icons/ai';
import {FaUserAstronaut} from 'react-icons/fa';
import {FaCode} from 'react-icons/fa';
import {BsImages} from 'react-icons/bs';
import {RiMessage3Fill} from 'react-icons/ri';
import {FaBars} from 'react-icons/fa';
import {FaTimes} from 'react-icons/fa';
import { useState } from 'react';
import { useRef } from 'react';

const Nav = () => {
  const [activeNav, setActiveNav] = useState('#');
  const navRef = useRef();
  const showNavbar = () => {
    navRef.current.classList.toggle("responsive_nav");
  }
  return (
    <header>
      <nav ref={navRef}>
        <a href='#' onClick={() => setActiveNav('#')} className={activeNav === '#' ? 'active' : ''}><AiFillHome /></a>
        <a href='#about' onClick={() => setActiveNav('#about')} className={activeNav === '#about' ? 'active' : ''}><FaUserAstronaut /></a>
        <a href='#experience' onClick={() => setActiveNav('#experience')} className={activeNav === '#experience' ? 'active' : ''}><FaCode /></a>
        <a href='#portfolio' onClick={() => setActiveNav('#portfolio')} className={activeNav === '#portfolio' ? 'active' : ''}><BsImages /></a>
        <a href='#contact' onClick={() => setActiveNav('#contact')} className={activeNav === '#contact' ? 'active' : ''}><RiMessage3Fill /></a>
        <button className='nav-btn nav-close-btn' onClick={showNavbar}>
          <FaTimes />
        </button>
      </nav>
      <button className='nav-btn' onClick={showNavbar}>
        <FaBars />
      </button>
    </header>
  )
}

export default Nav;