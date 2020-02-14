import React, { Component } from 'react';
import fire from '../../config/fire';

import Signin from '../Signin/Signin';

// CSS
import LoginStyle from './Login.css';

class Login extends Component {

    constructor(props) {
        super(props);

        this.changeForm = props.handleForm;
    }

    login() {
        const email = document.querySelector("#email").value;
        const password = document.querySelector("#password").value;

        fire.auth().signInWithEmailAndPassword(email, password)
            .then((u) => {
                console.log('Successfully Logged in');
            })
            .catch((err) => {
                console.log('Error: ', err.toString());
            })
    }

    render() {
        return (
            <div className="Login">
                <div>
                    <input id="email" placeholder="LOGIN..." type="email" />
                </div>
                <div>
                    <input id="password" placeholder="PASSWORD..." type="password" />
                </div>
                <button className="enterButton" onClick={this.login}>Enter</button>
                <div className="signUp">
                    <a className="signUp" onClick={this.changeForm}>Sign Up</a>
                </div>
            </div>
        )
    }
}

export default Login;