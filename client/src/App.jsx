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
import './App.css';

const App = () => {
  const [user, setUser] = useState('anonymous');
  return(
    <div>
      <NavBar currentUser={user} />
      <Router>
        <Switch>
          <Route path="/" component={UploadImage}></Route>
          <Route path="/signin" component={SignInPage}></Route>
            {/* <Route exact path="/signin" component={SignInPage} />
            <Route exact path="/" component={UploadImage} /> */}
        </Switch>
      </Router>
    </div>
  )
}

export default App;