import "../styles/Gallery.css";

import gallery1 from "../assets/images/gallery1.jpg";
import gallery2 from "../assets/images/gallery2.jpg";
import gallery3 from "../assets/images/gallery3.jpg";
import gallery4 from "../assets/images/gallery4.jpg";
import gallery5 from "../assets/images/gallery5.jpg";
import gallery6 from "../assets/images/gallery6.jpg";

import { FaSearchPlus } from "react-icons/fa";

function Gallery() {

    const images = [
        gallery1,
        gallery2,
        gallery3,
        gallery4,
        gallery5,
        gallery6
    ];

    return (

        <section className="gallery" id="gallery">

            <div className="container">

                <div className="section-title">

                    <h4>PROJECT GALLERY</h4>

                    <h2>Our Recent Works</h2>

                    <p>

                        Explore some of our completed architecture,
                        interior and construction projects.

                    </p>

                </div>

                <div className="gallery-grid">

                    {

                        images.map((image, index) => (

                            <div
                                className="gallery-card"
                                key={index}
                            >

                                <img
                                    src={image}
                                    alt={`Gallery ${index + 1}`}
                                />

                                <div className="gallery-overlay">

                                    <FaSearchPlus />

                                </div>

                            </div>

                        ))

                    }

                </div>

            </div>

        </section>

    );

}

export default Gallery;