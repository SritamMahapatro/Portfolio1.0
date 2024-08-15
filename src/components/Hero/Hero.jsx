import React from 'react';
import './Hero.css';
import profilephoto from '../assests/profilephoto.jpg'
import Sritam_Mahapatro_resume_9078667838 from '../assests/Sritam_Mahapatro_resume_9078667838.pdf';
import { FaGithub } from "react-icons/fa";
import { CiLinkedin } from "react-icons/ci";

const Hero = () => {
  return (
    <div className='hero-container'>
      <div className='hero-left'>
        <img src={profilephoto} alt="Sritam Mahapatro" />
      </div>
      <div className='hero-right'>
        <div className="content">
          <h2>Web Developer</h2>
          <p>I am a passionate web developer dedicated to crafting user-friendly and visually appealing websites. With a strong foundation in front-end technologies and a keen eye for design, I strive to bring ideas to life through clean code and creative solutions. Whether it's building responsive layouts, optimizing performance, or ensuring seamless user experiences, I am committed to delivering high-quality work that meets the needs of both clients and users. Let's build something great together!</p>
        </div>
        <div className='social'>
          <a href={Sritam_Mahapatro_resume_9078667838} download>
            <button>Download Resume</button>
        </a>
        <a href="https://github.com/SritamMahapatro" className='social-link'><FaGithub /></a>
        <a href="https://www.linkedin.com/in/sritam-mahapatro-702a4721b" className='social-link'><CiLinkedin /></a>
        </div>
      </div>
    </div>
  );
}

export default Hero;