import React from 'react';
import Nav from './Nav';
import Footer from './Footer';

const Employment = () => (
  <div>
    <header>
      <h1>Employment</h1>
      <p>Professional Work History</p>
    </header>
    <div className="container">
      <Nav />
      <main>
        <h2>Boston University School of Public Health</h2>
        <p><strong>Software Engineer</strong></p>
        <p>October 2024 - Present</p>
        <ul>
          <li>Developing R-Shiny web applications for TB policy management.</li>
          <li>Integrating geospatial mapping and automated data pipelines.</li>
        </ul>
        <h2>Boston Medical Center</h2>
        <p><strong>Software Engineer Intern</strong></p>
        <p>June 2024 - July 2024</p>
        <ul>
          <li>Developed a TypeScript-based dashboard for real-time analysis.</li>
          <li>Optimized data pipelines and Bayesian model calibration.</li>
        </ul>
      </main>
    </div>
    <Footer />
  </div>
);

export default Employment;