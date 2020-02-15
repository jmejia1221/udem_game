import React, { Component } from 'react';
import Login from '../components/Login/Login';
import Signin from '../components/Signin/Signin';

// CSS
import './LoginContainer.css';

class LoginContainer extends Component {
    constructor(props) {
        super(props);

        this.state = {
            changeForm: false
        }

        this.toggleForm = this.toggleForm.bind(this);
    }

    toggleForm() {
        this.setState(state => ({
            changeForm: !state.changeForm
        }))
    }

    render() {
        const changeForm = this.state.changeForm;
        let form = null;
        if (changeForm) {
            form = <Signin handleForm={this.toggleForm} />;
        } else {
            form = <Login handleForm={this.toggleForm} />;
        }

        return (
            <div className="LoginContainer">
                <div className="content">
                    <span className="bg-triangle"></span>
                    <span className="bg-triangle bg-triangle-full"></span>
                    <span className="bg-triangle bg-triangle-lightblue"></span>
                    <span className="bg-triangle  bg-triangle-darkblue"></span>
                    <div className={`${ changeForm ? 'formSign' : ''} form`}>
                        <h1 className="title">
                            <span>{ changeForm ? 'Sign into' : 'Log into'}</span>
                            <strong>Udem game</strong>
                        </h1>
                        {form}
                    </div>
                </div>
            </div>
        )
    }
}

export default LoginContainer;