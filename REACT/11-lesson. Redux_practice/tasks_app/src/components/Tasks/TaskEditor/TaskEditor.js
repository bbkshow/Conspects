import React, { Component } from 'react';

export default class TaskEditor extends Component {
    state = {
        text: '',
    };

    handleChange = event => {
        // console.log(event.target.value);
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

// import React from 'react';
// import './TaskEditor.css';

// export default function TaskEditor({ onAddTask }) {
//     return (
//         <div>
//             <button onClick={onAddTask} type="button">
//                 Add task
//             </button>
//         </div>
//     );
// }
