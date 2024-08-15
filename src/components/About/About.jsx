import React from 'react';
import greenThemeboy from '../assests/greenThemeboy.svg';
import './About.css';

const About = () => {
  return (
    <div className='about'>
      <div className='about-description'>
        <h1>WHO AM I</h1>
        <p>
          My name is Sritam Mahapatro, a motivated fresher eager to start my career with your esteemed organization. I am enthusiastic about utilizing my skills to contribute to the organization's growth while continuously learning and developing my capabilities. I kindly request the opportunity to join your team, where I can further develop my skills and contribute to your organization's success.
        </p>
      </div>
      <div className='about-img'>
        <img src={greenThemeboy} alt="Green Theme Boy" />
      </div>
    </div>
  );
}

export default About;