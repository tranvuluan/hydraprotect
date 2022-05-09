const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const morgan = require('morgan');
const cors = require('cors');
const router = require('./server/routes/router');
const path = require('path');
var rfs = require('rotating-file-stream') // version 2.x

const rateLimit = require('express-rate-limit');

// create a rotating write stream
var accessLogStream = rfs.createStream('access.log', {
    interval: '1d', // rotate daily
    path: path.join(__dirname, 'log')
})

// const apiLimiter = rateLimit({
//     windowMs: 60 * 1000, // 1 minutes
//     max: 2,
//     message: 'Too many connection',
// });

// setup the logger
app.use(morgan('dev'));
// view engine setup
app.use( express.static( "public" ) );
app.set('views', path.join(__dirname, './server/views'));
app.set('view engine', 'ejs');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cors());
app.use('/',  router);


app.listen(4000, () => console.log('server is running on port: 4000'));
