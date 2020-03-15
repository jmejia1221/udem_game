import React, { Component } from 'react';
import fire from '../config/fire';
import Card from '../components/Cards/Card';
import CartLine from '../components/Cards/CardLine';

// css
import './Home.scss';
class Home extends Component {

    logout() {
        fire.auth().signOut();
    }

    render() {
        return (
            <div className="wrapper">
                <header className="header">
                    <span className="logo">
                        <h1>Space Game | <span className="udem">UDEM</span></h1>
                    </span>
                    <span className="logout" onClick={this.logout}>
                        <span className="logout-icon"></span>
                        Logout
                    </span>
                </header>
                <CartLine>
                    <Card></Card>
                    <Card></Card>
                    <Card></Card>
                    <Card></Card>
                </CartLine>
            </div>
        )
    }
}

export default Home;