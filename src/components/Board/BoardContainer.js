import React, { Component } from 'react';

import Board from '../Board/Board';
import TextEditor from '../Board/TextEditor';

// css
import './Board.scss';

class MainBoard extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return(
            <div className="MainBoard">
                <Board />
                <TextEditor />
            </div>
        )
    }
}


export default MainBoard;
