import React, { Component } from 'react';

export default class TaskEditor extends Component {
    state = {
        text: '',
    };

    handleSubmit = event => {
        event.preventDefault();
        console.log('Submit');
        this.props.onAddTask(this.state.text);
        this.setState({
            text: '',
        });
    };

    handleChange = event => {
        this.setState({
            text: event.target.value,
        });
    };

    render() {
        let { text } = this.state;

        return (
            <form onSubmit={this.handleSubmit}>
                <label>
                    <input
                        type="text"
                        value={text}
                        onChange={this.handleChange}
                    />
                </label>
                <button type="submit">Добавить заметку</button>
            </form>
        );
    }
}
