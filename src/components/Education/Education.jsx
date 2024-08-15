import React from 'react';
import './Education.css';

const Education = () => {
  const educationData = [
    {
      degree: "B.Tech in Computer Science Engineering",
      institution: "Gandhi Institute of Engineering and Technology University, Gunupur",
      board: "",
      marks: "8.63 CGPA",
      year: "2024",
    },
    {
      degree: "+2 Science",
      institution: "St. Paul's School, Rourkela",
      board: "ISC",
      marks: "64.3%",
      year: "2020",
    },
    {
      degree: "10th",
      institution: "St. Paul's School, Rourkela",
      board: "ICSE",
      marks: "70.5%",
      year: "2018",
    },
  ];

  return (
    <div className="education-section">
      <h2>EDUCATION</h2>
      <div className="education-container">
        {educationData.map((education, index) => (
          <div key={index} className="education-item">
            <h3>{education.degree}</h3>
            <p className="institution">{education.institution}</p>
            {education.board && <p className="board">{education.board}</p>}
            <p className="marks">{education.marks}</p>
            <p className="year">{education.year}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Education;