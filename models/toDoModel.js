const mongoose = require("mongoose");

const ToDoSchema = new mongoose.Schema({
  text: {
    type: String,
    required: true, // Correct property name
  },
});

const ToDoModel = mongoose.model("Task", ToDoSchema);

module.exports = ToDoModel;
