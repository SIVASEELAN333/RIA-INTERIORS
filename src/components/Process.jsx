import "../styles/Process.css";

import {
    FaComments,
    FaDraftingCompass,
    FaClipboardCheck,
    FaHardHat,
    FaHome
} from "react-icons/fa";

function Process() {

    const process = [

        {
            icon: <FaComments />,
            title: "Consultation",
            description:
                "Understand customer requirements, budget and expectations."
        },

        {
            icon: <FaDraftingCompass />,
            title: "Planning & Design",
            description:
                "Prepare architectural plans, layouts and 3D concepts."
        },

        {
            icon: <FaClipboardCheck />,
            title: "Approval",
            description:
                "Finalize design, estimate and project schedule."
        },

        {
            icon: <FaHardHat />,
            title: "Construction",
            description:
                "Execute the project with quality materials and skilled professionals."
        },

        {
            icon: <FaHome />,
            title: "Project Handover",
            description:
                "Deliver the completed project on time with customer satisfaction."
        }

    ];

    return (

        <section className="process">

            <div className="container">

                <div className="section-title">

                    <h4>OUR PROCESS</h4>

                    <h2>How We Work</h2>

                    <p>

                        From consultation to project handover,
                        we follow a systematic process to ensure
                        quality, transparency and timely delivery.

                    </p>

                </div>

                <div className="process-grid">

                    {

                        process.map((item, index) => (

                            <div className="process-card" key={index}>

                                <div className="process-icon">

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

export default Process;