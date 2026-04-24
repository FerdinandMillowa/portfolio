import React from 'react';
import './styles/globals.css';

import Navbar     from './components/Navbar';
import Footer     from './components/Footer';
import Hero       from './sections/Hero';
import About      from './sections/About';
import Skills     from './sections/Skills';
import Experience from './sections/Experience';
import Projects   from './sections/Projects';
import Contact    from './sections/Contact';

function Divider() {
  return <div className="divider" />;
}

export default function App() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Divider />
        <About />
        <Divider />
        <Skills />
        <Divider />
        <Experience />
        <Divider />
        <Projects />
        <Divider />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
