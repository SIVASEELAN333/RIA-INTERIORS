import "../styles/WhyChooseUs.css";

import {
    FaAward,
    FaHardHat,
    FaClock,
    FaHandshake,
    FaTools,
    FaHome
} from "react-icons/fa";

function WhyChooseUs() {

    const features = [

        {
            icon: <FaAward />,
            title: "7+ Years Experience",
            description:
                "Experienced professionals delivering quality construction and design services."
        },

        {
            icon: <FaHardHat />,
            title: "Expert Engineers",
            description:
                "Skilled architects, engineers and interior designers for every project."
        },

        {
            icon: <FaClock />,
            title: "On-Time Delivery",
            description:
                "Projects completed within the committed schedule without compromising quality."
        },

        {
            icon: <FaHandshake />,
            title: "Transparent Pricing",
            description:
                "Clear quotations with no hidden charges throughout the project."
        },

        {
            icon: <FaTools />,
            title: "Quality Materials",
            description:
                "We use premium quality materials to ensure durability and long-lasting results."
        },

        {
            icon: <FaHome />,
            title: "Complete Solutions",
            description:
                "Architecture, interior design and construction under one roof."
        }

    ];

    return (

        <section className="why" id="why">

            <div className="container">

                <div className="section-title">

                    <h4>WHY CHOOSE US</h4>

                    <h2>Why Clients Trust RIA Associates</h2>

                    <p>

                        We combine creativity, engineering expertise and
                        quality workmanship to build beautiful and durable spaces.

                    </p>

                </div>

                <div className="why-grid">

                    {
                        features.map((item, index) => (

                            <div className="why-card" key={index}>

                                <div className="why-icon">
                                    {item.icon}
                                </div>

                                <h3>{item.title}</h3>

                                <p>{item.description}</p>

                            </div>

                        ))
                    }

                </div>

            </div>

        </section>

    );

}

export default WhyChooseUs;