// src/components/Messages/MessageItem.jsx
import React from 'react';
import './MessageItem.css';

const MessageItem = ({ name, avatar, message }) => {
    return (
        <div className="message-item">
            <img src={avatar} alt={`${name}'s avatar`} className="message-avatar" />
            <div className="message-content">
                <div className="message-author">{name}</div>
                <div className="message-text">{message}</div>
            </div>
        </div>
    );
};

export default MessageItem;
