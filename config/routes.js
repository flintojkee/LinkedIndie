const userCtrl = require('../controllers/userCtrl');
const postCtrl = require('../controllers/postCtrl');
const teamCtrl = require('../controllers/teamCtrl');
const requestCtrl = require('../controllers/requestCtrl');
const auth = require('./auth');

let User = require('../models/User');

module.exports = function (app) {
    app.get('/api/posts/:id', postCtrl.getPosts);

    app.post('/api/post', auth.checkAuthenticated,  postCtrl.sendPost);

    app.post('/api/team', auth.checkAuthenticated, teamCtrl.createTeam);

    app.post('/api/sendTeamRequest', requestCtrl.sendTeamRequest);

    app.put('/api/updateTeamRequest', requestCtrl.updateTeamRequest);

    app.post('/api/sendUserRequest', requestCtrl.sendUserRequest);

   //app.put('/api/updateUserRequest/:id', requestCtrl.updateUserRequest);

    app.get('/api/teams',teamCtrl.getTeams);

    app.get('/api/teamsHiring',teamCtrl.getHiring);
    app.get('/api/teamsFinished',teamCtrl.getFinished);

    app.get('/api/team/:id', teamCtrl.getTeam);

    app.get('/api/users',userCtrl.getUsers);

    app.get('/api/getCoders',userCtrl.getCoders);
    app.get('/api/getArtists',userCtrl.getArtists);
    app.get('/api/getSounds',userCtrl.getSounds);
    app.get('/api/getLeads',userCtrl.getTeamleads);

    app.get('/profile/:id', userCtrl.getUserProfile);

    app.post('/register',auth.register);

    app.post('/login',auth.login);

    app.put('/updateUser/:id', userCtrl.updateUser);

    app.put('/updateTeam/:id', teamCtrl.updateTeam);

    app.get('/*', function(req,res) {
        res.sendFile(path.join(__dirname+'/dist/index.html'));
    });
   app.all('/api/*', function (req, res) {
        res.sendStatus(404);
    });
};