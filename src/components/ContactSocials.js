import React from 'react';
import {AiOutlineLinkedin} from 'react-icons/ai';
import {AiOutlineGithub} from 'react-icons/ai';
import {AiOutlineTwitter} from 'react-icons/ai';

const ContactSocials = () => {
  return (
    <div className='contact__socials'>
      <a href='https://www.linkedin.com/in/crishsansaloni/'><AiOutlineLinkedin /></a>
      <a href='https://github.com/CristinaHSansaloni'><AiOutlineGithub /></a>
      <a href='https://twitter.com/CrisHSansaloni'><AiOutlineTwitter /></a>
    </div>
  )
}

export default ContactSocials;