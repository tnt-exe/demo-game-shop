var express = require('express');
var router = express.Router();

const gameController = require('../controller/game.controller.js');

router.route('/')
    .get(gameController.getAll)
    .post(gameController.create);

router.route('/:id')
    .put(gameController.update)
    .delete(gameController.delete);

module.exports = router;