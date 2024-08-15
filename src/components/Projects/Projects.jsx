import React, { useEffect, useState } from 'react';
import './Projects.css';

const Projects = () => {
  const [Projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const response = await fetch('https://api.github.com/users/SritamMahapatro/repos');

        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const data = await response.json();
        setProjects(data);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchProjects();
  }, []);

  if (loading) {
    return <div className="loading">Loading projects...</div>;
  }

  if (error) {
    return <div className="error">Error: {error}</div>;
  }

  return (
    <div className="projects-section">
      <h2>PROJECTS</h2>
      <div className="projects-container">
        {Projects.length === 0 ? (
          <p>No projects available.</p>
        ) : (
          Projects.map((Project) => (
            <div key={Project.id} className="project-card">
              <h3>{Project.name}</h3>
              <p>{Project.description || 'No description available'}</p>
              <a href={Project.html_url} target="_blank" rel="noopener noreferrer" className="project-link">
                View Project
              </a>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default Projects;