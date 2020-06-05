const Auction = require('../models/auction');

const getAll = async function (req) {
    const auction = await Auction.findAll({
        attributes: ['id', 'name', 'description', 'completeDate', 'status'],
    });
    return auction;
};

module.exports = {
    getAll,
}