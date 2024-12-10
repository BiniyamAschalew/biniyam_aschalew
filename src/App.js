import React, { useState, useEffect } from "react";
import {
  Link,
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
  useLocation,
} from "react-router-dom";
import About from "./About";
import Projects from "./Projects";
import "./App.css";
import BiniImage from "./images/Bini.jpeg";

function Sidebar({ activeSection }) {
  return (
    <div className="sidebar">
      <img src={BiniImage} alt="Biniyam" className="profile-image" />
      <nav className="navigation">
        <Link
          to="/about#about-me"
          className={`nav-item ${activeSection === "about-me" ? "active" : ""}`}
        >
          About me
        </Link>
        <Link
          to="/about#publication"
          className={`nav-item ${
            activeSection === "publication" ? "active" : ""
          }`}
        >
          Publications
        </Link>
        <Link
          to="/projects"
          className={`nav-item ${activeSection === "projects" ? "active" : ""}`}
        >
          Projects
        </Link>
        <a href="mailto:binasc@kaist.ac.kr" className="nav-item">
          Email
        </a>
        <a
          href="https://drive.google.com/file/d/12fkeuSJV3-n_TWM5-yhD2Tdc27F3pMcc/view"
          target="_blank"
          rel="noopener noreferrer"
          className="nav-item"
        >
          CV
        </a>
        <a
          href="https://www.linkedin.com/in/biniyamaschalew/"
          target="_blank"
          rel="noopener noreferrer"
          className="nav-item"
        >
          Linkedin
        </a>
      </nav>
    </div>
  );
}

function ScrollToSection() {
  const location = useLocation();

  useEffect(() => {
    if (location.hash) {
      const element = document.getElementById(location.hash.substring(1));
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }
  }, [location]);

  return null;
}

function AppContent() {
  const [activeSection, setActiveSection] = useState("about-me");
  const location = useLocation();

  useEffect(() => {
    const updateActiveSectionBasedOnRoute = () => {
      if (location.pathname === "/projects") {
        setActiveSection("projects");
      } else if (location.pathname === "/about") {
        const hash = location.hash || "#about-me";
        setActiveSection(hash.substring(1));
      }
    };

    updateActiveSectionBasedOnRoute();
  }, [location]);

  useEffect(() => {
    const handleScroll = () => {
      if (location.pathname === "/about") {
        const aboutMe = document.getElementById("about-me");
        const publications = document.getElementById("publication");

        if (aboutMe && publications) {
          const aboutMeTop = aboutMe.getBoundingClientRect().top;
          const publicationsTop = publications.getBoundingClientRect().top;

          if (publicationsTop <= window.innerHeight / 2) {
            setActiveSection("publication");
          } else if (aboutMeTop <= window.innerHeight / 2) {
            setActiveSection("about-me");
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [location.pathname]);

  return (
    <>
      <ScrollToSection />
      <Sidebar activeSection={activeSection} />
      <div className="main-content">
        <Routes>
          <Route path="/" element={<Navigate to="/about" replace />} />
          <Route path="/about" element={<About />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="*" element={<Navigate to="/about" replace />} />
        </Routes>
      </div>
    </>
  );
}

function App() {
  return (
    <Router>
      <div className="App">
        <AppContent />
      </div>
    </Router>
  );
}

export default App;
