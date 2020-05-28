import React, { Component } from 'react';

class Board extends Component {
    render() {
        return (
            <div className="Board">
                <div className="groupPlanets">
                    <ul className="listPlanets">
                        <span className="ship"></span>
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