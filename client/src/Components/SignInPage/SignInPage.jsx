import React, { useState, useEffect } from "react";
import axios from 'axios';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Redirect
} from "react-router-dom";
import FormInput from "../FormInput/FormInput.jsx";
import "./SignInPage.css";

import { signInWithGoogle } from "../../FireBase/FireBase.utils";

const SignInPage = ({ setIsRegistered, setUser }) => {
  const [isLoggedIn, setIsLoggedIn] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');


  if(isLoggedIn === true) {
    setIsRegistered(false);
  }

  const onClickRegister = () => {
    setIsRegistered(false);
    <Redirect to='/signup' />
  }

  const validateUser = () => {
    const credentials = {
      email: email,
      password: password
    }
    axios.post('/validateUser', credentials)
    .then(result => {
      console.log('entered')
      setIsLoggedIn(true);
      setUser(result.data);
      localStorage.setItem('user', result.data)
      console.log(localStorage);
    })
    .catch(error => {
      setIsLoggedIn(false);
    })
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setEmail('');
    setPassword('');
  };

  const handleChange  = (event) => {
    const { value, name } = event.target;
    if(name === 'email') {
      setEmail(() => value);
    } else {
      setPassword(() => value);
    }
  };

  // const testing = async () => {
  //   let validate = await axios.get('/testing');
  //   console.log('data', validate.data);
  // }

  testing();

  return (
    <>
    {isLoggedIn
    ? <Redirect to='/' />
    :
    <>
    <div className="sign-in">
      <span className="sign-in-text">
        Welcome!
      </span>
      <span className="sign-in-text">
        Sign in with your email and password
      </span>

      <form onSubmit={handleSubmit}>
        <FormInput
          name="email"
          type="email"
          label="email"
          handleChange={handleChange}
          value={email}
          required
        />
        <FormInput
          name="password"
          type="password"
          label="password"
          value={password}
          handleChange={handleChange}
          required
        />
        <div style={{ textAlign: 'center' }}>
          <button onClick={validateUser}>Login in</button>
          <p className={`invalid-login-${isLoggedIn === '' ? 'false' : 'true'}`}>The username or password you entered doesn't belong to an account. Please check your username or password and try again.</p>
        </div>
      </form>
      </div>
      <div className="sign-up">
        <Router>
          <span className="sign-up-text">
            Don't have an account?
            {/* <Link to='/signup'> */}
              <a href='/signup' style={{textDecoration: 'none', paddingLeft: '5px', color: 'blue', fontWeight: 'bold', cursor: 'pointer'}} onClick={onClickRegister}>Sign Up</a>
            {/* </Link> */}
          </span>
        </Router>
      </div>
      </>
      }
      </>
  );
}

export default SignInPage;
