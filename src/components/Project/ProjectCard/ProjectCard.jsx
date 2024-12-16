// src/components/Project/Project.jsx
import React from 'react';
import { Card, Badge, ProgressBar, Button } from 'react-bootstrap';
import './ProjectCard.css';
import { PiDotsThreeOutlineFill } from "react-icons/pi";
import { TbPointFilled } from "react-icons/tb";


const ProjectCard = ({ 
    projectName, 
    companyName, 
    status, 
    statusColor, 
    priority, 
    priorityColor, 
    teamMembers, 
    tasksDone, 
    totalTasks, 
    progressPercentage, 
    progressColor, 
    dueDate 
}) => {
    return (
        <Card className="project-card mb-3">
            <Card.Body>
                <div className="d-flex justify-content-between mb-3">
                    <div>
                        <Card.Title>{projectName}</Card.Title>
                        <Card.Subtitle className="mb-2 text-muted">{companyName}</Card.Subtitle>
                    </div>
                    <div>
                        <PiDotsThreeOutlineFill />
                    </div>
                </div>
                <div className="d-flex justify-content-between mb-3">
                    <span style={{ color: statusColor, backgroundColor:`rgba(${statusColor},0.5)`,padding:"3px 5px" }} className='status' size="sm" disabled>{status}</span>
                    <span style={{ color: priorityColor, fontWeight:600 }} size="sm"  disabled><TbPointFilled className='fs-4' style={{color:`${priorityColor}`}} />{priority}</span>
                </div>

                <div className="team-members mb-3">
                    {teamMembers.map((member, index) => (
                        <img key={index} src={member} alt={`Team Member ${index + 1}`} className="rounded-circle avatar" />
                    ))}
                    <Badge bg="secondary" className="more-members rounded-circle d-flex justify-content-center align-items-center fs-9">+{Math.max(teamMembers.length - 3, 0)}</Badge>
                </div>
                <Card.Text>
                    Task Done: {tasksDone} / {totalTasks}
                </Card.Text>
                <ProgressBar now={progressPercentage} style={{height:"5px", color:`rgb(${progressColor})`}} />
                <Card.Text className="mt-3">
                    <Badge bg="light" text="dark" className='border border-primary p-2 text-muted'>Due Date: {dueDate}</Badge>
                </Card.Text>
            </Card.Body>
        </Card>
    );
};

export default ProjectCard;
