const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');

const app = express();

// view engine setup
app.set('views', path.join(__dirname, 'view'))
app.set('view engine', 'ejs');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extends: false }));

app.use(express.static(__dirname + '/public'));

require('./router/router')(app);

app.listen(8080);
