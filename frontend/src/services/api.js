import url from "../helper/url";

export const fetchTasks = async () => {
    const response = await fetch(`${url}/tasks`);
    const data = await response.json();
    console.log(data);
    
    return data;
};

export const addTask = async (task) => {
    const response = await fetch(`${url}/tasks`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(task)
    });
    const res = await response.json()
    return res
};

export const deleteTask = async (id) => {
    await fetch(`${url}/tasks/${id}`, { method: 'DELETE' });
};

export const updateTask = async (id, updatedData) => {
    const response = await fetch(`${url}/tasks/${id}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(updatedData)
    });
    const res = await response.json();
    return res;
};