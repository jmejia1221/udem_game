import React from 'react';
import Login from './components/Login/Login';
import Home from './Containers/Home';
import fire from './config/fire';

// CSS
import './App.css';

class App extends React.Component {
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
        {this.state.user ? (<Home />) : (<Login />)}
      </div>
    );
  }
}

export default App;
