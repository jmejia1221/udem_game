import React, { Component } from 'react';
import fire from '../../config/fire';

import Signin from '../Signin/Signin';

// CSS
import LoginStyle from './Login.css';

class Login extends Component {

    constructor(props) {
        super(props);

        this.state = {
            changeForm: false
        }

        this.toggleForm = this.toggleForm.bind(this);
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

    toggleForm() {
        this.setState(state => ({
            changeForm: !state.changeForm
        }))
    }

    render() {
        const changeForm = this.state.changeForm;
        if (changeForm) {
            return (
                <Signin handleForm={this.toggleForm} />
            )
        } else {
            return (
                <div>
                    <div>
                        <div>Email</div>
                        <input id="email" placeholder="Enter Email.." type="email" />
                    </div>
                    <div>
                        <div>Password</div>
                        <input id="password" placeholder="Enter Password" type="password" />
                    </div>
                    <button onClick={this.login}>Login</button>
                    <button onClick={this.toggleForm}>Sign Up</button>
                </div>
            )
        }
    }
}

export default Login;