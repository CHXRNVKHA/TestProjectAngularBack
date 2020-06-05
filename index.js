const express = require('express');
const router = require('./routers/export-router');
const path = require('path');
const cors = require('cors');
const cookieParser = require('cookie-parser');
const logger = require('morgan');


const app = express();
const hostname = '127.0.0.1';
const port = process.env.PORT || 3000;


app.use(express.static(path.join(__dirname + 'public')));

app.use('/auction', router.auctionRouter);

app.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
});