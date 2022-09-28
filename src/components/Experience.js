import React from 'react';
import '../styles/experience.css';
import {FaHtml5} from 'react-icons/fa';
import {FaCss3Alt} from 'react-icons/fa';
import {SiJavascript} from 'react-icons/si';
import {DiBootstrap} from 'react-icons/di';
import {FaReact} from 'react-icons/fa';
import {FaGitAlt} from 'react-icons/fa';
import {FaNodeJs} from 'react-icons/fa';
import {GrMysql} from 'react-icons/gr';
import {SiExpress} from 'react-icons/si';
import {DiScrum} from 'react-icons/di';
import {BsSlack} from 'react-icons/bs';
import {BsGithub} from 'react-icons/bs';
import {SiAdobephotoshop} from 'react-icons/si';
import {SiAdobeillustrator} from 'react-icons/si';


const Experience = () => {
  return (
    <section id='experience'>
      <h2>My Skills</h2>

      <div className='container experience__container'>
        <div className='experience__frontend'>
          <h3>Frontend Development</h3>
          <div className='experience__content'>
          <article className='experience__details'>
            <FaHtml5 className='icon'/>
            <h4>HTML5</h4>
            <small>Experienced</small>
          </article>
          <article className='experience__details'>
            <FaCss3Alt className='icon' />
            <h4>CSS3</h4>
            <small>Experienced</small>
          </article>
          <article className='experience__details'>
            <SiJavascript className='icon' />
            <h4>JavaScript</h4>
            <small>Intermediate</small>
          </article>
          <article className='experience__details'>
            <DiBootstrap className='icon' />
            <h4>Bootstrap</h4>
            <small>Intermediate</small>
          </article>
          <article className='experience__details'>
            <FaReact className='icon' />
            <h4>React</h4>
            <small>Intermediate</small>
          </article>
          <article className='experience__details'>
            <FaGitAlt className='icon' />
            <h4>Git</h4>
            <small>Intermediate</small>
          </article>
        </div>
        </div>
        <div className='experience__backend'>
          <h3>Backend Development</h3>
          <div className='experience__content'>
          <article className='experience__details'>
            <FaNodeJs className='icon' />
            <h4>Node JS</h4>
            <small>Basic</small>
          </article>
          <article className='experience__details'>
            <GrMysql className='icon' />
            <h4>MySQL</h4>
            <small>Basic</small>
          </article>
          <article className='experience__details'>
            <SiExpress className='icon' />
            <h4>Express</h4>
            <small>Basic</small>
          </article> 
        </div>
        </div>
        <div className='experience__others'>
          <h3>Others</h3>
          <div className='experience__content'>
          <article className='experience__details'>
            <DiScrum className='icon' />
            <h4>Scrum & Agile</h4>
            <small>Intermediate</small>
          </article>
          <article className='experience__details'>
            <BsSlack className='icon' />
            <h4>Slack</h4>
            <small>Experienced</small>
          </article>
          <article className='experience__details'>
            <BsGithub className='icon' />
            <h4>GitHub</h4>
            <small>Experienced</small>
          </article>
          <article className='experience__details'>
            <SiAdobephotoshop className='icon' />
            <h4>Photoshop</h4>
            <small>Intermediate</small>
          </article> 
          <article className='experience__details'>
            <SiAdobeillustrator className='icon' />
            <h4>Illustrator</h4>
            <small>Intermediate</small>
          </article> 
        </div>
        </div>
      </div>
    </section>
  )
}

export default Experience;