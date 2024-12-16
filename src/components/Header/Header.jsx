// src/components/Header/Header.jsx
import React from 'react';
import './Header.css';
import { Navbar, Form, FormControl, Button, Container, Dropdown, InputGroup } from 'react-bootstrap';
import { FaSearch, FaRegBell, FaCaretDown } from 'react-icons/fa';
import profilePic from '../../assets/images/boy pic.jpg'
import { CiSquareChevDown } from "react-icons/ci";

const Header = () => {
    return (
        <Container fluid className="header">
            <div className="header-left d-flex">
                <span className="project-name">Dashboard</span>
                <Form>
                    <InputGroup>
                        <InputGroup.Text id="search-icon" className='ms-4 search-icon'><FaSearch /></InputGroup.Text>
                        <FormControl
                            type="search"
                            placeholder="Search"                       
                            aria-label="Search"
                            className='search-icon'
                        />
                        
                    </InputGroup>
                </Form>           
            </div>
            <div className="header-right">
            <div className="d-flex align-items-center ">
                    <FaRegBell  className="bell-icon" />
                    <div className="user-profile d-flex align-items-center ms-3 profile-area">
                        <img
                            src={profilePic}
                            alt="User Profile"
                            height={50}
                            width={50}
                            className="rounded-circle profile-image ms-2 me-3"
                        />
                        <div className="user-info ms-2 me-3">
                            <div className="user-name text-bold">John Doe</div>
                            <div className="user-role">Admin</div>
                        </div>
                        <CiSquareChevDown  className="dropdown-icon ms-2 fs-4" />
                    </div>
                </div>
            </div>
        </Container>
    );
};

export default Header;
