import React from "react";
import '@fortawesome/free-regular-svg-icons'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faPhp, faReact} from '@fortawesome/free-brands-svg-icons';
import Chip from '@mui/material/Chip';
import '../assets/styles/Expertise.scss';

const labelsFirst = [
    "HTML5",
    "CSS3",
    "JavaScript",
    "React",
    "Tailwind CSS",
    "Bootstrap",
    "jQuery",
    "Responsive Design"
];

const labelsSecond = [
    "PHP",
    "Laravel",
    "MySQL",
    "REST API",
    "JSON",
    "Authentication",
    "Git",
    "GitHub",
    "Linux",
    "Nginx",
];

function Expertise() {
    return (
        <div className="container" id="expertise">
            <div className="skills-container">
                <h1>Expertise</h1>
                <div className="skills-grid">

                    <div className="skill">
                        <FontAwesomeIcon icon={faReact} size="3x"/>
                        <h3>Frontend Development</h3>
                        <p>
                            Build modern, responsive, and interactive web interfaces
                            using the latest frontend technologies while ensuring
                            compatibility across various devices.
                        </p>
                        <div className="flex-chips">
                            <span className="chip-title">Tech stack:</span>
                            {labelsFirst.map((label, index) => (
                                <Chip key={index} className='chip' label={label}/>
                            ))}
                        </div>
                    </div>

                    <div className="skill">
                        <FontAwesomeIcon icon={faPhp} size="3x"/>
                        <h3>Backend Development</h3>
                        <p>
                            Developing backend systems, REST APIs, and dynamic web applications
                            using PHP frameworks and relational databases.

                            Application deployment, and development
                            environment configuration.
                        </p>
                        <div className="flex-chips">
                            <span className="chip-title">Tech stack:</span>
                            {labelsSecond.map((label, index) => (
                                <Chip key={index} className='chip' label={label}/>
                            ))}
                        </div>
                    </div>


                </div>
            </div>
        </div>
    );
}

export default Expertise;