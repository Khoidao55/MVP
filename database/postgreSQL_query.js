const pool = require('./database_config.js');
const request = require('request');

const postImage = (request, response) => {
  const {username, image_url, reported} = request.body;
  pool.databaseConfig.query('INSERT INTO photo_gallery(username, image_url, reported) VALUES ($1, $2, $3)', [username, image_url, reported], (err, result) => {
    if(err) throw err;
    console.log('image added');
    response.status(200).send(`image added!`);
  })
};

const getImage = (request, response) => {
  pool.databaseConfig.query('SELECT username, image_url from photo_gallery FETCH FIRST 50 ROWS ONLY', (err, results) => {
    if(err) throw err;
    const responseObj = results.rows;
    let arrayOfPhotos = [];
    for (let i = responseObj.length - 1; i >= 0; i--) {
      arrayOfPhotos.push([responseObj[i].username, responseObj[i].image_url]);
    }
    response.status(200).json(arrayOfPhotos);
  });
}
const createNewUser = (request, response) => {
  const username = request.body.username;
  const email = request.body.email;
  const password = request.body.password;
  pool.databaseConfig.query('INSERT INTO existing_users(username, email, password) VALUES ($1, $2, $3)', [username, email, password], (err, results) => {
    if(err) throw err;

    response.status(200).json('created new user!');
  })
}

const validateUser = (request, response) => {
  const email = request.query.email;
  const password = request.query.password;
  pool.databaseConfig.query('SELECT * from existing_users', (err, results) => {
    if(err) throw err;
    const existingUsers = results.rows;
    let username = '';
    //console.log(existingUsers);
    for(let i = 0; i < existingUsers.length; i++) {
      if(email === existingUsers[i].email && password === existingUsers[i].password) {
        username = existingUsers[i].username;
      }
    }
    console.log(username);
    if(username !== '') {
    response.status(200).json(username);
    } else {
      response.status(200).json('anonymous');
    }
  });
}

module.exports.postImage = postImage;
module.exports.getImage = getImage;
module.exports.validateUser = validateUser;
module.exports.createNewUser = createNewUser;

