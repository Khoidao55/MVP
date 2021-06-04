const pool = require('./database_config.js');
const bcrypt = require('bcrypt');

const createUser = async (request, response) => {
  const {username, password, email} = request.body;
  console.log(username, password, email);

  try {
    //const existingUser = await pool.databaseConfig.query(`SELECT username FROM users WHERE username = ${username}`);
    const existingUser = false;
    if(existingUser) {
      response.sendStatus(409);
    } else {
      const hashedPassword = await bcrypt.hash(password, 10);
      const createdOn = new Date();
      await pool.databaseConfig.query('INSERT INTO users (username, password, email, created_on) VALUES ($1, $2, $3, $4)', [username, hashedPassword, email, createdOn]);
      response.status(200).send('registered');
    }
  } catch (error) {
    console.log(error);
    response.sendStatus(400);
  }
}


module.exports.createUser = createUser;


