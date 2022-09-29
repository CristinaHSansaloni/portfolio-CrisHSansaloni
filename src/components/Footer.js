import React from 'react';
import '../styles/footer.css';
import logo from '../assets/logo.png';

const Footer = () => {
  return (
    <footer>
      <a href='#' className='footer__logo'><img src={logo} alt='Logo' /></a>
      <ul className='permalinks'>
        <li><a href='#'>Home</a></li>
        <li><a href='#about'>About</a></li>
        <li><a href='#experience'>Skills</a></li>
        <li><a href='#portfolio'>Portfolio</a></li>
        <li><a href='#contact'>Contact</a></li>
      </ul>
      <div className='footer__copyright'>
        <small>&copy; CrisHSansaloni 2022</small>
      </div>
    </footer>
  )
}

export default Footer;