import React from 'react';
import ProjectCard from './ProjectCard/ProjectCard';
import profilePic from '../../assets/images/boy pic.jpg';

const teamMembers = [
    profilePic,
    profilePic,
    profilePic,
    profilePic,
    profilePic
];

const Project = () => {
    return (
        <div className="project-card mb-3">
            <ProjectCard
                projectName="Project Name"
                companyName="Company Name"
                status="In Progress"
                statusColor="(100 115 255)"
                priority="High Priority"
                priorityColor="red"
                teamMembers={teamMembers}
                tasksDone={35}
                totalTasks={50}
                progressPercentage={70}
                progressColor="100 115 255"
                dueDate="25 August"
            />
            <ProjectCard
                projectName="Project Name"
                companyName="Company Name"
                status="In Progress"
                statusColor="primary"
                priority="High Priority"
                priorityColor="green"
                teamMembers={teamMembers}
                tasksDone={35}
                totalTasks={50}
                progressPercentage={70}
                progressColor="success"
                dueDate="25 August"
            />
        </div>
    );
};
export default Project;

