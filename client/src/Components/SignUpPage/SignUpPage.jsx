import React, { useState, useEffect } from "react";
import axios from 'axios';
import FormInput from "../FormInput/FormInput.jsx";

const SignUpPage = () => {
  const [userName, setUserName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    setUserName('');
    setUserName('');
    setPassword('');
  };

  const createUser = (event) => {
    if(userName !== '' && email !== '' && password !== '') {
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
    <div className="sign-in">
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
        <div style={{ paddingLeft: "25px" }}>
          {/* <CustomButton
            className="signin-button custom-button-full"
            type="submit"
          >
            Sign In
          </CustomButton> */}

          {/* <CustomButton
            className="signin-button custom-button-full"
            onClick={signInWithGoogle}
          >
            Sign in with Google
          </CustomButton> */}
          <button onClick={createUser}>Sign Up</button>
          {/* <button onClick={signInWithGoogle} >Sign in with Google</button> */}
        </div>
      </form>
      </div>
      </>
  );
}

export default SignUpPage;