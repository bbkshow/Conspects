import React, { Component } from 'react';

import TaskEditor from './TaskEditor';
import TaskList from './TaskList';
import createTask from '../../utils/create-task';

export default class Tasks extends Component {
    // static defaultProps = {}
    // static propTypes = {}

    state = {
        tasks: [],
    };

    addTask = () => {
        // console.log(createTask());
        let task = createTask();
        this.setState((prevState, props) => {
            return {
                tasks: [...prevState.tasks, task],
            };
        });
    };

    removeTask = (taskId, text) => {
        // console.log(text);
        // console.log(taskId);

        // this.setState((prevState, props) => {
        //     return {
        //         tasks: prevState.tasks.filter(task => {
        //             return task.id !== taskId;
        //         }),
        //     };
        // });

        // this.setState((prevState, props) => {
        //     return { tasks: prevState.tasks.filter(({ id }) => id !== taskId) };
        // });

        this.setState((prevState, props) => ({
            tasks: prevState.tasks.filter(({ id }) => id !== taskId),
        }));
    };

    render() {
        let { tasks } = this.state;
        return (
            <>
                <TaskEditor onAddTask={this.addTask} />
                {/* <TaskList tasks={tasks} onRemoveTask={this.removeTask} /> */}

                {tasks.length > 0 && (
                    <TaskList tasks={tasks} onRemoveTask={this.removeTask} />
                )}
            </>
        );
    }
}
