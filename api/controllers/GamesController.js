const dotenv = require('dotenv');
dotenv.config();

module.exports = {
    getAll: async function (req, res) {
        const { searchQuery } = req.query;
        const url = searchQuery ? `https://rawg.io/api/games?token&key=${process.env.API_KEY}&search=${encodeURIComponent(searchQuery)}` : `https://rawg.io/api/games?token&key=${process.env.API_KEY}&ordering=-rating`;
        const options = {
            method: 'GET',
        };

        try {
            const response = await fetch(url, options);
            return res.json(await response.json());
        } catch (err) {
            return res.serverError(err);
        }
    },
    getById: async function (req, res) {
        const url = `https://rawg.io/api/games/${req.params.id}?token&key=${process.env.API_KEY}`;
        const options = {
            method: 'GET',
        };

        try {
            const response = await fetch(url, options);
            return res.json(await response.json());
        } catch (err) {
            return res.serverError(err);
        }
    },

};

