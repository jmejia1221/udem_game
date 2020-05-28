import React from 'react';


import './Modal.scss';

const Modal = (props) => {
    return(
        <div className={`Modal ${!props.animated ? 'close' : ''}`}>
            <div className={`contentModal ${props.animated ? 'contentAnimated' : 'closeModal'}`}>
                {props.children}
                    <div>
                        <button onClick={props.closeModal}></button>
                    </div>
            </div>
        </div>
    )
}

export default Modal;