const db = require("../utils/dbConnect.js");

module.exports = {
    getAll: async () => {
        const gameList = await db('game')
            .join('gamegenre', 'game.gameId', '=', 'gamegenre.gameId')
            .join('genre', 'genre.genreId', '=', 'gamegenre.genreId')
            .select(
                'game.gameId',
                'game.gameName',
                'game.gameDes',
                'game.status',
                'genre.genreId',
                'genre.genreName'
            );
    
        // Group the game genres by game ID
        const games = {};
        gameList.forEach(game => {
            const { gameId, gameName, gameDes, status, genreId, genreName } = game;
            if (!games[gameId]) {
                games[gameId] = {
                    gameId,
                    gameName,
                    gameDes,
                    status,
                    genres: []
                };
            }
            if (!games[gameId].genres.some(genre => genre.genreId === genreId)) {
                games[gameId].genres.push({ genreId, genreName });
            }
        });
    
        return Object.values(games) || [];
    },
}