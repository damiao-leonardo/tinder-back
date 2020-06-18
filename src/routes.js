const express = require('express');
const DevCotroller = require('./controllers/DevController');
const LikeCotroller = require('./controllers/LikeController');
const DislikeCotroller = require('./controllers/DislikeController');
const routes = express.Router();


routes.post('/devs', DevCotroller.store);

routes.get('/devs', DevCotroller.index);

routes.post('/devs/:devId/likes', LikeCotroller.store);

routes.post('/devs/:devId/dislikes', DislikeCotroller.store);

routes.get('/', function(req, res) {
    res.send('vamos la teste , vamos que vamos  leonardo');
});

module.exports = routes;