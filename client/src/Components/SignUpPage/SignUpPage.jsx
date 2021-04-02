import React, { useState, useEffect } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Redirect
} from "react-router-dom";
import axios from 'axios';
import FormInput from "../FormInput/FormInput.jsx";

const SignUpPage = ({ setIsRegistered }) => {
  const [isRegistered, setRegistered] = useState(false);
  const [userName, setUserName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    setUserName('');
    setEmail('');
    setPassword('');
  };

  const createUser = (event) => {
    if(userName !== '' && email !== '' && password !== '') {
      setRegistered(true);
      setIsRegistered(true);
      const userIdentity = {
        username: userName,
        email: email,
        password: password
      }
      axios.post('/createUser', userIdentity)
      .then(result => console.log('created new user'))
      .catch(err => console.log('problem with creating new user'));
    }
  }

  const handleChange  = (event) => {
    const { value, name } = event.target;
    if(name === 'email') {
      setEmail(() => value);
    } else if(name === 'username'){
      setUserName(() => value);
    }
      else {
      setPassword(() => value);
    }
  };

  return (
    <>
    {setRegistered === true
    ? <Redirect to='/signin' />
    : <div className="sign-in">
        <span className="sign-in-text">
          Sign up with your email
        </span>

        <form onSubmit={handleSubmit}>
        <FormInput
            name="username"
            type="text"
            label="username"
            handleChange={handleChange}
            value={userName}
            required
          />
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
            <button onClick={createUser}>Sign Up</button>
          </div>
        </form>
      </div>
       }
      </>
  );
}

export default SignUpPage;