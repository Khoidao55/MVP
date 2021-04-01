const express = require('express');
const bodyParser = require('body-parser');
const compression = require('compression');
const axios = require('axios');
const db = require('../database/postgreSQL_query.js');

const app = express();
app.use(bodyParser.json({limit: "50mb"}));
app.use(bodyParser.urlencoded({limit: "50mb", extended: true, parameterLimit:50000}));
app.use(compression());


app.use(express.static('public'));

app.post('/globalgallery', db.postImage);
app.get('/globalgallery', db.getImage);
app.get('/validateUser', db.validateUser);

app.listen(3000, () => {
  console.log('Listening on 3000');
})