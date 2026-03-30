import React from "react";
import mock01 from '../assets/images/mock1.png';
import mock02 from '../assets/images/mock2.png';
import mock03 from '../assets/images/mock3.png';
import mock04 from '../assets/images/mock4.png';
import '../assets/styles/Project.scss';

function Project() {
    return (
        <div className="projects-container" id="projects">
            <h1>Projects</h1>
            <div className="projects-grid">

                <div className="project">
                    <img src={mock01} className="zoom" alt="thumbnail" width="100%"/>
                    <h2>Project Management System</h2>
                    <p>
                        A project management system for monitoring work progress,
                        project timelines, task assignments, and reporting dashboards
                        to improve team productivity.
                    </p>
                    <div className="tech-stack">
                        <span>PHP</span>
                        <span>MySQL</span>
                        <span>JavaScript</span>
                        <span>Bootstrap</span>
                        <span>jQuery</span>
                    </div>
                </div>

                <div className="project">
                    <img src={mock02} className="zoom" alt="thumbnail" width="100%"/>
                    <h2>Human Resource Management System</h2>
                    <p>
                        An HRIS application to manage employee data, attendance,
                        leave requests, overtime, and centralized attendance
                        and performance reports.
                    </p>
                    <div className="tech-stack">
                        <span>PHP</span>
                        <span>Laravel</span>
                        <span>MySQL</span>
                        <span>Ajax</span>
                        <span>Bootstrap</span>
                        <span>Tailwind</span>
                        <span>React</span>
                        <span>TypeScript</span>
                        <span>REST API</span>
                        <span>Leaflet</span>
                    </div>
                </div>

                <div className="project">
                    <img src={mock03} className="zoom" alt="thumbnail" width="100%"/>
                    <h2>Workload Management System</h2>
                    <p>
                        A workload distribution system for managing employee assignments,
                        monitoring workload, and analyzing work capacity
                        to improve operational efficiency.
                    </p>
                    <div className="tech-stack">
                        <span>PHP</span>
                        <span>MySQL</span>
                        <span>JavaScript</span>
                        <span>Bootstrap</span>
                    </div>
                </div>

                <div className="project">
                    <img src={mock04} className="zoom" alt="thumbnail" width="100%"/>
                    <h2>Medical Checkup Registration Application</h2>
                    <p>
                        A web-based medical checkup registration application for
                        participant registration, examination scheduling,
                        and managing medical checkup results.
                    </p>
                    <div className="tech-stack">
                        <span>PHP</span>
                        <span>MySQL</span>
                        <span>JavaScript</span>
                        <span>REST API</span>
                    </div>
                </div>

            </div>
        </div>
    );
}

export default Project;