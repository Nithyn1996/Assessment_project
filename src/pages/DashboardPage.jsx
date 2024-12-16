// src/pages/DashboardPage.jsx
import React from 'react';
import Header from '../components/Header/Header';
import TaskList from '../components/Task/TaskList/TaskList';
import Calendar from '../components/Calendar/Calendar';
import MessageList from '../components/Messages/MessageList/MessageList';
import Project from '../components/Project/Project';
import { Col, Container, Row } from 'react-bootstrap';
import Timeline from '../components/TimeLine/TimeLine';
import "./pages.css"

const DashboardPage = () => {
    return (
        <div className="dashboard-page">
            <Header />
            <div className="content">
                <div className="row">
                        <div className="col-sm-12 col-md-4 col-items"> 
                            <div className=""> 
                                <Project /> 
                            </div> 
                        </div>
                        <div className="col-sm-12 col-md-4 col-items">
                            <div className="mb-4 ">
                                <TaskList />
                            </div>
                            <Timeline />
                        </div>
                        <div className="col-sm-12 col-md-4 col-items">
                            <Calendar />
                            <div className="mt-4">
                                <MessageList />
                            </div>
                    </div>
                </div>
                {/* <div className="row mt-4">
                    <div className="col-12">
                        <MessageList />
                    </div>
                </div> */}

            </div>
        </div>
    );
};

export default DashboardPage;
