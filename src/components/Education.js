import React from 'react';
import Nav from './Nav';
import Footer from './Footer';

const Education = () => (
  <div>
    <header>
      <h1>Education</h1>
      <p>Academic Background</p>
    </header>
    <div className="container">
      <Nav />
      <main>
        <h2>Boston University</h2>
        <p><strong>Bachelor of Arts in Computer Science</strong></p>
        <p>Minor in Mathematics &amp; Visual Arts</p>
        <p><strong>Expected Graduation:</strong> May 2025</p>
        <h3>Relevant Coursework</h3>
        <ul>
          <li>Object-Oriented Programming</li>
          <li>Data Structures &amp; Algorithms</li>
          <li>Machine Learning</li>
          <li>Web Development</li>
          <li>Operating Systems</li>
          <li>Distributed Systems</li>
        </ul>
      </main>
    </div>
    <Footer />
  </div>
);

export default Education;