import "../styles/Testimonials.css";

import client1 from "../assets/images/Client4.jpg";
import client2 from "../assets/images/Client6.jpg";
import client3 from "../assets/images/Client5.jpg";

import { FaStar } from "react-icons/fa";

function Testimonials() {

    const testimonials = [

        {
            image: client1,
            name: "Rahul Sharma",
            role: "Home Owner",
            review:
                "RIA Interiors & Construction completed our dream home with excellent quality and timely delivery. The entire team was professional and supportive."
        },

        {
            image: client2,
            name: "Priya Nair",
            role: "Interior Client",
            review:
                "Their interior design ideas were creative and modern. The final result exceeded our expectations."
        },

        {
            image: client3,
            name: "Arun Kumar",
            role: "Business Owner",
            review:
                "We hired RIA Interiors & Construction for our office construction. The work quality, transparency and communication were outstanding."
        }

    ];

    return (

        <section className="testimonials" id="testimonials">

            <div className="container">

                <div className="section-title">

                    <h4>TESTIMONIALS</h4>

                    <h2>What Our Clients Say</h2>

                    <p>

                        Customer satisfaction is our greatest achievement.
                        Here's what our happy clients say about us.

                    </p>

                </div>

                <div className="testimonial-grid">

                    {

                        testimonials.map((client, index) => (

                            <div
                                className="testimonial-card"
                                key={index}
                            >

                                <img
                                    src={client.image}
                                    alt={client.name}
                                />

                                <div className="stars">

                                    <FaStar />
                                    <FaStar />
                                    <FaStar />
                                    <FaStar />
                                    <FaStar />

                                </div>

                                <p className="review">

                                    "{client.review}"

                                </p>

                                <h3>{client.name}</h3>

                                <span>{client.role}</span>

                            </div>

                        ))

                    }

                </div>

            </div>

        </section>

    );

}

export default Testimonials;
