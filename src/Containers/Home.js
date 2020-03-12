import React, { Component } from 'react';
import fire from '../config/fire';
import Card from '../components/Cards/Card';
import CartLine from '../components/Cards/CardLine';


class Home extends Component {

    logout() {
        fire.auth().signOut();
    }

    render() {
        return (
            <div>
                <h1>You are logged in...</h1>
                <CartLine>
                    <Card></Card>
                    <Card></Card>
                    <Card></Card>
                </CartLine>
                <button onClick={this.logout}>Logout</button>
            </div>
        )
    }
}

export default Home;