const User = require('../models/User');
const Team = require('../models/Team');

exports.sendTeamRequest = (req, res) =>{
    let requestData = req.body;
    console.log('sending new request to team: '+requestData.teamId+", author: "+requestData.userId);
    Team.findByIdAndUpdate(requestData.teamId, {$addToSet: {requests:{user:requestData.userId, status:false}}},{safe: true, upsert: true },
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
    console.log(teamId+" "+ userId+ " " + status);
    Team.updateOne({_id:teamId,'requests.user':userId},{$set:{ "requests.$.status":status}},
      function(err, doc) {
        if(err){
          console.log(err);
          res.sendStatus(500);
        } else {
          res.sendStatus(201);
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
