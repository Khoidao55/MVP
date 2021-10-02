const redis = require('redis');
const REDIS_PORT = 6379;

const client = redis.createClient(REDIS_PORT);


client.on('connect', function() {
  console.log('Connected to Redis!');
})

let multi = client.multi();

module.exports.saveRedisData = async (req, res) => {
  try {
    let photoData = req.body.data;
    photoData.forEach(photo => {
      client.rpush('photoData', JSON.stringify(photo), (error, reply) => {
        if(error) console.log('redis error');
        console.log('redis success');
      });
    })
  } catch (error) {
    console.log(error);
  }
}