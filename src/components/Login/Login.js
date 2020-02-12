import React from 'react';
import fire from '../../config/fire';

// CSS
import LoginStyle from './Login.css';

class Login extends React.Component {

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

    logout() {
        const email = document.querySelector("#email").value;
        const password = document.querySelector("#password").value;

        fire.auth().createUserWithEmailAndPassword(email, password)
            .then((u) => {
                console.log('Successfully Signed up');
            })
            .catch((err) => {
                console.log('Error: ', err.toString());
            })

    }

    render() {
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
                <button onClick={this.logout}>Sign Up</button>
            </div>
        )
    }
}

export default Login;