var express = require('express');
var router = express.Router();

const gameRoutes = require('./game.routes.js');
const genreRoutes = require('./genre.routes.js');

router.use('/game', gameRoutes);
router.use('/genre', genreRoutes);

module.exports = router;
