const ToDoModel = require("../models/toDoModel");

module.exports.getToDo = async (req, res) => {
  const toDo = await ToDoModel.find();
  res.send(toDo);
};

module.exports.saveToDo = async (req, res) => {
  const { text } = req.body; // Make sure 'text' is received from req.body

  ToDoModel.create({ text }).then((data) => {
    console.log("Added Successfully...");
    console.log(data);
    res.send(data); // Send back the created task and status 201
  });
};

module.exports.updateToDo = async (req, res) => {
  const { _id, text } = req.body;
  ToDoModel.findByIdAndUpdate(_id, { text })
    .then(() => res.send("Updated Successfully"))
    .catch((err) => {
      console.log(err);
    });
};

module.exports.deleteToDo = async (req, res) => {
  const { _id } = req.body;
  ToDoModel.findByIdAndDelete(_id)
    .then(() => res.send("Deleted Successfully"))
    .catch((err) => {
      console.log(err);
    });
};
