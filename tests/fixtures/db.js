const mongoose = require('mongoose');
const jwt = require('jsonwebtoken');
const User = require('../../src/models/user');
const Task = require('../../src/models/task');

const userOneId = new mongoose.Types.ObjectId();
const userOne = {
    _id: userOneId,
    name: 'anthony',
    email: 'unique@ant.com',
    password: '56whaat!!!',
    age: 43,
    tokens: [{
        token: jwt.sign({_id: userOneId}, process.env.JWT_SECRET)
    }]
};

const userTwoId = new mongoose.Types.ObjectId();
const userTwo = {
    _id: userTwoId,
    name: 'Foo',
    email: 'unique2@ant.com',
    password: 'whaat!!!areyousure???',
    age: 5,
    tokens: [{
        token: jwt.sign({_id: userTwoId}, process.env.JWT_SECRET)
    }]
};

const taskOne = {
    _id: new mongoose.Types.ObjectId(),
    description: 'this is task number one',
    completed: false,
    user: userOneId
};

const taskTwo = {
    _id: new mongoose.Types.ObjectId(),
    description: 'this is task number TWOOOOO',
    completed: true,
    user: userOneId
};

const taskThree = {
    _id: new mongoose.Types.ObjectId(),
    description: 'this is task number three you mofos',
    completed: false,
    user: userTwoId
};


const setupDatabase = async () => {
    await User.deleteMany();
    await Task.deleteMany();
    await new User(userOne).save()
    await new User(userTwo).save()
    await new Task(taskOne).save()
    await new Task(taskTwo).save()
    await new Task(taskThree).save()
};

module.exports = {
    userOneId,
    userOne,
    userTwoId,
    userTwo,
    taskOne,
    taskTwo,
    taskThree,
    setupDatabase
}