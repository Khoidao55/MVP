import React, { useState, useEffect } from "react";
import FormInput from "../FormInput/FormInput.jsx";
//mport CustomButton from "../CustomButton/CustomButton";
import "./SignInPage.css";

import { signInWithGoogle } from "../../FireBase/FireBase.utils";

const SignInPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    setUserName('');
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
    <div className="sign-in">
      <span style={{ color: "black", paddingLeft: "5px" }}>
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
          <button>Sign in</button>
          <button onClick={signInWithGoogle} >Sign in with Google</button>
        </div>
      </form>
    </div>
  );
}

export default SignInPage;
