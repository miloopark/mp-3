import React from 'react';
import Nav from './Nav';
import Footer from './Footer';

const Achievements = () => (
  <div>
    <header>
      <h1>Achievements</h1>
      <p>Recognitions and Accomplishments</p>
    </header>
    <div className="container">
      <Nav />
      <main>
        <h2>Some Achievements of Mine:</h2>
        <ul className="achievement-list">
          <li>Scored an 1560/1600 on the SAT.</li>
          <li>Built a fully functional Mac terminal as a personal portfolio page, integrating custom art and music.</li>
          <li>Developed programs to optimize electricity distribution in Indonesia.</li>
        </ul>
      </main>
    </div>
    <Footer />
  </div>
);

export default Achievements;