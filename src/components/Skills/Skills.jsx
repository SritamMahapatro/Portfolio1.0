import React from 'react';
import './Skills.css';

const Skills = () => {
  const skillsData = [
    'C', 'Python', 'Java', 'Data Structure', 'HTML', 'CSS', 
    'JavaScript', 'Bootstrap', 'MongoDB', 'Git', 'DBMS','ReactJs'
  ];

  return (
    <div className="technical-skills-section">
      <h2>TECHNICAL SKILLS</h2>
      <div className="skills-container">
        {skillsData.map((skill, index) => (
          <div key={index} className="skill-item">
            {skill}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Skills;