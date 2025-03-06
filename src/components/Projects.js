import React from 'react';
import Nav from './Nav';
import Footer from './Footer';
import Calculator from '../calculator/Calculator';

const Projects = () => (
  <div>
    <header>
      <h1>Projects</h1>
      <p>Some of my projects &amp; calculator app</p>
    </header>

    <div className="container">
      <Nav />
      <main>
        <h2>Notable projects</h2>
        <ul>
          <li>Interactive Dashboard for Opioid Use Disorder Research</li>
          <li>AI-Powered 3D Educational App</li>
          <li>Bioinformatics Tool for Monolayer-uF Chip Networks</li>
        </ul>
        
        <h2>Calculator</h2>
        <Calculator />
      </main>
    </div>

    <Footer />
  </div>
);

export default Projects;