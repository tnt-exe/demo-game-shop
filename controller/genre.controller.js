const genreModel = require('../models/genre.models');

module.exports = {
    create: async (req, res, next) => {
        try {

        } catch (error) {
            next(error);
        }
    },
    getAll: async (req, res, next) => {
        try {
            const result = await genreModel.getAll();
            res.status(200).send(result);
        } catch (error) {
            next(error);
        }
    },
    getGameByGenre: async (req, res, next) => {
        try {
            
        } catch (error) {
            next(error);
        }
    },
    update: async (req, res, next) => {
        try {
            
        } catch (error) {
            next(error);
        }
    },
    delete: async (req, res, next) => {
        try {
            
        } catch (error) {
            next(error);
        }
    }
}
