const mongoose = require('mongoose');
const User = require('./User');
const { DB } = require('../configs/db');
const Task = require('./Task');

mongoose.connect(DB)
.catch(err => {
    console.log('connect failed');
    process.exit(1);
});

module.exports = {
    User, Task
}