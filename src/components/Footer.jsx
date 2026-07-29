import "../styles/Footer.css";

import {
    FaPhoneAlt,
    FaEnvelope,
    FaMapMarkerAlt,
    FaFacebookF,
    FaInstagram,
    FaYoutube
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

    const email = "riainteriorscontraction@gmail.com";

    return (

        <footer className="footer">

            <div className="container footer-container">

                <div className="footer-contact">

                    <h2>Contact Us</h2>

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
                            <FaEnvelope style={{ marginRight: "10px" }} />
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
                            Chennai, Tamil Nadu
                        </a>

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
                            href="https://www.youtube.com/"
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label="YouTube"
                        >
                            <FaYoutube />
                        </a>

                    </div>

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