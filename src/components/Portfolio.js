import React from 'react';
import '../styles/portfolio.css';
import spaces from '../assets/spaces.png';
import twitterlab from '../assets/twitterlab.png';

const Portfolio = () => {
  return (
    <section id='portfolio'>
      <h2>My Recent Work</h2>
      <div className='container portfolio__container'>
        <article className='portfolio__item'>
          <div className='portfolio__item-image'>
            <img src={spaces} alt=""></img>
          </div>
          <h3>Landing Page Open Spaces</h3>
          <a href='https://github.com/CristinaHSansaloni/web-shop-open-spaces' className='btn' target='_blank' rel='noreferrer'>Github</a>
          <a href='https://cristinahsansaloni.github.io/web-shop-open-spaces/' className='btn btn-primary' target='_blank' rel='noreferrer'>Live Demo</a>
        </article>
        <article className='portfolio__item'>
          <div className='portfolio__item-image'>
            <img src={twitterlab} alt=""></img>
          </div>
          <h3>App Web TwitterLab</h3>
          <a href='https://github.com/CristinaHSansaloni/TWITTERLAB' className='btn' target='_blank' rel='noreferrer'>Github</a>
          <a href='https://cristinahsansaloni.github.io/TWITTERLAB/' className='btn btn-primary' target='_blank' rel='noreferrer'>Live Demo</a>
        </article>
        <article className='portfolio__item'>
          <div className='portfolio__item-image'>
            <img src={twitterlab} alt=""></img>
          </div>
          <h3>App Web TwitterLab</h3>
          <a href='https://github.com/CristinaHSansaloni/TWITTERLAB' className='btn' target='_blank' rel='noreferrer'>Github</a>
          <a href='https://cristinahsansaloni.github.io/TWITTERLAB/' className='btn btn-primary' target='_blank' rel='noreferrer'>Live Demo</a>
        </article>
        <article className='portfolio__item'>
          <div className='portfolio__item-image'>
            <img src={twitterlab} alt=""></img>
          </div>
          <h3>App Web TwitterLab</h3>
          <a href='https://github.com/CristinaHSansaloni/TWITTERLAB' className='btn' target='_blank' rel='noreferrer'>Github</a>
          <a href='https://cristinahsansaloni.github.io/TWITTERLAB/' className='btn btn-primary' target='_blank' rel='noreferrer'>Live Demo</a>
        </article>
        <article className='portfolio__item'>
          <div className='portfolio__item-image'>
            <img src={twitterlab} alt=""></img>
          </div>
          <h3>App Web TwitterLab</h3>
          <a href='https://github.com/CristinaHSansaloni/TWITTERLAB' className='btn' target='_blank' rel='noreferrer'>Github</a>
          <a href='https://cristinahsansaloni.github.io/TWITTERLAB/' className='btn btn-primary' target='_blank' rel='noreferrer'>Live Demo</a>
        </article>
        <article className='portfolio__item'>
          <div className='portfolio__item-image'>
            <img src={twitterlab} alt=""></img>
          </div>
          <h3>App Web TwitterLab</h3>
          <a href='https://github.com/CristinaHSansaloni/TWITTERLAB' className='btn' target='_blank' rel='noreferrer'>Github</a>
          <a href='https://cristinahsansaloni.github.io/TWITTERLAB/' className='btn btn-primary' target='_blank' rel='noreferrer'>Live Demo</a>
        </article>

      </div>
    </section>
  )
}

export default Portfolio