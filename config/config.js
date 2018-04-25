const path = require('path');
const rootPath = path.normalize(__dirname + '/../../');

module.exports = {
    development:{
        rootPath:rootPath,
        db:'mongodb://test:test@ds129939.mlab.com:29939/linkedindie',
        port: process.env.PORT || 3000
    },
    production:{
        rootPath:rootPath,
        db:'mongodb://test:test@ds129939.mlab.com:29939/linkedindie',
        port:process.env.PORT || 80
    }
};
