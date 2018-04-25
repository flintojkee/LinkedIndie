const mongoose = require('mongoose');
let User = require('../models/User');



module.exports = function (config) {
    mongoose.connect(config.db);
    let db = mongoose.connection;
    db.on('error',console.error.bind(console,'Mongo connection error!'));
    db.once('open', function callback() {
        console.log('Connected to mongo.')
    });
};

