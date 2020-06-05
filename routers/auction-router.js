const express = require('express');



const AuctionController = require('../controllers/auction-controller')
const auctionController = new AuctionController();

const router = new express.Router();
console.log('in router');
router.get('/', auctionController.getAllauctions);

module.exports = router;