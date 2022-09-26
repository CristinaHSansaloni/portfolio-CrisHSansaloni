import { Canvas } from '@react-three/fiber';
import React from 'react';
import '../styles/header.css';
import CTA from './CTA';

import { OrbitControls } from '@react-three/drei';
import Sphere from './AnimatedSphere';
import { Suspense } from 'react';


const Header = () => {
  return (
    <header>
      <div className='container header__container'>
        <h5>Hello I'm</h5>
        <h1 className='text-light'>Cris Sansaloni</h1>
        <h2>Frontend Developer</h2>
        <Canvas>
          <OrbitControls enableZomm={false} />
          <ambientLight intensity={0.5} />
          <directionalLight position={[-2, 5, 2]} intensity={2} />
          <Suspense fallback={null}>
            <Sphere />
          </Suspense>
        </Canvas>
        <CTA />
        <a href='#About' className='scroll__down'>Scroll Down</a>
      </div>
    </header>
  )
}

export default Header;