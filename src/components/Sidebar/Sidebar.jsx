// src/components/Sidebar/Sidebar.jsx
import React from 'react';
import { NavLink } from 'react-router-dom';
import './Sidebar.css';
import { AiTwotoneAppstore } from "react-icons/ai";
import { BsFileCheck } from "react-icons/bs";
import { FiUsers } from "react-icons/fi";
import { LuFileCheck } from "react-icons/lu";
import { FiMessageSquare } from "react-icons/fi";
import { CiWallet } from "react-icons/ci";
import { Button } from 'react-bootstrap';

const Sidebar = () => {
    return (
        <div className="sidebar d-flex-col ">
            <h5 className="menu-item text-center fs-2 head-font">Nikhil's Code</h5>
            <ul className="sidebar-menu">
                
                    <NavLink to="/" exact className="nav-link" activeClassName="active"><li className="menu-item"><AiTwotoneAppstore className='me-2 fs-5 icon-active'/>Dashboard</li></NavLink>
                
                    <NavLink to="/project" className="nav-link" activeClassName="active"><li className="menu-item"><BsFileCheck className='me-2 fs-5'/>Project</li></NavLink>
                
                    <NavLink to="/client" className="nav-link" activeClassName="active"><li className="menu-item"><FiUsers className='me-2 fs-5'/>My Client</li></NavLink>
                
                    <NavLink to="/task" className="nav-link" activeClassName="active"><li className="menu-item"><LuFileCheck className='me-2 fs-5'/>My Task</li></NavLink>
                
                    <NavLink to="/message" className="nav-link" activeClassName="active"><li className="menu-item"><FiMessageSquare className='me-2 fs-5'/>Message</li></NavLink>
                
                    <NavLink to="/billing" className="nav-link" activeClassName="active"><li className="menu-item"><CiWallet  className='me-2 fs-5'/>My Billing</li></NavLink>
                
                
            </ul>
            <div className=" upgrade m-3">
                    <div className='mb-4'> Upgrade to PRO for more features</div>
                     <Button className='bg-white text-black w-100 upgrade-btn'>Upgrade</Button>
                </div>
        </div>
    );
};

export default Sidebar;
