// src/components/Timeline/Timeline.jsx
import React from 'react';
import { Card, ListGroup } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './TimeLine.css';
import { RiVideoLine } from "react-icons/ri";
import { PiDotsThreeOutlineFill } from 'react-icons/pi';

const Timeline = () => {
    const tasks = [
        { name: 'Create wireframe', duration: '32:54' },
        { name: 'Logo Design', duration: '30:00' },
        { name: 'Dashboard Design', duration: '30:00' },
        { name: 'Landing Page', duration: '30:00' },
      ];
      
    return (
        <Card className="timeline-card mb-3 ">
            
            <div className="d-flex justify-content-between mb-3">
            <h4 className='ps-2 mt-3'>Timeline</h4>
                        <div className='task-btn' >
                                        <PiDotsThreeOutlineFill className='mt-4 me-4' />
                        
                          </div>
                        </div>
            <ListGroup className='list-group'>
                <ListGroup.Item className='list-select'>
                    <RiVideoLine className='vid-icon'/>
                    <i className="bi bi-play-circle-fill text-primary"></i> Create wireframe <span className="float-end">32:54</span>
                </ListGroup.Item>
                <ListGroup.Item>
                <RiVideoLine/>
                    <i className="bi bi-play-circle-fill text-primary"></i> Logo Design <span className="float-end">30:00</span>
                </ListGroup.Item>
                <ListGroup.Item>
                <RiVideoLine/>
                    <i className="bi bi-play-circle-fill text-primary"></i> Dashboard Design <span className="float-end">30:00</span>
                </ListGroup.Item>
                <ListGroup.Item>
                <RiVideoLine/>
                    <i className="bi bi-play-circle-fill text-primary"></i> Landing Page <span className="float-end">30:00</span>
                </ListGroup.Item>
            </ListGroup>
        </Card>
    );
};

export default Timeline;
