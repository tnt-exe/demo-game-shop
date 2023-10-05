var express = require('express');
var router = express.Router();

const genreController = require('../controller/genre.controller.js');

router.route('/')
    .get(genreController.getAll)
    .post(genreController.create);

router.route('/:id')
    .get(genreController.getGameByGenre)
    .put(genreController.update)
    .delete(genreController.delete);

module.exports = router;