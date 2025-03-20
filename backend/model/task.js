const mongoose = require('mongoose');


const taskSchema = new mongoose.Schema({
    title: { type: String, required: true },
    details: { type: String, required: true },
    status: { type: String, enum: ['Pending', 'In Progress', 'Completed'], default: 'Pending' },
    dueDate: { type: Date },
    priority: { type: String, enum: ['Low', 'Medium', 'High'], default: 'Medium' }
});

module.exports = mongoose.model('Task', taskSchema);
