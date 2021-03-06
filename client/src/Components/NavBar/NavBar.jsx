import React, { useState, useEffect } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Redirect
} from "react-router-dom";
import { auth } from "../../FireBase/FireBase.utils";
import SearchBar from '../SearchBar/SearchBar.jsx';
import './NavBar.css';

const NavBar = ({ currentUser, searchedUser }) => {

  const onClickHome = (event) => {
    <Redirect to='/' />
  }

  const onClickSignIn = (event) => {
    <Redirect to='/signin' />
  }

  return (
    <div>
      <SearchBar searchedUser={searchedUser} />
    <Router>
      <nav>
        <div className="row">
          <Link to='/'>
            <img onClick={onClickHome} src='https://i.pinimg.com/originals/30/ae/8e/30ae8e8ee24b13b2e18743202ddd8d00.jpg' alt="Homepage navigation" className="logo" />
          </Link>
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
                  <a href={`/${currentUser}`}>{currentUser}</a>
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
    </div>
  )
}

export default NavBar;