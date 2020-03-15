import React from 'react';

// css
import './Card.scss';

const CartLine = (props) => {
    return(
        <div className="Card-content">
            {props.children}
        </div>
    )
}

export default CartLine;