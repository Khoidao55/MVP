const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const compression = require('compression');
const axios = require('axios');
const db = require('../database/postgreSQL_query.js');
const redis = require('redis');
const { saveRedisData } = require('./controller.js');
const REDIS_PORT = 6379;

const client = redis.createClient(REDIS_PORT);
const app = express();

client.on('connect', function() {
  console.log('Connected to Redis!');
})

app.use(bodyParser.json({limit: "50mb"}));
app.use(bodyParser.urlencoded({limit: "50mb", extended: true, parameterLimit:50000}));
app.use(compression());


app.use(express.static('public'));

//caching function middleware to get photos
function cache(req, res, next) {
  client.lrange('photoData', 0, -1, (err, data) => {
    if(err) throw err;

    if(data !== null) {
      let photoData = [];
      data.forEach(photo => {
        photoData.push(JSON.parse(photo));
      })
      res.status(200).send(photoData);
    } else {
      next();
    }
  })
}

app.get('/getPhotosFromRedis', cache);

app.post('/createUser', (req, res) => {
  db.createUser(req, res);
})

app.post('/validateUser', (req, res) => {
  console.log('parapms', req.body);
  db.signInChecker(req, res);
});

app.get('/testing', (req, res) => {
  res.send('yeet');
})

//app.post('/redisData', saveRedisData);


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