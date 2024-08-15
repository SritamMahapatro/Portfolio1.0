import React from 'react';
import './Certification.css';

const Certifications = () => {
  const certificationsData = [
    {
      title: "MEAN Training and Certification",
      description: "Value-added course at GIET University.",
      year: "2024",
    },
    {
      title: "Web Development with PHP",
      description: "Value-added course at GIET University.",
      year: "2024",
    },
    {
      title: "Microsoft Azure Certification",
      description: "Introduction to Android by Student of GIET University.",
      year: "2023",
    },
    {
      title: "C Training",
      description: "Value-added course at GIET University.",
      year: "2023",
    },
    {
      title: "Introduction to Python and Data Science",
      description: "Workshop conducted by Bit-grit.",
      year: "2023",
    },
    {
      title: "30 Days of Google Cloud Program",
      description: "Conducted by Google Developer Students Clubs, GIETU, Gunupur.",
      year: "2023",
    },
    {
      title: "Data Analytics with Power BI",
      description: "Internship for the 4th semester from Lagozon Edutech.",
      year: "2023",
    },
    {
      title: "Web Development Internship",
      description: "InternPe.",
      year: "2023",
    },
  ];

  return (
    <div className="certifications-section">
      <h2>CERTIFICATIONS</h2>
      <div className="certifications-container">
        {certificationsData.map((certification, index) => (
          <div key={index} className="certification-item">
            <h3>{certification.title}</h3>
            <p className="description">{certification.description}</p>
            <p className="year">{certification.year}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Certifications;