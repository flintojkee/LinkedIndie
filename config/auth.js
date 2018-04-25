const jwt = require('jwt-simple');
const bcrypt = require('bcrypt-nodejs');
let User = require('../models/User');

exports.login = async (req, res) => {
        let loginData = req.body;
        console.log(req.body);
        let  user = await User.findOne({email: loginData.email});

        if (!user)
            return res.status(401).send({message: 'Email or Password invalid'});
        bcrypt.compare(loginData.pwd, user.pwd, (err, isMatch) =>{
            if(!isMatch)
                return res.status(401).send({message: 'Password invalid'});

            createSendToken(res, user);
        });
};

exports.register = (req, res) => {
    let userData = req.body;
    let user = new User(userData);

    console.log(user);

    user.save((err, newUser) => {
        if(err)
            return res.status(401).send({message: 'Email is already used'});
        createSendToken(res, newUser);
    })
};

function createSendToken(res, user) {
    let payload = {sub: user._id};

    let token = jwt.encode(payload, '123');

    res.status(200).send({token, userId: user._id});
}

exports.checkAuthenticated = function (req, res, next) {
    if(!req.header('Authorization'))
        return res.status(401).send({message: 'Unauthorized Missing Auth Header'});

    let token = req.header('Authorization').split(' ')[1];

    let payload = jwt.decode(token, '123');

    if(!payload)
        return res.status(401).send({message: 'Unauthorized. Auth Header Invalid'});

    req.userId = payload.sub;
    next();
};

