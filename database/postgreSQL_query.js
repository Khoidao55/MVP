const pool = require('./database_config.js');

const postImage = (request, response) => {
  const {username, image_url, reported} = request.body;
  pool.databaseConfig.query('INSERT INTO photo_gallery(username, image_url,reported) VALUES ($1, $2, $3)', [username, image_url, reported], (err, result) => {
    if(err) throw err;
    console.log('image added');
    response.status(200).send(`image added!`);
  })
};

const getImage = (request, response) => {
  pool.databaseConfig.query('SELECT image_url from photo_gallery FETCH FIRST 50 ROWS ONLY', (err, results) => {
    if(err) throw err;
    const responseObj = results.rows;
    let arrayOfPhotos = [];
    for (let i = responseObj.length - 1; i >= 0; i--) {
      arrayOfPhotos.push(responseObj[i].image_url);
    }
    response.status(200).json(arrayOfPhotos);
  });
}

module.exports.postImage = postImage;
module.exports.getImage = getImage;

