import "../styles/Testimonials.css";

import client1 from "../assets/images/Client4.jpg";
import client2 from "../assets/images/Client6.jpg";
import client3 from "../assets/images/Client5.jpg";

import { FaStar } from "react-icons/fa";

function Testimonials() {

    const testimonials = [

        {
            image: client1,
            name: "Ranjith",
            role: "Home Owner",
            review:
                "Superb very friendly team they gave us more than 3, 4 designs many modifications was done on our taste."
        },

        {
            image: client2,
            name: "Soumita Goswami",
            role: "Interior Client",
            review:
                "Excellence is the Word for this team. Simply love their work. Thanks."
        },

        {
            image: client3,
            name: "Arun Kumar",
            role: "Business Owner",
            review:
                "Nice Designing we gave our building design to Ar. Vijay on time delivery and so modifications was done until we felt satisfied thank you so much vijay and team"
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
