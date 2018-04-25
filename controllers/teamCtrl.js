const Team = require('../models/Team');

exports.createTeam = (req, res) =>{
    let teamData = req.body;
    teamData.teamLead = req.userId;
    teamData.dateTime = new Date;
    console.log('creating new team: '+teamData.teamTitle+", teamLead: "+req.userId);

    let team = new Team(teamData);
    team.save((err, result) => {
        if(err) {
            console.error('creating team error');
            return res.status(500).send({message:'creating team error'})
        }
        res.sendStatus(201);
    })
};

exports.getTeams = async(req, res) => {
    try {
        let teams = await Team.find({}, '-pwd -__v');
        res.send(teams)
    }
    catch (error) {
        console.error(error);
        res.sendStatus(500);
    }
};

exports.getHiring = async(req, res) => {
    try {
        let teams = await Team.find({areHiring: true}, '-pwd -__v');
        res.send(teams)
    }
    catch (error) {
        console.error(error);
        res.sendStatus(500);
    }
};

exports.getFinished = async(req, res) => {
    try {
        let teams = await Team.find({finishedProject: true}, '-pwd -__v');
        res.send(teams)
    }
    catch (error) {
        console.error(error);
        res.sendStatus(500);
    }
};

exports.getTeam = async(req, res) => {
    try {
        let team = await Team.findById(req.params.id, '-__v');
        res.send(team)
    }
    catch (error) {
        console.error(error);
        res.sendStatus(500);
    }
};

exports.updateTeam = (req, res) => {
    let id = req.params.id;

    Team.findOne({_id: id}, (err, foundTeam) => {
        if (err) {
            console.log(err);
            res.status(500).send({message: 'Error updating team'});
        } else {
            if (!foundTeam) {
                res.status(404).send({message: 'Team not found'});
            } else {

                if (req.body.teamTitle) foundTeam.teamTitle = req.body.teamTitle;
                if (req.body.description) foundTeam.description = req.body.description;
                if (req.body.requests) foundTeam.requests = req.body.requests;
                if (req.body.teammates) foundTeam.teammates = req.body.teammates;
                if (req.body.teamLead) foundTeam.teamLead = req.body.teamLead;
                if (req.body.areHiring) foundTeam.areHiring = req.body.areHiring;
                if (req.body.finishedProject) foundTeam.finishedProject = req.body.finishedProject;

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