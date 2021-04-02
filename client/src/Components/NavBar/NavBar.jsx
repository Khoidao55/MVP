import React, { useState, useEffect } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import { auth } from "../../FireBase/FireBase.utils";
import './NavBar.css';

const NavBar = ({ currentUser }) => {
  return (
    <Router>
      <nav>
        <div className="row">
          <ul className="main-nav">
            <li>
              <Link to="/">
              <a href="/">Home</a>
              </Link>
            </li>
            <li>
              {currentUser !== 'anonymous'
              ? (
                <a href="#signout" onClick={() => auth.signOut()}>
                  <cite className="user-profile">
                    <h2>Logged In</h2>
                  </cite>
                </a>
              )
              : (
                <Link to="/signin">
                  <a href="/signin">Sign In</a>
                </Link>
              )}
            </li>
          </ul>
        </div>
      </nav>
    </Router>
  )
}

export default NavBar;