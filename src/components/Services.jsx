import { useState } from "react";
import "../styles/Services.css";

import architecture from "../assets/images/architecture.jpg";
import interior from "../assets/images/interior.jpg";
import construction from "../assets/images/construction.jpg";

import {
  FaArrowRight,
  FaTimes,
  FaCheckCircle,
  FaWhatsapp,
} from "react-icons/fa";

function Services() {
  const [selectedService, setSelectedService] = useState(null);

  const whatsappNumber = "919940053350";

  const services = [
        {
      image: architecture,

      title: "Architecture Design",

      short:
        "Creative architectural planning with modern layouts and innovative designs.",

      overview:
        "We design elegant residential and commercial buildings with innovative architecture, efficient planning, sustainable concepts, and premium quality standards.",

      process: [
        "Site Visit",
        "Requirement Analysis",
        "Concept Design",
        "2D Floor Planning",
        "3D Elevation",
        "Final Approval",
      ],

      benefits: [
        "Modern Design",
        "Space Optimization",
        "Natural Lighting",
        "Budget Friendly",
        "Vastu Planning",
      ],

      whyChoose:
        "Our experienced architects combine creativity, engineering knowledge, and modern technology to deliver beautiful and functional designs.",

      faq: [
        {
          question: "Do you provide 3D Elevation?",
          answer:
            "Yes. Every project includes high-quality realistic 3D elevation.",
        },
        {
          question: "Can you modify an existing plan?",
          answer:
            "Yes. Existing plans can be redesigned according to your requirements.",
        },
      ],
    },
        {
      image: interior,

      title: "Interior Design",

      short:
        "Elegant interiors for homes, villas, apartments, and commercial spaces.",

      overview:
        "We create beautiful and functional interior spaces that combine comfort, elegance, and modern design. Our team focuses on quality materials, smart planning, and customized solutions for every client.",

      process: [
        "Client Discussion",
        "Space Planning",
        "Material Selection",
        "3D Design",
        "Execution",
        "Final Handover",
      ],

      benefits: [
        "Premium Quality",
        "Customized Designs",
        "Modern Interiors",
        "Space Optimization",
        "Affordable Pricing",
      ],

      whyChoose:
        "Our experienced designers understand your lifestyle and transform your ideas into elegant and practical interiors with premium finishes.",

      faq: [
        {
          question: "Do you provide 3D interior designs?",
          answer:
            "Yes. We provide realistic 3D interior visualization before execution.",
        },
        {
          question: "Can I customize the materials?",
          answer:
            "Yes. You can choose colors, materials, and finishes according to your budget and preferences.",
        },
      ],
    },
        {
      image: construction,

      title: "Construction",

      short:
        "Complete residential and commercial construction solutions with premium quality and timely delivery.",

      overview:
        "We provide end-to-end construction services from foundation to final handover. Our experienced engineers, skilled workforce, and quality materials ensure every project is completed safely, efficiently, and within the agreed timeline.",

      process: [
        "Project Planning",
        "Site Preparation",
        "Foundation Work",
        "Structural Construction",
        "Electrical & Plumbing",
        "Finishing & Painting",
        "Quality Inspection",
        "Project Handover",
      ],

      benefits: [
        "Quality Materials",
        "Experienced Engineers",
        "Timely Completion",
        "Transparent Pricing",
        "Safety Standards",
      ],

      whyChoose:
        "We focus on quality workmanship, transparent communication, modern construction techniques, and customer satisfaction throughout every stage of the project.",

      faq: [
        {
          question: "Do you undertake turnkey construction projects?",
          answer:
            "Yes. We manage the complete construction process from planning to final handover.",
        },
        {
          question: "Do you provide regular project updates?",
          answer:
            "Yes. We keep our clients informed with regular progress updates throughout the project.",
        },
      ],
    },
  ];
    return (
    <section className="services" id="services">
      <div className="container">

        <div className="section-title">
          <h4>OUR SERVICES</h4>

          <p>
            We provide complete architecture, interior design and construction
            solutions with modern designs, premium quality and customer
            satisfaction.
          </p>
        </div>

        <div className="services-grid">
          {services.map((service, index) => (
            <div className="service-card" key={index}>
              <img
                src={service.image}
                alt={service.title}
              />

              <div className="service-content">
                <h3>{service.title}</h3>

                <p>{service.short}</p>

                <button
                  onClick={() => setSelectedService(service)}
                >
                  Read More
                  <FaArrowRight />
                </button>
              </div>
            </div>
          ))}
        </div>

        {selectedService && (
          <div
            className="modal-overlay"
            onClick={() => setSelectedService(null)}
          >
            <div
              className="modal-content"
              onClick={(e) => e.stopPropagation()}
            >

              <div className="modal-header">

                <h2>{selectedService.title}</h2>

                <button
                  className="close-btn"
                  onClick={() => setSelectedService(null)}
                >
                  <FaTimes />
                </button>

              </div>

              <div className="modal-image">
                <img
                  src={selectedService.image}
                  alt={selectedService.title}
                />
              </div>

              <div className="modal-body">

                <div className="modal-left">
                                      <div className="overview-box">
                    <h3>Overview</h3>
                    <p>{selectedService.overview}</p>
                  </div>

                  <div className="mini-section">
                    <h3>Our Process</h3>

                    <ul>
                      {selectedService.process.map((item, i) => (
                        <li key={i}>
                          <FaCheckCircle />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                </div>

                <div className="modal-right">

                  <div className="mini-section">
                    <h3>Benefits</h3>

                    <ul>
                      {selectedService.benefits.map((item, i) => (
                        <li key={i}>
                          <FaCheckCircle />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="why-choose">
                    <h3>Why Choose RIA Associates?</h3>

                    <p>{selectedService.whyChoose}</p>
                  </div>

                  <div className="faq">
                    <h3>Frequently Asked Questions</h3>

                    {selectedService.faq.map((faq, i) => (
                      <div
                        className="faq-item"
                        key={i}
                      >
                        <strong>{faq.question}</strong>
                        <p>{faq.answer}</p>
                      </div>
                    ))}
                  </div>

                </div>

              
              </div>
                            <div className="modal-buttons">
                <a
                  href={`https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
                    `Hello RIA Associates, I would like to know more about ${selectedService.title}.`
                  )}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="whatsapp-btn"
                >
                  <FaWhatsapp />
                  Chat on WhatsApp
                </a>

                <button
                  className="close-modal-btn"
                  onClick={() => setSelectedService(null)}
                >
                  Close
                </button>
              </div>

            </div>
          </div>
        )}

      </div>
    </section>
  );
}

export default Services;
