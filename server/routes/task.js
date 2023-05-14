const Router = require('express');
const taskRouter = Router();

const TaskController = require('../controllers/task.controller');

taskRouter.post('/', TaskController.createUserTask);
taskRouter.get('/:userId', TaskController.getAllUserTasks);

module.exports = taskRouter;