const mongoose = require('mongoose');
const {Schema} = mongoose;

const taskSchema = new Schema({
    authorId: {
        type: Schema.Types.ObjectId,
        ref: 'User'
    },
    body: {
        type: String,
        require: true
    },
    createdAt: {
        type: Date,
        default: Date.now
    },
    deadline: {
        type: Date,
        require: true
    },
    status: {
        type: String,
        require: true
    }
})

const Task = mongoose.model('Task', taskSchema);
module.exports = Task;