import "../styles/Hero.css";
import heroImage from "../assets/images/hero.jpg";

function Hero() {

  const scrollToContact = () => {

    const contact = document.getElementById("contact");

    if (contact) {

      contact.scrollIntoView({
        behavior: "smooth"
      });

    }

  };

  const scrollToProjects = () => {

    const projects = document.getElementById("projects");

    if (projects) {

      projects.scrollIntoView({
        behavior: "smooth"
      });

    }

  };

  return (

    <section className="hero" id="home">

      <img
        src={heroImage}
        alt="RIA Associates"
        className="hero-image"
      />

      <div className="hero-overlay"></div>

      <div className="hero-content">

        <span className="hero-tag">

          ★ Trusted Architecture & Construction Company

        </span>

        <h1>

          Build Your Dream Home
          With RIA Associates

        </h1>

        <h3>

          Architecture • Interior • Construction

        </h3>

        <p>

          We deliver premium architecture,
          elegant interiors and quality construction
          services for residential and commercial
          projects. Our experienced team transforms
          your vision into reality with innovative
          designs, superior craftsmanship and
          timely project delivery.

        </p>

        <div className="hero-buttons">

          <button
            className="primary-btn"
            onClick={scrollToContact}
          >

            Get Free Consultation

          </button>

          <button
            className="secondary-btn"
            onClick={scrollToProjects}
          >

            View Projects

          </button>

        </div>

        <div className="hero-stats">
                  <div className="stat-card">

            <h2>150+</h2>

            <p>Projects Completed</p>

          </div>

          <div className="stat-card">

            <h2>10+</h2>

            <p>Years Experience</p>

          </div>

          <div className="stat-card">

            <h2>120+</h2>

            <p>Happy Clients</p>

          </div>

          <div className="stat-card">

            <h2>100%</h2>

            <p>Quality Commitment</p>

          </div>

        </div>

      </div>

    </section>

  );

}

export default Hero;