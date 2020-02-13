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
            <div>
                Signing
                <div>
                    <div>Name</div>
                    <input id="name" placeholder="Enter Name.." type="text" />
                </div>
                <div>
                    <div>Email</div>
                    <input id="signinEmail" placeholder="Enter Email.." type="email" />
                </div>
                <div>
                    <div>Password</div>
                    <input id="signinPassword" placeholder="Enter Password" type="password" />
                </div>
                <button onClick={this.changeForm}>Login</button>
                <button onClick={this.signIn}>Sign Up</button>
            </div>
        )
    }
}

export default Signin;