import React from 'react';
import '../styles/App.css';
import Header from './Header';
import Nav from './Nav';
import About from './About';
import Experience from './Experience';
import Portfolio from './Portfolio';
import Contact from './Contact';
import Footer from './Footer';

function App() {
  return (
    <>
      <Header />
      <Nav />
      <About />
      <Experience />
      <Portfolio />
      <Contact />
      <Footer />
    </>
  );
}

export default App;