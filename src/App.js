import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import Education from './components/Education';
import Employment from './components/Employment';
import Achievements from './components/Achievements';
import Projects from './components/Projects';
import References from './components/References';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/education" element={<Education />} />
      <Route path="/employment" element={<Employment />} />
      <Route path="/achievements" element={<Achievements />} />
      <Route path="/projects" element={<Projects />} />
      <Route path="/references" element={<References />} />
    </Routes>
  );
}

export default App;