import React from "react";
import "./projects.css";
import greenKitchenImage from "./assets/green-kitchen.png"; 
import dessertMenuImage from "./assets/dessert-menu.png"; 
import portfolioImage from "./assets/portfolio.png"; 
const projects = [
  {
    title: "Portfolio",
    description: "A personal portfolio website showcasing my skills and projects.",
    github: "http://github.com/Abdodib/my_portflio",
    link: "https://my-portflio-omega.vercel.app/",
    image: portfolioImage,
    technologies: ["React", "JavaScript", "HTML/CSS"],
  },
  {
    title: "Green kitchen",
    description: "A simple food menu UI with filtering functionality.",
    github: "https://github.com/Abdodib/green-kitchen",
    link: "https://green-kitchen-theta.vercel.app/",
    image: greenKitchenImage,
    technologies: ["JavaScript", "HTML", "CSS"],
  },
  {
    title: "Dessert_menu",
    description: "A dessert menu website with interactive UI.",
    github: "https://github.com/Abdodib/Dessert_menu",
    link: "https://dessert-menu-lac.vercel.app/",
    image: dessertMenuImage,
    technologies: ["JavaScript", "HTML", "CSS"],
  },
];

const Projects = () => {
  return (
   <section className="projects-section" id="projects">
<div className="st">
  <h2>Projects</h2>
  <div className="ligne"></div>
  <h2 className="dot1" style={{}}></h2>
</div>
  <div>
    {projects.map((project, index) => (
      <div key={index} className="project-card">
        <img src={project.image} alt={project.title} className="project-image" />
        <div className="project-info">
          <div>
            <h3>{project.title}</h3>
            <div className="tech-tags">
              {project.technologies.map((tech, idx) => (
                <span key={idx}>{tech}</span>
              ))}
            </div>
            <p>{project.description}</p>
          </div>
          <div className="project-buttons">
            {project.github && (
              <a href={project.github} target="_blank" rel="noopener noreferrer" className="btn-github">
                View Github
              </a>
            )}
            {project.link && (
              <a href={project.link} target="_blank" rel="noopener noreferrer" className="btn-link">
                View project ↗
              </a>
            )}
          </div>
        </div>
      </div>
    ))}
  </div>
</section>

  );
};

export default Projects;
