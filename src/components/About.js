import React from 'react';
import '../styles/about.css';
import ME from '../assets/me.jpg';
import CTA from './CTA';

const About = () => {
  return (
    <section id='about'>
      <h2>About Me</h2>
      <div className='container about__container'>
        <div className='about__me'>
          <div className='about__me-image'>
            <img src={ME} alt='Image about me' />
          </div>
        </div>
        <div className='about__content'>
          <p>
Soy desarrolladora Front-End Junior. Me apasiona el mundo tecnológico porque es satisfactorio construir cosas que otros puedan utilizar y ser parte de una comunidad tan colaborativa, en la que poder crecer y aprender continuamente.  
	Actualmente estoy desarrollando algunos proyectos personales para seguir ahondando en los conocimientos que ya tengo y aprendiendo nuevos lenguajes y frameworks. 
	Mi objetivo es encontrar un empleo y proyectos donde poder plasmar todo lo que he aprendido y desarrollar nuevas capacidades. 

	En el bootcamp de Adalab de Programación Web, he adquirido conocimientos de maquetación (HTML, CSS, SASS...), de JavaScript, ReactJs, Git, además de conocimientos de back-end (NodeJs, ExpressJs, SQL). 
He trabajado en el marco de trabajo Scrum y la filosofía Agile. Y me desenvuelvo con facilidad trabajando en remoto.
Tengo igualmente conocimiento de programas de diseño y edición (Photoshop, Illustrator…) y manejo los programas de paquete Office (Word, Excel, Power Point..)Hablo inglés y francés nivel intermedio...</p>
        <CTA />
        </div>
      </div>
    </section>
  )
}

export default About;