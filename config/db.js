const mongoose = require('mongoose');

const connectDB = async () => {
    await mongoose.connect('mongodb+srv://halakhushi360:node@node.du0xm.mongodb.net/?retryWrites=true&w=majority&appName=node/users');
    console.log('connect to database');
}

module.exports = connectDB;