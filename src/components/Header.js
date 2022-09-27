import { Canvas } from '@react-three/fiber';
import React from 'react';
import '../styles/header.css';
import { OrbitControls } from '@react-three/drei';
import Sphere from './AnimatedSphere';
import { Suspense } from 'react';
import HeaderSocials from './HeaderSocials';


const Header = () => {
  return (
    <header>
      <div className='container header__container'>
        <h5>Hello I'm</h5>
        <h1 className='text-light'>Cris Sansaloni</h1>
        <h2>Frontend Developer</h2>
        <Canvas className='canvas'>
          <OrbitControls enableZomm={false} />
          <ambientLight intensity={0.6} />
          <directionalLight position={[-3, 6, 3]} intensity={2} />
          <Suspense fallback={null}>
            <Sphere />
          </Suspense>
        </Canvas>
        
        <HeaderSocials />
        
      </div>
    </header>
  )
}

export default Header;