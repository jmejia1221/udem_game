import React, { Component } from 'react';

class Card extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return(
            <div className="Card">
                <span className="planet"></span>
                <span className="space-triangle small"></span>
                <span className="space-triangle medium"></span>
                <span className="space-triangle"></span>
                <span className="start-button">+</span>
            </div>
        )
    }
}

export default Card;