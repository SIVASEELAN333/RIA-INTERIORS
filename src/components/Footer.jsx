import "../styles/Footer.css";

import {
    FaFacebookF,
    FaInstagram,
    FaLinkedinIn,
    FaYoutube,
    FaPhoneAlt,
    FaEnvelope,
    FaMapMarkerAlt
} from "react-icons/fa";

function Footer() {

    const whatsappLink =
        "https://wa.me/919940053350?text=Hello%20RIA%20Associates,%20I%20am%20interested%20in%20your%20services.";

    const instagramLink =
        "https://www.instagram.com/ria_interiors_construction?igsh=YXpvOWcwY20zMDl5";

    const facebookLink =
        "https://www.facebook.com/share/1JLCTJvsFh/";

    const locationLink =
        "https://maps.app.goo.gl/5vU4ox44uXycasHt7?g_st=aw";

    const email = "riaassociatescontact@gmail.com";

    return (

        <footer className="footer">

            <div className="container footer-container">

                {/* Company Details */}

                <div className="footer-about">

                    <h2>RIA Associates</h2>

                    <p>
                        RIA Associates is a trusted Architecture,
                        Interior Design and Construction company delivering
                        quality residential and commercial projects with
                        innovative designs, premium workmanship and
                        customer satisfaction.
                    </p>

                    <div className="social-icons">

                        <a
                            href={facebookLink}
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label="Facebook"
                        >
                            <FaFacebookF />
                        </a>

                        <a
                            href={instagramLink}
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label="Instagram"
                        >
                            <FaInstagram />
                        </a>

                        <a
                            href={whatsappLink}
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label="WhatsApp"
                        >
                            <FaPhoneAlt />
                        </a>

                        <a
                            href="https://www.youtube.com/"
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label="YouTube"
                        >
                            <FaYoutube />
                        </a>

                    </div>

                </div>

                {/* Quick Links */}

                <div className="footer-links">

                    <h3>Quick Links</h3>

                    <ul>

                        <li><a href="#home">Home</a></li>

                        <li><a href="#about">About</a></li>

                        <li><a href="#services">Services</a></li>

                        <li><a href="#projects">Projects</a></li>

                        <li><a href="#gallery">Gallery</a></li>

                        <li><a href="#testimonials">Testimonials</a></li>

                        <li><a href="#contact">Contact</a></li>

                    </ul>

                </div>

                {/* Services */}

                <div className="footer-services">

                    <h3>Our Services</h3>

                    <ul>

                        <li>Architecture Design</li>

                        <li>Interior Design</li>

                        <li>Construction</li>

                        <li>Renovation</li>

                        <li>Project Planning</li>

                    </ul>

                </div>

                {/* Contact */}

                <div className="footer-contact">

                    <h3>Contact Info</h3>

                    <p>

                        <a
                            href={whatsappLink}
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <FaPhoneAlt style={{ marginRight: "10px" }} />
                             +91 99400 53350
                        </a>

                    </p>

                    <p>
    <a
        href={`mailto:${email}`}
        className="footer-contact-link"
    >
        <FaEnvelope className="footer-contact-icon" />
        <span>{email}</span>
    </a>
</p>

                    <p>

                        <a
                            href={locationLink}
                            target="_blank"
                            rel="noopener noreferrer"
                        >

                            <FaMapMarkerAlt style={{ marginRight: "10px" }} />
                            View Our Office Location

                        </a>

                    </p>

                </div>

            </div>

            <div className="footer-bottom">

                <p>

                    © {new Date().getFullYear()} RIA Associates. All Rights Reserved.

                </p>

            </div>

        </footer>

    );

}

export default Footer;