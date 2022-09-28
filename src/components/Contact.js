import React from 'react';
import '../styles/contact.css';
import ContactSocials from './ContactSocials';

const Contact = () => {
  return (
    <section id='contact'>
      <h2>Contact Me</h2>
      <div className='container contact__container'>
        <div className='contact_socials'>
        <ContactSocials />
        </div>
        <form className='form' action=''>
          <input type="text" name='name' placeholder='Your Full Name' required />
          <input type="email" name='email' placeholder='Your Email' required />
          <textarea name='message' rows='7' placeholder='Your Message' required></textarea>
          <button type='submit' className='btn btn-primary'>Send Message</button>
        </form>
      </div>
    </section>
  )
}

export default Contact;