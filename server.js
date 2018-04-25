const express = require('express');

const env = process.env.NODE_ENV = process.env.NODE_ENV || 'development';

let app = express();

app.use(express.static(__dirname + '/dist'));

let config = require('./config/config')[env];

require('./config/express')(app);

require('./config/mongoose')(config);

require('./config/routes')(app);

app.listen(config.port);
console.log('Listening on port '+config.port+"...");