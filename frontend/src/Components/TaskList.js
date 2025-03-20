import React, { useState, useEffect } from 'react';
import { fetchTasks } from '../services/api';
import Task from './Task';

const TaskList = ({showForm}) => {
    const [tasks, setTasks] = useState([]);

    const loadTasks = async () => {
        const data = await fetchTasks();
        setTasks(data?.data);
    };

    useEffect(() => {
        loadTasks();
    }, [showForm]);

    return (
        <div className="mt-6 container">
            {tasks.map(task => (
                <Task key={task._id} task={task} fetchTasks={loadTasks} />
            ))}
        </div>
    );
};

export default TaskList;
