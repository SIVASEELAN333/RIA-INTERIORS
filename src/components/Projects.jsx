import { useState } from "react";
import "../styles/Projects.css";

import project1 from "../assets/images/project1.jpg";
import project2 from "../assets/images/project2.jpg";
import project3 from "../assets/images/project3.jpg";
import project4 from "../assets/images/project4.jpg";
import project5 from "../assets/images/project5.jpg";
import project6 from "../assets/images/project6.jpg";

import {
  FaMapMarkerAlt,
  FaArrowRight,
  FaTimes,
  FaCheckCircle,
} from "react-icons/fa";

function Projects() {

  const [selectedProject, setSelectedProject] = useState(null);

  const projects = [

    {
      image: project1,

      title: "Luxury Villa",

      location: "Bangalore",

      category: "Residential",

      description:
        "A premium luxury villa designed with modern architecture, spacious rooms, elegant interiors, landscaped gardens and premium quality construction.",

      features: [
        "Modern Architecture",
        "Premium Materials",
        "Landscape Garden",
        "Smart Home Design"
      ]
    },

    {
      image: project2,

      title: "Modern Living Room",

      location: "Chennai",

      category: "Interior",

      description:
        "A stylish living room designed with elegant furniture, modern lighting and premium interior finishes.",

      features: [
        "Luxury Sofa",
        "LED Ceiling",
        "Wooden Flooring",
        "Premium Finish"
      ]
    },

    {
      image: project3,

      title: "Modular Kitchen",

      location: "Bangalore",

      category: "Interior",

      description:
        "A modern modular kitchen with smart storage, elegant cabinets and premium quality materials.",

      features: [
        "Modular Cabinets",
        "Granite Countertop",
        "Smart Storage",
        "Premium Accessories"
      ]
    },

    {
      image: project4,

      title: "Commercial Building",

      location: "Bangalore",

      category: "Commercial",

      description:
        "A multi-storey commercial building designed with modern elevation and high-quality construction standards.",

      features: [
        "Modern Elevation",
        "Parking Area",
        "Lift Facility",
        "Safety Standards"
      ]
    },

    {
      image: project5,

      title: "Premium Apartment",

      location: "Chennai",

      category: "Construction",

      description:
        "A premium apartment project with spacious layouts, quality construction and modern amenities.",

      features: [
        "Premium Finish",
        "24x7 Security",
        "Power Backup",
        "Children Park"
      ]
    },

    {
      image: project6,

      title: "Corporate Office",

      location: "Chennai",

      category: "Office Interior",

      description:
        "A modern corporate office with stylish workspaces, conference rooms and premium interiors.",

      features: [
        "Conference Hall",
        "Work Stations",
        "Reception Area",
        "Modern Lighting"
      ]
    }

  ];
    return (

    <section className="projects" id="projects">

      <div className="container">

        <div className="section-title">

          <h4>OUR PROJECTS</h4>

          <h2>Featured Projects</h2>

          <p>
            We have successfully delivered residential,
            commercial and interior projects with quality
            workmanship and customer satisfaction.
          </p>

        </div>

        <div className="projects-grid">

          {projects.map((project, index) => (

            <div
              className="project-card"
              key={index}
            >

              <img
                src={project.image}
                alt={project.title}
              />

              <div className="project-content">

                <span className="category">

                  {project.category}

                </span>

                <h3>

                  {project.title}

                </h3>

                <p className="location">

                  <FaMapMarkerAlt />

                  {project.location}

                </p>

                <button
                  className="view-btn"
                  onClick={() => setSelectedProject(project)}
                >

                  View Project

                  <FaArrowRight />

                </button>

              </div>

            </div>

          ))}

        </div>

        {selectedProject && (

          <div
            className="project-modal-overlay"
            onClick={() => setSelectedProject(null)}
          >

            <div
              className="project-modal"
              onClick={(e) => e.stopPropagation()}
            >

              <div className="project-modal-header">

                <h2>

                  {selectedProject.title}

                </h2>

                <button
                  className="close-btn"
                  onClick={() => setSelectedProject(null)}
                >

                  <FaTimes />

                </button>

              </div>

              <img
                className="project-modal-image"
                src={selectedProject.image}
                alt={selectedProject.title}
              />

              <div className="project-modal-body">
                                <div className="project-info">

                  <p>

                    <strong>Category :</strong>

                    {selectedProject.category}

                  </p>

                  <p>

                    <strong>Location :</strong>

                    {selectedProject.location}

                  </p>

                  <h3>Project Overview</h3>

                  <p>

                    {selectedProject.description}

                  </p>

                  <h3>Project Features</h3>

                  <ul className="feature-list">

                    {selectedProject.features.map((feature, index) => (

                      <li key={index}>

                        <FaCheckCircle />

                        <span>{feature}</span>

                      </li>

                    ))}

                  </ul>

                  <button
                    className="close-project-btn"
                    onClick={() => setSelectedProject(null)}
                  >

                    Close Project

                  </button>

                </div>

              </div>

            </div>

          </div>

        )}

      </div>

    </section>

  );

}

export default Projects;