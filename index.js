const express = require('express');
const router = require('./routers/export-router');
const path = require('path');
const auth = require('./middleware/auth');

const app = express();
const hostname = '127.0.0.1';
const port = process.env.PORT || 3000;

app.use(cors({
    origin: '*',
    methods: ['GET', 'POST', 'PATCH', 'DELETE', 'PUT'],
    allowedHeaders: 'Content-type, Authorization, Origin, X-Requested-With, Accept',
}));

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({extended: false}));
app.use(cookieParser);
app.use(express.static(path.join(__dirname + 'public')));

app.use('/auction', router.auctionRouter);

app.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
});