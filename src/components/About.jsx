import "../styles/About.css";
import aboutImage from "../assets/images/about.jpg";

import {
    FaCheckCircle,
    FaBuilding,
    FaDraftingCompass,
    FaPaintRoller,
    FaHardHat,
    FaUsers,
    FaAward,
    FaHome,
    FaArrowRight
} from "react-icons/fa";

function About() {

    const scrollToServices = () => {

        const section = document.getElementById("services");

        if (section) {

            section.scrollIntoView({
                behavior: "smooth"
            });

        }

    };

    return (

        <section className="about" id="about">

            <div className="container about-container">

                {/* LEFT SIDE */}

                <div className="about-image">

                    <img
                        src={aboutImage}
                        alt="RIA Associates"
                    />

                    <div className="experience-badge">

                        <h2>7+</h2>

                        <span>
                            Years of
                            <br />
                            Experience
                        </span>

                    </div>

                </div>

                {/* RIGHT SIDE */}

                <div className="about-content">

                    <span className="section-tag">

                        ABOUT RIA ASSOCIATES

                    </span>

                    <h2>

                        Designing Modern Spaces
                        <br />
                        Building Lasting Trust

                    </h2>

                    <p>

                        RIA Associates is a trusted Architecture,
                        Interior Design and Construction company
                        committed to delivering innovative,
                        functional and high-quality spaces.

                        From concept planning to project handover,
                        we provide complete end-to-end solutions
                        with transparency, quality workmanship
                        and timely delivery.

                    </p>

                    {/* COMPANY STATS */}

                    <div className="about-stats">

                        <div className="stat-box">

                            <FaBuilding />

                            <h3>150+</h3>

                            <p>Projects Completed</p>

                        </div>

                        <div className="stat-box">

                            <FaUsers />

                            <h3>120+</h3>

                            <p>Happy Clients</p>

                        </div>

                        <div className="stat-box">

                            <FaAward />

                            <h3>25+</h3>

                            <p>Expert Team</p>

                        </div>

                        <div className="stat-box">

                            <FaHome />

                            <h3>100%</h3>

                            <p>Quality Focus</p>

                        </div>

                    </div>
                                        {/* FEATURES */}

                    <div className="about-features">

                        <div className="feature-card">

                            <FaDraftingCompass />

                            <div>

                                <h4>Architecture Design</h4>

                                <p>
                                    Creative planning with modern and
                                    functional architectural solutions.
                                </p>

                            </div>

                        </div>

                        <div className="feature-card">

                            <FaPaintRoller />

                            <div>

                                <h4>Interior Design</h4>

                                <p>
                                    Stylish interiors that combine
                                    comfort, beauty and functionality.
                                </p>

                            </div>

                        </div>

                        <div className="feature-card">

                            <FaHardHat />

                            <div>

                                <h4>Construction</h4>

                                <p>
                                    High-quality residential and
                                    commercial construction services.
                                </p>

                            </div>

                        </div>

                        <div className="feature-card">

                            <FaCheckCircle />

                            <div>

                                <h4>Complete Project Management</h4>

                                <p>
                                    From planning to handover, we manage
                                    every stage with transparency.
                                </p>

                            </div>

                        </div>

                    </div>

                    {/* WHY CHOOSE US */}

                    <div className="about-highlights">

                        <div>✔ Premium Quality Materials</div>

                        <div>✔ On-Time Project Delivery</div>

                        <div>✔ Experienced Engineers & Designers</div>

                        <div>✔ Transparent Pricing</div>

                    </div>

                    {/* BUTTON */}

                    <button
                        className="about-btn"
                        onClick={scrollToServices}
                    >

                        Explore Our Services

                        <FaArrowRight />

                    </button>

                </div>

            </div>

        </section>

    );

}

export default About;