import React, { Component } from "react";

export default class SearchForm extends Component {
    state = {
        value: "",
    };

    handleSubmit = (evt) => {
        evt.preventDefault();
        // console.log("Form submit", this.state.value);
        this.props.onSubmit(this.state.value);
        this.setState({ value: "" });
    };

    handleChange = (evt) => {
        this.setState({ value: evt.target.value });
    };

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <input
                    onChange={this.handleChange}
                    type="text"
                    value={this.state.value}
                />

                <button type="submit">Search</button>
            </form>
        );
    }
}
