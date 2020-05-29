import React, { Component } from 'react';

class Board extends Component {
    constructor(props) {
        super(props);
        console.log(this.props)
    }
    render() {
        const ship = this.props.move;
        return (
            <div className="Board">
                <div className="groupPlanets">
                    <ul className="listPlanets">
                        <span className="ship"
                              style={{left: ship.x, top: ship.y, transform: `rotate(${ship.rotate}deg)`}}></span>
                        <li>
                            <span className="horizontalLine"></span>
                        </li>
                        <li>
                            <span className="verticalLine lineRight"></span>
                        </li>
                        <li>
                            <span className="horizontalLine"></span>
                        </li>
                        <li>
                            <span className="verticalLine lineLeft"></span>
                        </li>
                        <li>
                            <span className="horizontalLine"></span>
                        </li>
                    </ul>
                </div>
            </div>
        )
    }
}


export default Board;