// src/App.js
import React from 'react';
import Home from './Home';
import './index.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import About from  './About';
import Contact from './Contact';
import ProjectsCompnents from './Projects';
 import TechSkills from './Skills';
import Example from './Example';

function App() {
  return (
    <div className="App">
      <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/techskills" element={<TechSkills/>} />
        <Route path="/mywork" element={<ProjectsCompnents/>} />
        <Route path="/e" element={<Example />} />

      </Routes>
    </Router>
    </div>
  );
}

export default App;
