import React from 'react';
import CVNO from '../assets/CVNO.pdf';

const CTA = () => {
  return (
    <div className='cta'>
        <a href={CVNO} download className='btn'>Dowload CV</a>
        <a href='#contact' className='btn btn-primary'>Let's Talk</a>
    </div>
  )
}

export default CTA;