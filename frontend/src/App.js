import React, { useState } from 'react';
import { IoClose } from 'react-icons/io5';
import { Button, Modal } from 'react-bootstrap';
import Header from './Components/Header';
import TaskList from './Components/TaskList';
import TaskForm from './Components/TaskForm';
import './App.css'

const App = () => {
    const [showForm, setShowForm] = useState(false);
    

    return (
        <div className="">
            <Header />
            <div className="add-task-btn">
                <Button 
                    variant="success"
                    className="mb-4"
                    onClick={() => setShowForm(true)}
                >
                    Add Task
                </Button>
            </div>
            <TaskList showForm={showForm}/>

            <Modal show={showForm} onHide={() => setShowForm(false)} centered>
                <Modal.Header closeButton>
                    <Modal.Title>Add Task</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <TaskForm setShowForm={setShowForm}/>
                </Modal.Body>
            </Modal>
        </div>
    );
};

export default App;
