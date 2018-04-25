const express = require('express');
const path = require('path');
const env = process.env.NODE_ENV = process.env.NODE_ENV || 'production';

const api = require('./config/routes');

const app = express();
require('./config/express')(app);

app.use(express.static(path.join(__dirname, 'dist')));

app.use('/api', api);

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'dist/index.html'));
});
let config = require('./config/config')[env];


require('./config/mongoose')(config);
app.listen(config.port);
console.log('Listening on port '+config.port+"...");
