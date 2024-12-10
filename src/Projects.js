import React from "react";
import "./Projects.css";

const projects = [
  {
    id: 1,
    title:
      "Pharmacopeia Chatbot Using Retrieval-Augmented Generation (RAG) Summer 2024",
    description:
      "Contributed to the development of the vector database of a chatbot framework that utilizes Retrieval-Augmented Generation (RAG) to extract and deliver relevant information from pharmacopeia sources.",
    projectUrl: "",
  },
  {
    id: 2,
    title: "Lang ReCaptcha",
    description:
      "Designed and implemented a custom ReCAPTCHA system to collect data for low-resource languages and authenticate user behavior, utilizing the KoBERT model for verifying user input and labeling data.",
    projectUrl: "https://github.com/Akotet08/LangCaptcha/tree/main",
  },
  {
    id: 3,
    title: "Fake Import Declaration Detection Competition",
    description:
      "Ranked 3rd out of 190+ participants in a Kaggle competition hosted by KAIST CS360 and the Korean Customs Service. Developed an advanced model ensemble and innovative data processing to detect fake import declarations",
    projectUrl: "",
  },
];

function Projects() {
  return (
    <div className="projects-container">
      <h1 className="title">My Projects</h1>
      {projects.map((project) => (
        <a
          key={project.id}
          href={project.projectUrl ? project.projectUrl : "#"}
          target="_blank"
          rel="noopener noreferrer"
          className="project-card"
        >
          <div className="project">
            <div className="project-details">
              <h2 className="project-title">{project.title}</h2>
              <p className="project-description">{project.description}</p>
            </div>
          </div>
        </a>
      ))}
    </div>
  );
}

export default Projects;
