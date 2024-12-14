import React from "react";
import Publications from "./Publications";
import "./About.css";

function About() {
  return (
    <div className="about-container">
      <div id="about-me" className="about-content">
        <h1 className="about-title">Biniyam Aschalew</h1>
        <div className="about-text">
          <p>
            I am an undergraduate student at KAIST, majoring in Computer Science
            with a minor in Industrial and Systems Engineering. My academic
            journey has been enriched by diverse research experiences, including
            work in areas like domain adaptation, multimodal language models,
            and graph machine learning. I’ve had the privilege of contributing
            to collaborative projects that have led to published work and
            practical applications. With a genuine curiosity for technology and
            its potential, I approach every challenge as an opportunity to
            learn, grow, and make a meaningful impact.
          </p>
          {/* <p>
            I have gained industry experience through internships in Machine
            Learning at{" "}
            <a
              href="https://www.bfactory.ai/"
              target="_blank"
              rel="noopener noreferrer"
            >
              BFactory Inc.
            </a>
          </p> */}
          <p>
            My research interests lie in Out-of-distribution learning, Transfer
            learning, domain adaptation, Representation Learning, NLP, LLM and
            AI for HealthCare. I did research on LLM and domain adaptation under
            the guidance of Professor{" "}
            <a
              href="https://sites.google.com/site/wewantsj/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Sung-Ju Lee
            </a>{" "}
             at{" "}
            <a
              href="https://nmsl.kaist.ac.kr"
              target="_blank"
              rel="noopener noreferrer"
            >
              Networking and Mobile Systems Lab
            </a>
            . Currently, I am an undergraduate researcher at{" "}
            <a
              href="https://dai.kaist.ac.kr"
              target="_blank"
              rel="noopener noreferrer"
            >
              KAIST Data AI Lab
            </a>
            , under the guidance of Professor{" "}
            <a
              href="https://jaeminyoo.github.io/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Jaemin Yoo
            </a>
            for more information please find{" "}
            <a
              href="https://drive.google.com/file/d/12fkeuSJV3-n_TWM5-yhD2Tdc27F3pMcc/view"
              target="_blank"
              rel="noopener noreferrer"
              className="nav-item"
            >
              My CV here
            </a>
          </p>
        </div>
      </div>

      {/* Publications Section */}
      <div id="publication" className="projects-section">
        <h1 className="projects-title">Publications</h1>
        <Publications />
      </div>
    </div>
  );
}

export default About;
