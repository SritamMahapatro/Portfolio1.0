import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import AboutMe from './pages/AboutMe';
import EducationPage from './pages/Education';
import CertificationsPage from './pages/Certification';
import SkillsPage from './pages/Skills';
import ProjectsPage from './pages/Projects';
import ContactPage from './pages/Contact';
import Navbar from './components/Navbar/Navbar';
import Main from './pages/Main';
import Footer from './components/Footer/Footer';

const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/Home" element={<Home />} />
        <Route path="/about" element={<AboutMe />} />
        <Route path="/education" element={<EducationPage />} />
        <Route path="/certification" element={<CertificationsPage />} />
        <Route path="/skills" element={<SkillsPage />} />
        <Route path="/projects" element={<ProjectsPage />} />
        <Route path="/contact" element={<ContactPage />} />
      </Routes>
      <Footer />
    </Router>
  );
};

export default App;