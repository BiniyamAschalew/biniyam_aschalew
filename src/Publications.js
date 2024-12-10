import React from "react";
import "./Publications.css";

const publications = [
  {
    id: 1,
    title:
      "Grounding Multimodal Large Language Models with Sensor Data via Visual Prompting",
    description:
      "Enhanced the use of LLMs for diverse sensory tasks by introducing visual prompting. Key contributions included designing research methodologies, developing sensory data processing pipelines, and investigating prompting methodologies for mitigating the effect of sequence length. This project led to a publication at EMNLP ’24",
    projectUrl: "https://arxiv.org/abs/2407.10385",
  },
  {
    id: 2,
    title:
      "Adapting Pre-Trained Sensing Models to End-Users via Self-Supervision Replay",
    description:
      "Contributed to research on a self-supervised meta-learning approach for cross-domain and user adaptability. Implemented state-of-the-art self-supervised baselines, conducted experiments, and performed a literature review.",
    projectUrl:
      "https://github.com/lwamzeche/Roommate_Matching?tab=readme-ov-file",
  },
  {
    id: 3,
    title: "Leveraging Synthetic Data for Data-Free Knowledge Distillation",
    description:
      "Improved zero-shot knowledge distillation performance through synthetic data generation. Responsibilities included conducting literature reviews, implementing methodologies and baselines, and designing the experimental pipeline.",
    projectUrl: "",
  },
];

function Publications() {
  return (
    <div className="publication-container">
      {publications.map((publication) => (
        <a
          key={publication.id}
          href={publication.projectUrl ? publication.projectUrl : "#"}
          target="_blank"
          rel="noopener noreferrer"
          className="project-card"
        >
          <div className="project">
            <div className="project-details">
              <h2 className="project-title">{publication.title}</h2>
              <p className="project-description">{publication.description}</p>
            </div>
          </div>
        </a>
      ))}
    </div>
  );
}

export default Publications;
