import React, { useState } from 'react';
import { deleteTask, updateTask } from '../services/api';
import '../styles/Task.css'; // For improved styling
import { toast } from 'react-toastify';

const Task = ({ task, fetchTasks }) => {
    const [isEditing, setIsEditing] = useState(false);
    const [updatedTask, setUpdatedTask] = useState({
        title: task.title,
        details: task.details,
        status: task.status,
        priority: task.priority,
        dueDate: task.dueDate
    });

    const handleDelete = async () => {
        try {
            const response = await deleteTask(task._id);
            toast.success(response?.message);
            fetchTasks();
        } catch (error) {
            toast.error('Failed to delete task. Please try again.');
        }
    };

    const handleUpdate = async () => {
        try {
            const response = await updateTask(task._id, updatedTask);
            toast.success(response?.message);
            setIsEditing(false);
            fetchTasks();
        } catch (error) {
            toast.error('Failed to update task. Please try again.');
        }
    };

    return (
        <div className="task-card">
            {isEditing ? (
                <div className="edit-mode">
                    <h3 style={{ textAlign: "center" }}>Update task</h3>
                    <input
                        name="title"
                        value={updatedTask.title}
                        onChange={(e) => setUpdatedTask({ ...updatedTask, title: e.target.value })}
                    />
                    <textarea
                        name="details"
                        value={updatedTask.details}
                        onChange={(e) => setUpdatedTask({ ...updatedTask, details: e.target.value })}
                    />

                    {/* Status Dropdown */}
                    <select
                        name="status"
                        value={updatedTask.status}
                        onChange={(e) => setUpdatedTask({ ...updatedTask, status: e.target.value })}
                    >
                        <option value="Pending">Pending</option>
                        <option value="In Progress">In Progress</option>
                        <option value="Completed">Completed</option>
                    </select>

                    {/* Priority Dropdown */}
                    <select
                        name="priority"
                        value={updatedTask.priority}
                        onChange={(e) => setUpdatedTask({ ...updatedTask, priority: e.target.value })}
                    >
                        <option value="Low">Low</option>
                        <option value="Medium">Medium</option>
                        <option value="High">High</option>
                    </select>

                    <input
                        name="dueDate"
                        type="date"
                        value={updatedTask.dueDate}
                        onChange={(e) => setUpdatedTask({ ...updatedTask, dueDate: e.target.value })}
                    />
                    <button className="save-btn" onClick={handleUpdate}>
                        Save
                    </button>
                </div>
            ) : (
                <div className="view-mode">
                    <div className="task-content">
                        <h2 className="task-title">{task.title}</h2>
                        <p className="task-details">{task.details}</p>
                        <div className="task-info">
                            <p><strong>Status:</strong> {task.status}</p>
                            <p><strong>Priority:</strong> {task.priority}</p>
                            <p><strong>Due Date:</strong> {task.dueDate ? new Date(task.dueDate).toLocaleDateString() : 'N/A'}</p>
                        </div>
                    </div>

                    <div className="task-actions">
                        <button className="edit-btn" onClick={() => setIsEditing(!isEditing)}>
                            {isEditing ? 'Cancel' : 'Edit'}
                        </button>
                        <button className="delete-btn" onClick={handleDelete}>
                            Delete
                        </button>
                    </div>
                </div>
            )}
        </div>
    );
};

export default Task;