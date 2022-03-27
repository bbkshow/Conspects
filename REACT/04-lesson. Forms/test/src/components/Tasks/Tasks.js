import React, { Component } from 'react';

import TaskEditor from './TaskEditor';
import TaskList from './TaskList';
// import createTask from '../../utils/create-task';
import { v4 as uuidv4 } from 'uuid';

export default class Tasks extends Component {
    state = {
        tasks: [],
    };

    addTask = text => {
        const task = {
            id: uuidv4(),
            text,
            completed: false,
        };

        this.setState((prevState, props) => {
            return {
                tasks: [...prevState.tasks, task],
            };
        });
    };

    removeTask = (taskId, text) => {
        this.setState((prevState, props) => ({
            tasks: prevState.tasks.filter(({ id }) => id !== taskId),
        }));
    };

    updateCompleted = taskId => {
        this.setState(prevState => ({
            tasks: prevState.tasks.map(task => {
                return task.id === taskId
                    ? { ...task, completed: !task.completed }
                    : task;
            }),
        }));
    };

    render() {
        let { tasks } = this.state;
        return (
            <>
                <TaskEditor onAddTask={this.addTask} />

                {tasks.length > 0 && (
                    <TaskList
                        tasks={tasks}
                        onRemoveTask={this.removeTask}
                        onUpdateTask={this.updateCompleted}
                    />
                )}
            </>
        );
    }
}
