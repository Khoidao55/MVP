const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const compression = require('compression');
const axios = require('axios');
const db = require('../database/postgreSQL_query.js');

const app = express();
app.use(bodyParser.json({limit: "50mb"}));
app.use(bodyParser.urlencoded({limit: "50mb", extended: true, parameterLimit:50000}));
app.use(compression());


app.use(express.static('public'));

app.get('/validateUser', (req, res) => {
  console.log(req.params);
});

app.post('/createUser', (req, res) => {
  db.createUser(req, res);
})

app.get('/*', function(req, res) {
  res.sendFile(path.join(__dirname, '../public/index.html'), function(err) {
    if (err) {
      res.status(500).send(err)
    }
  })
})


app.listen(3000, () => {
  console.log('Listening on 3000');
})