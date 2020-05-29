import React, { Component } from 'react';
import fire from '../config/fire';

import Card from '../components/Cards/Card';
import CartLine from '../components/Cards/CardLine';

import MainBoard from '../components/Board/BoardContainer';

import ConstData from '../constData';

// css
import './Home.scss';
class Home extends Component {

    constructor(props) {
        super(props);

        this.database = fire.database().ref().child('options');
        this.state = {
            options: 0
        }
        console.log(ConstData)
    }

    componentDidMount() {
        this.database.on('value', snap => {
            this.setState({
                options: snap.val()
            })
        })
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
                        Logout {this.state.options}
                    </span>
                </header>
                <CartLine>
                    {ConstData.map((obj, i) => {
                        return (<Card key={i} canUseModal={true}>
                            <div>
                                <h1 className="modalTitle">{obj.title}</h1>
                                <p className="modalDescription">{obj.description}</p>
                                <ul className="modalList">
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
                <MainBoard />
            </div>
        )
    }
}

export default Home;