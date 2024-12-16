// src/components/Task/TaskItem.jsx
import React from 'react';
import { FaCheckCircle, FaRegCircle, FaStar, FaEdit, FaTrash } from 'react-icons/fa';
import './TaskItem.css';

const TaskItem = ({ task, onToggleComplete, onToggleImportant, onEdit, onDelete }) => {
    return (
        <div className="task-item">
            <span onClick={() => onToggleComplete(task.id)} className="task-icon">
                {task.completed ? <FaCheckCircle color="green" /> : <FaRegCircle />}
            </span>
            <span className={`task-name ${task.completed ? 'completed' : ''}`}>
                {task.task_name}
            </span>
            <div className="task-actions">
                <span
                    className={`task-star ${task.important ? 'important' : ''}`}
                    onClick={() => onToggleImportant(task.id)}
                >
                    <FaStar color={task.important ? 'gold' : 'black'} />
                </span>
                <span className="task-edit" onClick={() => onEdit(task.id)}>
                    <FaEdit />
                </span>
                <span className="task-delete" onClick={() => onDelete(task.id)}>
                    <FaTrash color='red' />
                </span>
            </div>
        </div>
    );
};

export default TaskItem;
