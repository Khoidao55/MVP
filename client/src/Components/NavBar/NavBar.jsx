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

  const onClickHome = () => {
    <Redirect to='/' />
  }

  const onClickSignIn = () => {
    <Redirect to='/signin' />
  }

  return (
    <Router>
      <nav>
        <div className="row">
          <ul className="main-nav">
            <li>
              {/* <Link to="/"> */}
              <a href="/" onClick={onClickHome}>Home</a>
              {/* </Link> */}
            </li>
            <li>
              {currentUser !== 'anonymous'
              ? (
                <Link to={`/${currentUser}`}>
                  <a>{currentUser}</a>
                </Link>
              )
              : (
                // <Link to="/signin">
                  <a href="/signin" onClick={onClickSignIn}>Sign In</a>
                // </Link>
              )}
            </li>
          </ul>
        </div>
      </nav>
    </Router>
  )
}

export default NavBar;