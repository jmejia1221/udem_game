import React, { Component } from 'react';
import fire from '../config/fire';

import Card from '../components/Cards/Card';
import CartLine from '../components/Cards/CardLine';

import BoardContainer from '../components/Board/BoardContainer';
import Board from '../components/Board/Board';
import TextEditor from '../components/Board/TextEditor';

import ConstData from '../constData';

// css
import './Home.scss';
class Home extends Component {

    constructor(props) {
        super(props);
        console.log(ConstData)
    }

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
                    {ConstData.map((obj, i) => {
                        return (<Card key={i} canUseModal={true}>
                            <div>
                                <h1>{obj.title}</h1>
                                <h4>{obj.description}</h4>
                                <ul>
                                    {obj.options.map((option, i) => {
                                        return (
                                            <li key={i}>{option.title}</li>
                                        )
                                    })}
                                </ul>
                            </div>
                        </Card>) 
                    })}
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