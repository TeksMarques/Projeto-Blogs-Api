const postServices = require('../services/postServices');

const getAll = async (_req, res) => {
    const posts = await postServices.getAll();
    res.status(200).json(posts);
    };

module.exports = {
    getAll,
};