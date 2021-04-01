import React, { useState, useEffect } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import NavBar from './Components/NavBar/NavBar.jsx';
import UploadImage from './Components/UploadImage/UploadImage.jsx';
import SignInPage from "./Components/SignInPage/SignInPage.jsx";
import SignUpPage from "./Components/SignUpPage/SignUpPage.jsx";
import './App.css';

const App = () => {
  const [user, setUser] = useState('anonymous');
  return(
    <div>
      <NavBar currentUser={user} />
      <Router>
        <Switch>
          <Route path="/home">
            <UploadImage user={user}/>
          </Route>
          <Route path="/" component={SignInPage}></Route>
          <Route path="/signup" component={SignUpPage}></Route>
        </Switch>
      </Router>
    </div>
  )
}

export default App;