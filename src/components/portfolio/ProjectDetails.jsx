import React from 'react';
import { useParams } from 'react-router-dom';
import projects from '../projects';

const ProjectDetails = () => {
  const { id } = useParams();
  const project = projects.find(p => p.id === parseInt(id));

  return (
    <div className="project-details">
      <h2>{project.title}</h2>
      <img src={project.image} alt={project.title} />
      <p>{project.details}</p>
    </div>
  );
};

export default ProjectDetails;