const express=require('express');
const { getTodos, createTodo, deleteTodo, updateTodo } = require('../controllers/todo');
const Authenticate = require('../middleware/Authenticate');

const router=express.Router();

router.get("/todo",Authenticate,getTodos);
router.post("/todo",Authenticate,createTodo);
router.delete("/todo/:id",deleteTodo);
router.patch("/todo/:id",updateTodo);
module.exports=router;