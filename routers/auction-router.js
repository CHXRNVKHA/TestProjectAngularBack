const express = require('express');
const upload = require('../middleware/upload');



const AuctionController = require('../controllers/auction-controller')
const auctionController = new AuctionController();

const router = new express.Router();

router.get('/', auctionController.getAllauctions);

module.exports = router;