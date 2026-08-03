import "../styles/Contact.css";
import { useState } from "react";

import {
    FaWhatsapp,
    FaInstagram,
    FaFacebookF,
    FaMapMarkerAlt,
    FaArrowRight
} from "react-icons/fa";

function Contact() {

    const [showLocationPopup, setShowLocationPopup] = useState(false);

    const contactItems = [

        {
            title: "WhatsApp",
            subtitle: "Chat with us instantly.",
            icon: <FaWhatsapp />,
            className: "whatsapp-card",
            link: "https://wa.me/919940053350?text=Hello%20RIA%20Interiors%20%26%20Construction,%20I%20would%20like%20to%20know%20more%20about%20your%20services."
        },

        {
            title: "Instagram",
            subtitle: "View our latest projects.",
            icon: <FaInstagram />,
            className: "instagram-card",
            link: "https://www.instagram.com/ria_interiors_construction?igsh=YXpvOWcwY20zMDl5"
        },

        {
            title: "Facebook",
            subtitle: "See updates and completed works.",
            icon: <FaFacebookF />,
            className: "facebook-card",
            link: "https://www.facebook.com/share/1JLCTJvsFh/"
        },

        {
            title: "Location",
            subtitle: "Choose your office location.",
            icon: <FaMapMarkerAlt />,
            className: "location-card"
        }

    ];

    return (

        <section className="contact" id="contact">

            <div className="container">

                <div className="section-title">

                    <h4>CONTACT US</h4>

                    <h2>Let's Build Together</h2>

                    <p>
                        Get in touch with our team through any platform below.
                    </p>

                </div>

                <div className="contact-grid">

                    {contactItems.map((item, index) => (

                        <a
                            key={index}
                            href={item.title !== "Location" ? item.link : "#"}
                            target={item.title !== "Location" ? "_blank" : ""}
                            rel="noopener noreferrer"
                            className={`contact-card ${item.className}`}
                            onClick={(e) => {

                                if (item.title === "Location") {

                                    e.preventDefault();

                                    setShowLocationPopup(true);

                                }

                            }}
                        >

                            <div className="contact-icon">

                                {item.icon}

                            </div>

                            <div className="contact-content">

                                <h3>{item.title}</h3>

                                <p>{item.subtitle}</p>

                            </div>

                            <div className="contact-arrow">

                                <FaArrowRight />

                            </div>

                        </a>

                    ))}

                </div>

            </div>

            {/* Location Popup */}

            {showLocationPopup && (

                <div className="location-popup">

                    <div className="popup-box">

                        <h2>Select Office Location</h2>

                        <p>Please choose your preferred branch.</p>

                        <button

                            className="popup-btn"

                            onClick={() => {

                                window.open(
                                    "https://maps.app.goo.gl/qx6DUJFM7u4dyPhe6",
                                    "_blank"
                                );

                                setShowLocationPopup(false);

                            }}

                        >

                            📍 Chennai

                        </button>

                        <button

                            className="popup-btn"

                            onClick={() => {

                                window.open(
                                    "https://maps.app.goo.gl/AXG5MqFBVFY8tEDP7",
                                    "_blank"
                                );

                                setShowLocationPopup(false);

                            }}

                        >

                            📍 Bangalore

                        </button>

                        <button

                            className="popup-close"

                            onClick={() => setShowLocationPopup(false)}

                        >

                            Close

                        </button>

                    </div>

                </div>

            )}

        </section>

    );

}

export default Contact;