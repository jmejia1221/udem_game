import React, { Component } from 'react';
import LoginContainer from './Containers/LoginContainer';
import Home from './Containers/Home';
import fire from './config/fire';

// CSS
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      user: null
    }

    this.authListener = this.authListener.bind(this);
  }

  componentDidMount() {
    this.authListener();
  }

  authListener() {
    fire.auth().onAuthStateChanged((user) => {
      if (user) {
        this.setState({ user });
      } else {
        this.setState({ user: null });
      }
    })
  }

  render() {
    return (
      <div className="App">
        {this.state.user ? (<Home />) : (<LoginContainer />)}
      </div>
    );
  }
}

export default App;
