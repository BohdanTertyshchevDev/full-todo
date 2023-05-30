const {Task} = require('../models');

module.exports.getAllUserTasks = async(req, res, next) => {
    try {
        const {tokenPayload: {userId}} = req;

        const userTasks = await Task.find({
            authorId: userId
        });

        return res.status(200).send({data: userTasks});
    } catch (error) {
        next(error);
    }
}

module.exports.createUserTask = async (req, res, next) => {
    try {
        const {body, tokenPayload: {userId}} = req;
        const task = await Task.create({...body, 
                                        authorId: userId});
        res.status(201).send({data: task});
    } catch (error) {
        next(error);
    }
}

module.exports.deleteTask = async (req, res, next) => {
    try {
        const {params: {taskId}, tokenPayload: {userId}} = req;
        const deleteTask = await Task.findByIdAndRemove({authorId: userId, _id: taskId});
        if(deleteTask) {
            res.status(200).send({data: deleteTask});
        } else {
            res.status(404).send({error: 'Task not found'});
        }
    } catch (error) {
        next(error);
    }
}