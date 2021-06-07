const pool = require('./database_config.js');
const bcrypt = require('bcrypt');

const createUser = async (req, res) => {
  const { username, password, email } = req.body;

  try {
    //const existingUser = await pool.databaseConfig.query(`SELECT username FROM users WHERE username = ${username}`);
    const existingUser = false;
    if(existingUser) {
      res.sendStatus(409);
    } else {
      const hashedPassword = await bcrypt.hash(password, 10);
      const createdOn = new Date();
      await pool.databaseConfig.query('INSERT INTO users (username, password, email, created_on) VALUES ($1, $2, $3, $4)', [username, hashedPassword, email, createdOn]);
      res.status(200).send('registered');
    }
  } catch (error) {
    console.log(error);
    res.sendStatus(400);
  }
}

const signInChecker = async (req, res) => {
  const { email, password } = req.body;
  try {
    const userChecker = await pool.databaseConfig.query(`SELECT password FROM users WHERE email = '${email}'`);
    if(userChecker) {
      const isUser = await bcrypt.compare(password, userChecker.rows[0].password);
      if(isUser) {
        const user = await pool.databaseConfig.query(`SELECT username from users WHERE email = '${email}'`)
        res.status(200).send(user.rows[0].username);
      } else {
        res.status(401).send('user does not exist');
      }
    } else {
      res.status(401).send('user does not exist');
    }
    //const isUser = userChecker.rows[0].case;
  } catch (error) {
    console.log(error);
    res.sendStatus(400);
  }
}


module.exports = {
  createUser,
  signInChecker
};



