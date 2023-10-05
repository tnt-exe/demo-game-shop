const db = require("../utils/dbConnect.js");

module.exports = {
    getAll: async () => {
        const genreList = await db('genre');
        return genreList || [];
    },
    getGenreById: async (genreId) => {
        const genre = await db('gamegenre')
            .join('genre', 'genre.id', "=", 'gamegenre.genreid')
            .join('game', 'game.gameId', "=", 'gamegenre.genreid')
            .where('gamegenre.genreid', genreId)
        return genre;
    },
    addGenre: async (genreName, status) => {
        const result = await db('genre')
            .insert({ 
                name: genreName,
                status: status
         });
        return result;
    },
    updateGenre: async (genreId, genreName) => {
        const result = await db('genre')
            .where('id', genreId)
            .update({ name: genreName });
        return result;
    },
    changeGenreStatus: async (genreId, status) => {
        const result = await db('genre')
            .where('id', genreId)
            .update({ status: status });
        return result;
    }
}