// src/components/Calendar/Calendar.jsx
import React from 'react';
import './Calendar.css';
// import { IoArrowForwardCircleOutline ,IoArrowBackCircleOutline} from "react-icons/io5";
import { TfiArrowCircleLeft, TfiArrowCircleRight  } from "react-icons/tfi";



const Calendar = () => {
    const daysOfWeek = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
    const daysInMonth = new Date().getMonth() === 1 ? 28 : 30; // Current month days, simplified for example

    const renderDays = () => {
        const days = [];
        for (let i = 1; i <= daysInMonth; i++) {
            days.push(<div key={i} className={`day ${i === 21 ? 'current-day' : ''}`}>{i}</div>); // 21st as current day
        }
        return days;
    };

    return (
        <div className="calendar-container">
            <div className="d-flex justify-content-between mb-1 p-2 ps-3 pt-3">
            <h4>December 2024</h4>
            <div className='fs-4' >
                <TfiArrowCircleLeft className='ps-2 arrow-icon'/>
                <TfiArrowCircleRight className='ps-2 arrow-icon'/>

            </div>
                 </div>
            <div className="calendar-header">
                {daysOfWeek.map((day) => (
                    <div key={day} className="day-header">{day}</div>
                ))}
            </div>
            <div className="calendar-body">
                {renderDays()}
            </div>
        </div>
    );
};

export default Calendar;
