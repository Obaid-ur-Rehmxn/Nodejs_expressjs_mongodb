const mongoose = require('mongoose');

const mongoDB = 'mongodb://localhost:27017/test';
mongoose.connect(mongoDB, {useNewUrlParser: true, useUnifiedTopology: true});

const db = mongoose.connection;

db.on('error', console.error.bind(console, 'connection error:'));
module.exports = db;
