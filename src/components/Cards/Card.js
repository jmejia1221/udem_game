import React, { Component } from 'react';

import Modal from '../Modal/Modal';

class Card extends Component {
    constructor(props) {
        super(props);

        this.state = {
            openModalAnimated: false
        }
        this.toggleModal = this.toggleModal.bind(this)
        console.log(this.props)
    }

    toggleModal() {
        this.setState((state) => ({
            openModalAnimated: !state.openModalAnimated
        }))
    }

    render() {
        return(
            <React.Fragment>
                <div className="Card">
                    <span className="planet"></span>
                    <span className="space-triangle small"></span>
                    <span className="space-triangle medium"></span>
                    <span className="space-triangle"></span>
                    <span className="start-button" onClick={this.toggleModal}>+</span>
                </div>
                {
                    this.props.canUseModal &&
                    <Modal closeModal={this.toggleModal} 
                        animated={this.state.openModalAnimated}>
                            {this.props.children}
                    </Modal>
                }
            </React.Fragment>
        )
    }
}

export default Card;