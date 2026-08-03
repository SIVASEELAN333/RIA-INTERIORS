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

                        ABOUT RIA Interiors & Construction

                    </span>

                    <h2>

                        Designing Modern Spaces
                        <br />
                        Building Lasting Trust

                    </h2>

                    <p>

                        RIA Interiors & Construction is a trusted Architecture,
                        Interior Design and Construction company
                        committed to delivering innovative,
                        functional and high-quality spaces.

                        From concept planning to project handover,
                        we provide complete end-to-end solutions
                        with transparency, quality workmanship
                        and timely delivery.

                    </p>

                    
                                     

                    {/* WHY CHOOSE US */}

                    <div className="about-highlights">

                        <div>✔ Premium Quality Materials</div>

                        <div>✔ On-Time Project Delivery</div>

                        <div>✔ Skilled Professionals</div>

                        <div>✔ Transparent Pricing</div>

                    </div>

                    

                </div>

            </div>

        </section>

    );

}

export default About;
