const service = require('../services/auction-service');
//const auctionValidateShema = require('../validate/auction-shema');

class AuctionController {
    constructor(){};
    getAllauctions = async (req, res) => {
        try {
            const result = await service.getAll();
            res.send(result);
        }
        catch (e) {
            res.status(400).send({error:e.message});
        }
    };
}

module.exports = AuctionController;