// src/components/Task/AddTaskModal.jsx
import React, { useState } from 'react';
import { Modal, Button, Form } from 'react-bootstrap';
import './AddTaskModal.css';

const AddTaskModal = ({ show, onHide, onSave }) => {
    const [taskName, setTaskName] = useState('');

    const handleSave = () => {
        if (taskName) {
            onSave(taskName);
            setTaskName('');
            onHide();
        }
    };

    return (
        <Modal show={show} onHide={onHide}>
            <Modal.Header closeButton>
                <Modal.Title>Add New Task</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Form>
                    <Form.Group controlId="formTaskName">
                        <Form.Label>Task Name</Form.Label>
                        <Form.Control
                            type="text"
                            placeholder="Enter task name"
                            value={taskName}
                            onChange={(e) => setTaskName(e.target.value)}
                        />
                    </Form.Group>
                </Form>
            </Modal.Body>
            <Modal.Footer>
                <Button variant="secondary" onClick={onHide}>Close</Button>
                <Button variant="primary" onClick={handleSave}>Save Task</Button>
            </Modal.Footer>
        </Modal>
    );
};

export default AddTaskModal;
