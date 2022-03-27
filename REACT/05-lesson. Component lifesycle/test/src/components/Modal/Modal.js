import React, { Component } from 'react';
import './Modal.css';

export default class Modal extends Component {
    componentDidMount() {
        console.log('ModalDidMount...');

        window.addEventListener('keydown', this.handleKeydown);
    }

    componentWillUnmount() {
        console.log('componentWillUnmount');
        window.removeEventListener('keydown', this.handleKeydown);
    }

    handleKeydown = event => {
        if (event.code === 'Escape') {
            this.props.onCloseModal();
        }
    };

    render() {
        return (
            <div className="Backdrop">
                <div className="Modal">{this.props.children}</div>
            </div>
        );
    }
}
