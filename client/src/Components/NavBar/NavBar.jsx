import React, { useState, useEffect } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import { auth } from "../../FireBase/FireBase.utils";

const NavBar = ({ currentUser }) => {
  return (
    <Router>
    <nav>
      <li>
        <Link to="/">
          <h2>Home</h2>
        </Link>
      </li>
      <li>
        {currentUser !== 'anonymous' ? (
          <a href="#signout" onClick={() => auth.signOut()}>
            <cite className="user-profile">
              <h2>Logged In</h2>
            </cite>
          </a>
        ) : (
          <Link to="/signin">
            <a href="#signin">Sign In</a>
          </Link>
        )}
      </li>
    </nav>
    </Router>
  )
}

export default NavBar;