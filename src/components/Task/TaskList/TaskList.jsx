// src/components/Task/TaskList.jsx
import React, { useEffect, useState } from 'react';
import TaskItem from '../TaskItem/TaskItem';
import AddTaskModal from '../TaskModal/AddTaskModal';
import './TaskList.css';
import { PiDotsThreeOutlineFill } from "react-icons/pi";
import { createTask, updateTask, deleteTask, fetchTasks } from '../../../services/api';

// const initialTasks = [
//     { id: 1, task_name: 'My Task 1', completed: false, important: false },
//     { id: 2, task_name: 'My Task 2', completed: true, important: true },
//     // Add more tasks as needed
// ];

const TaskList = () => {
    const [tasks, setTasks] = useState([]);
    const [showModal, setShowModal] = useState(false);

    const handleCreateTask = async (taskName) => {
        try {
            const response = await createTask({ uid: 1, task_name: taskName });
            setTasks([...tasks, response.data]);
        } catch (error) {
            console.error(error);
        }
    };

    const handleUpdateTask = async (id, updates) => {
        try {
            const response = await updateTask(id, updates);
            setTasks(tasks.map(task => (task.id === id ? response.data : task)));
        } catch (error) {
            console.error(error);
        }
    };

    const handleDeleteTask = async (id) => {
        try {
            await deleteTask(id);
            setTasks(tasks.filter(task => task.id !== id));
        } catch (error) {
            console.error(error);
        }
    };

    const loadTasks = async () => {
        try {
            const response = await fetchTasks();
            setTasks(response.data);
        } catch (error) {
            console.error(error);
        }
    };

    useEffect(() => {
        loadTasks(); // Fetch initial tasks from API
    }, []);

    return (
        <div className="task-list">
            <div className="d-flex justify-content-between mb-3">
            <h4>My Tasks</h4>
            <div className='task-btn' onClick={() => setShowModal(true)}>
                            <PiDotsThreeOutlineFill />
            
              </div>
            </div>
            {tasks.length > 0 ? (
            tasks.map(task => (
                <TaskItem
                    key={task.id}
                    task={task}
                    onToggleComplete={(id) => handleUpdateTask(id, { completed: !task.completed })}
                    onToggleImportant={(id) => handleUpdateTask(id, { important: !task.important })}
                    onEdit={(id) => {
                        const newTaskName = prompt('Edit task name:', task.task_name);
                        if (newTaskName) {
                            handleUpdateTask(id, { task_name: newTaskName });
                        }
                    }}
                    onDelete={handleDeleteTask}
                />
            ))
            ) : (
                <p>No Task Available</p>
            )}

            <AddTaskModal show={showModal} onHide={() => setShowModal(false)} onSave={handleCreateTask} />
        </div>
    );
};

export default TaskList;
