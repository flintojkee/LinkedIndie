const userCtrl = require('../controllers/userCtrl');
const postCtrl = require('../controllers/postCtrl');
const teamCtrl = require('../controllers/teamCtrl');
const requestCtrl = require('../controllers/requestCtrl');
const auth = require('./auth');
const express = require('express');
const router = express.Router();
let User = require('../models/User');


  router.get('/posts/:id', postCtrl.getPosts);

  router.post('/post', auth.checkAuthenticated,  postCtrl.sendPost);

  router.post('/team', auth.checkAuthenticated, teamCtrl.createTeam);

  router.post('/sendTeamRequest', requestCtrl.sendTeamRequest);

  router.put('/updateTeamRequest', requestCtrl.updateTeamRequest);

  router.post('/sendUserRequest', requestCtrl.sendUserRequest);

   //app.put('/api/updateUserRequest/:id', requestCtrl.updateUserRequest);

  router.get('/teams',teamCtrl.getTeams);

  router.get('/teamsHiring',teamCtrl.getHiring);
  router.get('/teamsFinished',teamCtrl.getFinished);

  router.get('/team/:id', teamCtrl.getTeam);

  router.get('/users',userCtrl.getUsers);

  router.get('/getCoders',userCtrl.getCoders);
  router.get('/getArtists',userCtrl.getArtists);
  router.get('/getSounds',userCtrl.getSounds);
  router.get('/getLeads',userCtrl.getTeamleads);

  router.get('/profile/:id', userCtrl.getUserProfile);

  router.post('/register',auth.register);

  router.post('/login',auth.login);

  router.put('/updateUser/:id', userCtrl.updateUser);

  router.put('/updateTeam/:id', teamCtrl.updateTeam);

  router.all('/*', function (req, res) {
        res.sendStatus(404);
    });
module.exports = router;
