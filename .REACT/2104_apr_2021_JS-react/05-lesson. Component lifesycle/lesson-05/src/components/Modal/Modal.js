import React, { Component } from "react";
import "./Modal.css";

export default class Modal extends Component {
    componentDidMount() {
        console.log("Modal didmount");
        window.addEventListener("keydown", this.handleKeydown);
    }

    componentWillUnmount() {
        console.log("componentWillUnmount..");
        window.removeEventListener("keydown", this.handleKeydown);
    }

    handleKeydown = (event) => {
        if (event.code === "Escape") {
            console.log("нажали ESC");
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
