const express = require('express');
const bodyParser = require('body-parser');
const compression = require('compression');
const axios = require('axios');

const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(compression());


app.use(express.static('public'))

app.listen(3000, () => {
  console.log('Listening on 3000');
})