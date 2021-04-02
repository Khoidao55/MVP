import React, { useState, useEffect } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import NavBar from './Components/NavBar/NavBar.jsx';
import UploadImage from './Components/UploadImage/UploadImage.jsx';
import SpecificUserUploadPage from './Components/SpecificUserUploadPage/SpecificUserUploadPage.jsx';
import SignInPage from "./Components/SignInPage/SignInPage.jsx";
import SignUpPage from "./Components/SignUpPage/SignUpPage.jsx";
import './App.css';

const App = () => {
  const [user, setUser] = useState('anonymous');
  const [isRegistered, setIsRegistered] = useState(false);
  console.log(user);
  return(
    <div>
      <NavBar currentUser={user} />
      <Router>
        <Switch>
          <Route exact path="/">
            <UploadImage user={user}/>
          </Route>
          <Route exact path="/signin">
            <SignInPage setIsRegistered={setIsRegistered} setUser={setUser} />
          </Route>
          <Route exact path="/signup">
            <SignUpPage setIsRegistered={setIsRegistered} />
          </Route>
        </Switch>
        <Switch>
          <Route exact path={`/${user}`} >
            <SpecificUserUploadPage />
          </Route>
        </Switch>
      </Router>
    </div>
  )
}

export default App;