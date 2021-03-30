import React, { Component } from "react";
import { auth } from "./FireBase/FireBase.utils";

class App extends Component {
  constructor() {
    super();

    this.state = {
      currentUser: null,
      signInPage: false,
    };
  }

  unsubscribeFromAuth = null;

  componentDidMount() {
    this.unsubscribeFromAuth = auth.onAuthStateChanged((user) => {
      this.setState({ currentUser: user });
      console.log(user);
    });
  }

  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }

  render() {
    return (
      <div>
        <h1>Hello</h1>
      </div>
    );
  }
}

export default App;