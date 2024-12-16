// src/components/Messages/MessageList.jsx
import React from 'react';
import MessageItem from '../MessageItem/MessageItem';
import './MessageList.css';
import profilePic from '../../../assets/images/boy pic.jpg'

const messages = [
    { id: 1, name: 'John Doe', avatar: profilePic, message: 'Hey, I need the report by tomorrow.' },
    { id: 2, name: 'Jane Smith', avatar: profilePic, message: 'Can we reschedule our meeting?' },
    { id: 3, name: 'Sam Johnson', avatar: profilePic, message: 'I have completed the task.' },
    // Add more message objects as needed
];

const MessageList = () => {
    return (
        <div className="message-list">
            <h4 className='ps-2 pt-2'>Messages</h4>
            {messages.map((msg) => (
                <MessageItem key={msg.id} name={msg.name} avatar={msg.avatar} message={msg.message} />
            ))}
        </div>
    );
};

export default MessageList;
