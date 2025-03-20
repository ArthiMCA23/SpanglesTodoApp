const Task = require('../model/task');

exports.getTasks = async (req, res) => {
  try {
    const tasks = await Task.find();
    res.status(200).json({ success: true, message: 'Tasks retrieved successfully', data: tasks ,error:false});
  } catch (error) {
    res.status(500).json({ success: false, message: 'Failed to retrieve tasks', error: error.message });
  }
};

exports.createTask = async (req, res) => {
  try {
    const newTask = new Task(req.body);
    await newTask.save();
    res.status(201).json({ success: true, message: 'Task created successfully', data: newTask ,error:false });
  } catch (error) {
    res.status(400).json({ success: false, message: 'Failed to create task', error: error.message });
  }
};

exports.bulkInsertTasks = async (req, res) => {
    try {
      const tasks = await Task.insertMany(req.body.tasks);
      res.status(201).json({ success: true, message: 'Tasks inserted successfully', data: tasks ,error:false});
    } catch (error) {
      res.status(400).json({ success: false, message: 'Failed to insert tasks', error: error.message });
    }
  };
  

exports.updateTask = async (req, res) => {
  try {
    const updatedTask = await Task.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!updatedTask) {
      return res.status(404).json({ success: false, message: 'Task not found',error:false });
    }
    res.status(200).json({ success: true, message: 'Task updated successfully', data: updatedTask ,error:false});
  } catch (error) {
    res.status(400).json({ success: false, message: 'Failed to update task', error: error.message });
  }
};

exports.deleteTask = async (req, res) => {
  try {
    const deletedTask = await Task.findByIdAndDelete(req.params.id);
    if (!deletedTask) {
      return res.status(404).json({ success: false, message: 'Task not found',error:false });
    }
    res.status(200).json({ success: true, message: 'Task deleted successfully' ,error:false});
  } catch (error) {
    res.status(400).json({ success: false, message: 'Failed to delete task', error: error.message });
  }
};
