const Router = require('express');
const taskRouter = Router();

const TaskController = require('../controllers/task.controller');
const {checkToken} = require('../middlewares/checkToken');

taskRouter.post('/', checkToken, TaskController.createUserTask);
taskRouter.get('/', checkToken, TaskController.getAllUserTasks);

module.exports = taskRouter;