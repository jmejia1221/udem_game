import React, { Component } from 'react';
import fire from '../../config/fire';

// CSS
import SigningStyle from  './Signing.css';

class Signin extends Component {

    constructor(props) {
        super(props);
        this.changeForm = props.handleForm;
    }

    signIn() {
        const email = document.querySelector("#signinEmail").value;
        const password = document.querySelector("#signinPassword").value;

        fire.auth().createUserWithEmailAndPassword(email, password)
            .then((u) => {
                console.log('Successfully Signed up');
            })
            .catch((err) => {
                console.log('Error: ', err.toString());
            })
    }

    render() {
        return(
            <div className="SignIn">
                <div>
                    <input id="name" placeholder="NAME..." type="text" />
                </div>
                <div>
                    <input id="signinEmail" placeholder="EMAIL..." type="email" />
                </div>
                <div>
                    <input id="signinPassword" placeholder="PASSWORD..." type="password" />
                </div>
                <button className="enterButton" onClick={this.signIn}>Sign In</button>
                <div className="login">
                    <a onClick={this.changeForm}>Login</a>
                </div>
            </div>
        )
    }
}

export default Signin;