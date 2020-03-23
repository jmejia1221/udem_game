import React, { Component } from 'react';
import fire from '../config/fire';

import Card from '../components/Cards/Card';
import CartLine from '../components/Cards/CardLine';

import BoardContainer from '../components/Board/BoardContainer';
import Board from '../components/Board/Board';
import TextEditor from '../components/Board/TextEditor';

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
                <BoardContainer>
                    <Board />
                    <TextEditor />
                </BoardContainer>
            </div>
        )
    }
}

export default Home;