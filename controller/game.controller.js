const gameModel = require('../models/game.models');

module.exports = {
    getAll: async (req, res, next) => {
        try {
            const gameList = await gameModel.getAll();
            res.status(200).send(gameList);
        } catch (error) {
            next(error);
        }
    },
    create: async (req, res, next) => {
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