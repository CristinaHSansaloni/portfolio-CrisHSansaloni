import React from 'react';
import '../styles/portfolio.css';
import IMG1 from '../assets/IMG1.png';
import IMG2 from '../assets/IMG2.png';
import IMG3 from '../assets/IMG3.jpg';
import IMG4 from '../assets/IMG4.jpg';
import IMG5 from '../assets/IMG5.jpg';
import IMG6 from '../assets/IMG6.jpg';


const data = [
  {
    id: 1,
    image: IMG1,
    title: 'Landing Page Open Spaces',
    github: 'https://github.com/CristinaHSansaloni/web-shop-open-spaces',
    demo: 'https://cristinahsansaloni.github.io/web-shop-open-spaces/'
  },
  {
    id: 2,
    image: IMG2,
    title: 'App Web TwitterLab',
    github: 'https://github.com/CristinaHSansaloni/TWITTERLAB',
    demo: 'https://cristinahsansaloni.github.io/TWITTERLAB/'
  },
  {
    id: 3,
    image: IMG3,
    title: 'Awesome Profile Cards',
    github: 'https://github.com/CristinaHSansaloni/Awesome-profile-cards',
    demo: 'https://promo-q-module-4-team-3.herokuapp.com/card'
  },
  {
    id: 4,
    image: IMG4,
    title: 'Harry Potter character Finder',
    github: 'https://github.com/CristinaHSansaloni/Harry-Potter-Character-Finder',
    demo: 'https://cristinahsansaloni.github.io/Harry-Potter-Character-Finder/'
  },
  {
    id: 5,
    image: IMG5,
    title: 'Friends Quotes',
    github: 'https://github.com/CristinaHSansaloni/friends-quotes',
    demo: 'https://cristinahsansaloni.github.io/friends-quotes/'
  },
  {
    id: 6,
    image: IMG6,
    title: 'Number Game',
    github: 'https://github.com/CristinaHSansaloni/friends-quotes',
    demo: 'https://cristinahsansaloni.github.io/friends-quotes/'
  }
]

const Portfolio = () => {
  return (
    <section id='portfolio'>
      <h2>My Recent Work</h2>

      <div className='container portfolio__container'>
        {
          data.map(({id, image, title, github, demo}) => {
            return (
              <article key={id} className='portfolio__item'>
                <div className='portfolio__item-image'>
                  <img src={image} alt={title}></img>
                </div>
                <h3>{title}</h3>
                <div className='portfolio__item-cta'>
                  <a href={github} className='btn' target='_blank' rel='noreferrer'>Github</a>
                  <a href={demo} className='btn btn-primary' target='_blank' rel='noreferrer'>Live Demo</a>

                </div>
              </article>
            )

          })
        }
      </div>
    </section>
  )
}

export default Portfolio