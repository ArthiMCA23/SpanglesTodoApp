import url from "../helper/url";

export const fetchTasks = async () => {
    try {
        const response = await fetch(`${url}/tasks`);
        if (!response.ok) {
            throw new Error('Failed to fetch tasks');
        }
        const data = await response.json();
        console.log(data);
        return data;
    } catch (error) {
        console.error('Error fetching tasks:', error.message);
        throw error; 
    }
};

export const addTask = async (task) => {
    try {
        const response = await fetch(`${url}/tasks`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(task)
        });
        if (!response.ok) {
            throw new Error('Failed to add task');
        }
        const res = await response.json();
        return res;
    } catch (error) {
        console.error('Error adding task:', error.message);
        throw error;
    }
};

export const deleteTask = async (id) => {
    try {
        const response = await fetch(`${url}/tasks/${id}`, { method: 'DELETE' });
        if (!response.ok) {
            throw new Error('Failed to delete task');
        }
    } catch (error) {
        console.error('Error deleting task:', error.message);
        throw error;
    }
};

export const updateTask = async (id, updatedData) => {
    try {
        const response = await fetch(`${url}/tasks/${id}`, {
            method: 'PUT',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(updatedData)
        });
        if (!response.ok) {
            throw new Error('Failed to update task');
        }
        const res = await response.json();
        return res;
    } catch (error) {
        console.error('Error updating task:', error.message);
        throw error;
    }
};
