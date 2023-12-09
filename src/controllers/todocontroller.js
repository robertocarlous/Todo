const todo = require("../constant/todo")
const { v4: uuidv4 } = require("uuid");
const getTodos = (req, res) => {
  try {
    res.send(todo);
  } catch (error) {
    console.error(error);
  }
};

const createTodo = (req, res) => {
  try {
    const title = req.body.title;
    const description = req.body.description;
    const status = req.body.status;
    const todoId = uuidv4();

    const newTodo = {
      title,
      description,
      status,
      date: new Date().toISOString().split("T")[0],
      id: todoId,
    };

    todo.push(newTodo);

    res.status(201).json({ message: "Todo created successfully", todo: newTodo });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal Server Error" });
  }
};

const updateTodo = (req, res) => {
  const idToUpdate = req.params.id;
  const newTitle = req.body.title;
  const newDescription = req.body.description;
  const newStatus = req.body.status;

  const indexToUpdate = todo.findIndex((todoItem) => todoItem.id === idToUpdate);

  if (indexToUpdate !== -1) {
    todo[indexToUpdate].title = newTitle;
    todo[indexToUpdate].description = newDescription;
    todo[indexToUpdate].status = newStatus;

    res.status(200).json({
      message: "Todo updated successfully",
      todo: todo[indexToUpdate],
    });
  } else {
    res.status(404).json({ message: "Todo not found" });
  }
};

const deleteTodo = (req, res) => {
  const id = req.params.id;

  const indexToDelete = todo.findIndex((todoItem) => todoItem.id === id);
  if (indexToDelete !== -1) {
    const deletedTodo = todo.splice(indexToDelete, 1);
    res
      .status(201)
      .json({ message: "Todo deleted successfully", todo: deletedTodo });
  } else {
    res.status(404).json({ message: "Todo not found" });
  }
};

module.exports = { getTodos, createTodo, deleteTodo, updateTodo };


