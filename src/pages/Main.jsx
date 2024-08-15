import React from 'react'
// import Navbar from '../components/Navbar/Navbar'
import Hero from '../components/Hero/Hero'
import About from '../components/About/About'
import Education from '../components/Education/Education'
import Certifications from '../components/Certification/Certification'
import Skills from '../components/Skills/Skills'
import Projects from '../components/Projects/Projects'
import Contact from '../components/Contact/Contact'
import Footer from '../components/Footer/Footer'

const Main = () => {
  return (
    <div>
      <Hero />
      <About />
      <Education />
      <Certifications />
      <Skills />
      <Projects />
      <Contact/>
      <Footer />
    </div>
  )
}

export default Main