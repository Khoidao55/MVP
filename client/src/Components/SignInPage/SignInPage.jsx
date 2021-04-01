import React, { useState, useEffect } from "react";
import axios from 'axios';
import {
  HashRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import FormInput from "../FormInput/FormInput.jsx";
//mport CustomButton from "../CustomButton/CustomButton";
import "./SignInPage.css";

import { signInWithGoogle } from "../../FireBase/FireBase.utils";

const SignInPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const validateUser = () => {
    axios.get(`/validateUser?email=${email}&password=${password}`)
    .then(result => console.log(result))
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

  return (
    <>
    <div className="sign-in">
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
          <button onClick={validateUser}>Sign in</button>
          {/* <button onClick={signInWithGoogle} >Sign in with Google</button> */}
        </div>
      </form>
      </div>
      <div className="sign-up">
        <Router>
          <span className="sign-up-text">
            Don't have an account?
            <Link to='/signup'>
              <span style={{paddingLeft: '5px', color: 'blue', fontWeight: 'bold', cursor: 'pointer'}}>Sign Up</span>
            </Link>
          </span>
        </Router>
      </div>
      </>
  );
}

export default SignInPage;
