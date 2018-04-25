const User = require('../models/User');


exports.getUsers = async(req, res) => {
    try {
        let users = await User.find({}, '-pwd -__v');
        res.send(users)
    }
    catch (error) {
        console.error(error);
        res.sendStatus(500);
    }
};

exports.getCoders = async(req,res) => {
    try {
        let users = await User.find({isCoder: true}, '-pwd -__v');
        res.status(200).send(users);
    }
    catch (err) {
        console.error(err);
        res.sendStatus(500);
    }
};

exports.getArtists = async(req,res) => {
    try {
        let users = await User.find({isArtist: true}, '-pwd -__v');
        res.status(200).send(users);
    }
    catch (err) {
        console.error(err);
        res.sendStatus(500);
    }
};

exports.getSounds = async(req,res) => {
    try {
        let users = await User.find({isSounddesigner: true}, '-pwd -__v');
        res.status(200).send(users);
    }
    catch (err) {
        console.error(err);
        res.sendStatus(500);
    }
};

exports.getTeamleads = async(req,res) => {
    try {
        let users = await User.find({isTeamlead: true}, '-pwd -__v');
        res.status(200).send(users);
    }
    catch (err) {
        console.error(err);
        res.sendStatus(500);
    }
};

exports.getUserProfile = async(req, res) => {
    try {
        let user = await User.findById(req.params.id, '-pwd -__v');
        res.send(user);
    }
    catch(error) {
        console.error(error);
        res.sendStatus(500);
    }

};

exports.updateUser = (req, res) => {
    let id = req.params.id;

    User.findOne({_id: id}, (err, foundUser) => {
        if (err) {
            console.log(err);
            res.status(500).send({message: "Error updating user"});
        } else {
            if (!foundUser) {
                res.status(404).send({message: "User not found"});
            } else {

                if (req.body.email) foundUser.email = req.body.email;
                if (req.body.name) foundUser.name = req.body.name;
                if (req.body.roles) foundUser.roles = req.body.roles;
                if (req.body.favouriteUsers) foundUser.favouriteUsers = req.body.favouriteUsers;
                if (req.body.favouriteTeams) foundUser.favouriteTeams = req.body.favouriteTeams;
                if (req.body.description) foundUser.description = req.body.description;
                if (req.body.isCoder) foundUser.isCoder = req.body.isCoder;
                if (req.body.isArtist) foundUser.isArtist = req.body.isArtist;
                if (req.body.isSounddesigner) foundUser.isSounddesigner = req.body.isSounddesigner;
                if (req.body.isTeamlead) foundUser.isTeamlead = req.body.isTeamlead;

                foundUser.save((err, updatedUser) => {
                    if (err) {
                        console.log(err);
                        res.status(500).send({message: 'Error saving user'});
                    } else {
                        res.status(200).send(updatedUser);
                    }
                });
            }
        }
    });
};