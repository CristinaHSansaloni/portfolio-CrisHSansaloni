import React from 'react';
import {AiOutlineLinkedin} from 'react-icons/ai';
import {AiOutlineGithub} from 'react-icons/ai';
import {AiOutlineTwitter} from 'react-icons/ai';
import {FaCodepen} from 'react-icons/fa';

const HeaderSocials = () => {
  return (
    <div className='header__socials'>
      <a href='https://www.linkedin.com/in/crishsansaloni/'><AiOutlineLinkedin /></a>
      <a href='https://github.com/CristinaHSansaloni'><AiOutlineGithub /></a>
      <a href='https://twitter.com/CrisHSansaloni'><AiOutlineTwitter /></a>
      <a href='https://codepen.io/cristinahsansaloni'><FaCodepen /></a>
    </div>
  )
}

export default HeaderSocials;