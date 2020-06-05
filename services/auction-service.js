const Auction = require('../models/auction');

const getAll = async function (req) {
    const auction = await Auction.findAll({
        attributes: ['id', 'name', 'description', 'completedDate', 'status'],
    });
    return auction;
};

module.exports = {
    getAll,
}