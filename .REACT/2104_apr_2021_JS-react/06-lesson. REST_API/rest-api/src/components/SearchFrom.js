import React, { Component } from "react";

export default class SearchFrom extends Component {
    state = {
        inputValue: "",
    };

    handleSubmit = (event) => {
        event.preventDefault();
        this.props.onSubmit(this.state.inputValue);
        this.setState({ inputValue: "" });
    };

    handlChange = (event) => {
        this.setState({ inputValue: event.target.value });
    };
    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <label>
                    <input
                        onChange={this.handlChange}
                        type="text"
                        value={this.state.inputValue}
                    />
                </label>
                <button type="submit">Search</button>
            </form>
        );
    }
}
