import React from 'react';

// css
import './Board.scss';

const BoardContainer = (props) => {
    return(
        <div className="BoardContainer">
            {props.children}
        </div>
    )
}


export default BoardContainer;
