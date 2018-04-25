const User = require('../models/User');
const Team = require('../models/Team');

exports.sendTeamRequest = (req, res) =>{
    let requestData = req.body;
    console.log('sending new request to team: '+requestData.teamId+", author: "+requestData.userId);
    Team.findByIdAndUpdate(requestData.teamId, {$addToSet: {requests:{user:requestData.userId, status:false}}},{safe: true, upsert: true},
        function(err, doc) {
            if(err){
                console.log(err);
                res.sendStatus(500);
            } else {
                res.sendStatus(201);
            }
        });
};

exports.updateTeamRequest = (req, res) =>{
    let teamId = req.body.teamId;
    let userId = req.body.userId;
    let status = req.body.status;

    Team.findOne({_id: teamId}, (err, foundTeam) => {
        if (err) {
            console.log(err);
            res.status(500).send({message: 'Error updating team'});
        } else {
            if (!foundTeam) {
                res.status(404).send({message: 'Team not found'});
            } else {
                foundTeam.update({'requests.user': userId}, {$set: {
                    "requests.$.status":true
                }});
                foundTeam.save((err, updatedTeam) => {
                    if (err) {
                        console.log(err);
                        res.status(500).send({message: 'Error saving team'});
                    } else {
                        res.status(200).send(updatedTeam);
                    }
                });
            }
        }
    });
};

exports.sendUserRequest = (req, res) =>{
    let requestData = req.body;
    console.log('sending new request to user: '+requestData.userId+", from author: "+requestData.userId);
    User.findByIdAndUpdate(requestData.userId, {$addToSet: {requests:requestData.teamId}},{safe: true, upsert: true},
        function(err, doc) {
            if(err){
                console.log(err);
                res.sendStatus(500);
            } else {
                res.sendStatus(201);
            }
        });
};