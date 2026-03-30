import React from "react";
import '@fortawesome/free-regular-svg-icons'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faBriefcase} from '@fortawesome/free-solid-svg-icons';
import {VerticalTimeline, VerticalTimelineElement} from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import '../assets/styles/Timeline.scss'

function Timeline() {
    return (
        <div id="history">
            <div className="items-container">
                <h1>Career History</h1>
                <VerticalTimeline>
                    <VerticalTimelineElement
                        className="vertical-timeline-element--work"
                        contentStyle={{background: 'white', color: 'rgb(39, 40, 34)'}}
                        contentArrowStyle={{borderRight: '7px solid  white'}}
                        date="2022 - present"
                        iconStyle={{background: '#5000ca', color: 'rgb(39, 40, 34)'}}
                        icon={<FontAwesomeIcon icon={faBriefcase}/>}
                    >
                        <h3 className="vertical-timeline-element-title">Full Stack Web Development</h3>
                        <h4 className="vertical-timeline-element-subtitle">PT. Sinergi Cakra Sinatria - East
                            Jakarta</h4>
                        <p>
                            Project Management System, Human Resource Management System, Workload Management, Etc.
                        </p>
                    </VerticalTimelineElement>
                    <VerticalTimelineElement
                        className="vertical-timeline-element--work"
                        date="2021 - 2022"
                        iconStyle={{background: '#5000ca', color: 'rgb(39, 40, 34)'}}
                        icon={<FontAwesomeIcon icon={faBriefcase}/>}
                    >
                        <h3 className="vertical-timeline-element-title">Operator Assembly</h3>
                        <h4 className="vertical-timeline-element-subtitle">PT. Karya Fajar Cemerlang - Bekasi</h4>
                        <p>
                            Assembling motorcycle component products, such as fenders, muffler covers, and others.
                        </p>
                    </VerticalTimelineElement>
                    <VerticalTimelineElement
                        className="vertical-timeline-element--work"
                        date="2017 - 2019"
                        iconStyle={{background: '#5000ca', color: 'rgb(39, 40, 34)'}}
                        icon={<FontAwesomeIcon icon={faBriefcase}/>}
                    >
                        <h3 className="vertical-timeline-element-title">Operator Product</h3>
                        <h4 className="vertical-timeline-element-subtitle">PT. Suryaraya Rubberindo Industries - Bogor</h4>
                        <p>
                            Operated tire packing machines and ensured proper packaging of finished products.
                        </p>
                    </VerticalTimelineElement>
                </VerticalTimeline>
            </div>
        </div>
    );
}

export default Timeline;