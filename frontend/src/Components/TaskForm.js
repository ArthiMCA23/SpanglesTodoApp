import React, { useState } from 'react';
import { addTask, fetchTasks } from '../services/api';
import '../styles/TaskForm.css'; 
import { toast } from 'react-toastify';

const TaskForm = ({setShowForm}) => {
    const [form, setForm] = useState({ title: '', details: '', status: 'Pending', dueDate: '', priority: 'Medium' });

    const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

    const handleSubmit = async (e) => {
        e.preventDefault();
        const res = await addTask(form);
        toast.success(res?.message);
        setForm({ title: '', details: '', status: 'Pending', dueDate: '', priority: 'Medium' });
        setShowForm(false)
        fetchTasks();
    };

    return (
        <form onSubmit={handleSubmit} className="task-form">
            <input name="title" placeholder="Title" value={form.title} onChange={handleChange} required />
            <textarea name="details" placeholder="Details" value={form.details} onChange={handleChange} required />
            <input name="dueDate" type="date" value={form.dueDate} onChange={handleChange} />
            <select name="priority" value={form.priority} onChange={handleChange}>
                <option value="Low">Low</option>
                <option value="Medium">Medium</option>
                <option value="High">High</option>
            </select>
            <button type="submit" className="submit-btn">Add Task</button>
        </form>
    );
};

export default TaskForm;
