const { User } = require('../models');
const bcrypt = require('bcrypt');

module.exports.registrationUser = async(req, res, next) => {
    try {
        const {body, passwordHash} = req;
        const createUser = await User.create({...body, passwordHash});
        res.status(201).send({data: createUser});
    } catch(error) {
        next(error);
    }
}

module.exports.loginUser = async(req, res, next) => {
    try {
        const {body, passwordHash} = req;
        const foundUser = await User.findOne({
            email: body.email
        });
        if(foundUser) {
            const result = await bcrypt.compare(passwordHash, foundUser.passwordHash);
            res.status(200).send({data: foundUser});
        }
    } catch (error) {
        next(error);
    }
}