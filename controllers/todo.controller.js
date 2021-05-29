const db = require("../models");
const Todo = db.todo;
const Op = db.Sequelize.Op;

// Create and save new Todo
exports.create = (req,res)=>{
    const todo = {
        task: req.body.task,
        description: req.body.description,
        done: req.body.published ? req.body.published : false
    }

    Todo.create(todo);

}