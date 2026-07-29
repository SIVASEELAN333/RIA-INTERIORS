import "../styles/Contact.css";

import {
    FaWhatsapp,
    FaInstagram,
    FaFacebookF,
    FaMapMarkerAlt,
    FaArrowRight
} from "react-icons/fa";

function Contact() {

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
            subtitle: "Open our office in Google Maps.",
            icon: <FaMapMarkerAlt />,
            className: "location-card",
            link: "https://maps.app.goo.gl/5vU4ox44uXycasHt7?g_st=aw"
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
                            href={item.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className={`contact-card ${item.className}`}
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

        </section>

    );

}

export default Contact;