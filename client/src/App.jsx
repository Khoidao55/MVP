import React, { useState, useEffect } from "react";
import {
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
  const [searchedUser, setSearchedUser] = useState('');
  console.log(searchedUser);

  useEffect(() => {
    console.log('triggered');
    return(
    <Route exact path={`/${searchedUser}`} >
      <SpecificUserUploadPage searchedUser={searchedUser}/>
    </Route>
    )
  }, [searchedUser]);

  if(searchedUser === '') {
    return(
      <div>
        <NavBar currentUser={user} searchedUser={setSearchedUser} />

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
            {/* <Route exact path={`/${searchedUser}`} >
              <SpecificUserUploadPage />
            </Route> */}
          </Switch>

      </div>
    )
  } else {
    return(
      <div>
        {console.log('in here', searchedUser)}
        <NavBar currentUser={user} searchedUser={setSearchedUser} />
        <Router>
          <Switch>
            {/* <Route exact path={`/${searchedUser}`}> */}
              {/* This will be the home page for the searched User*/}
            {/* </Route> */}
            <Route exact path="/signin">
              <SignInPage setIsRegistered={setIsRegistered} setUser={setUser} />
            </Route>
            <Route exact path="/signup">
              <SignUpPage setIsRegistered={setIsRegistered} />
            </Route>
            {/* <Route exact path={`/${searchedUser}`} >
              <SpecificUserUploadPage searchedUser={searchedUser}/>
            </Route> */}
          </Switch>
        </Router>
      </div>
    )
  }
}

export default App;

//testing