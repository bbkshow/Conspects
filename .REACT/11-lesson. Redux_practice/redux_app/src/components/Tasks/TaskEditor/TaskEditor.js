import React, { Component } from 'react';
import { connect } from 'react-redux';
import taskActions from '../../../redux/tasks/taskActions';

class TaskEditor extends Component {
    state = {
        text: '',
    };

    handleChange = event => {
        this.setState({
            text: event.target.value,
        });
    };

    handleSubmit = event => {
        event.preventDefault();
        console.log('Submit');
        this.props.onAddTask(this.state.text);

        this.setState({
            text: '',
        });
    };

    render() {
        let { text } = this.state;

        // console.log(taskActions.addTask);
        return (
            <form onSubmit={this.handleSubmit}>
                <label>
                    <input
                        type="text"
                        value={text}
                        onChange={this.handleChange}
                    />
                </label>

                <button type="submit">Добавить заметку </button>
            </form>
        );
    }
}

// let mapDispatchToProps = dispatch => {
//     return {
//         onAddTask: text => dispatch(taskActions.addTask(text)),
//     };
// };

let mapDispatchToProps = {
    onAddTask: taskActions.addTask,
};

export default connect(null, mapDispatchToProps)(TaskEditor);
