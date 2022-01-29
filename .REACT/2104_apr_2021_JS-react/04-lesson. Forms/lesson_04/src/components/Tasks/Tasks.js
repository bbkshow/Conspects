import React, { Component } from 'react';

import TaskEditor from './TaskEditor';
import TaskList from './TaskList';
// import createTask from '../../utils/create-task';

import Filter from './Filter';
import { v4 as uuidv4 } from 'uuid';

export default class Tasks extends Component {
    state = {
        tasks: [],
        filter: '',
        firstName: 'Vova',
        lastName: 'Smith',
    };

    // addTask = () => {
    //     let task = createTask();
    //     this.setState((prevState, props) => {
    //         return {
    //             tasks: [...prevState.tasks, task],
    //         };
    //     });
    // };

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

    removeTask = taskId => {
        this.setState((prevState, props) => ({
            tasks: prevState.tasks.filter(({ id }) => id !== taskId),
        }));
    };

    // updateCompleted = taskId => {
    //     this.setState(prevSate => ({
    //         tasks: prevSate.tasks.map(task => {
    //             return task.is === taskId
    //                 ? { ...task, comleted: !task.completed }
    //                 : task;
    //         }),
    //     }));
    // };

    updateCompleted = taskId => {
        this.setState(prevState => {
            return {
                tasks: prevState.tasks.map(task => {
                    if (task.id === taskId) {
                        return {
                            ...task,
                            completed: !task.completed,
                        };
                    }
                    return task;
                }),
            };
        });
    };

    changeFilter = filter => {
        this.setState({ filter });
    };

    getVisibleTasks = () => {
        let { tasks, filter } = this.state;
        return tasks.filter(task => task.text.includes(filter));
    };

    render() {
        let { tasks, filter } = this.state;
        let visibleTasks = this.getVisibleTasks();

        let fullname = this.state.firstName + ' ' + this.state.lastName;
        return (
            <>
                <h1>{fullname}</h1>
                <TaskEditor onAddTask={this.addTask} />
                {visibleTasks.length > 0 && (
                    <Filter value={filter} onchangeFilter={this.changeFilter} />
                )}

                {tasks.length > 0 && (
                    <TaskList
                        // tasks={tasks}
                        tasks={visibleTasks}
                        onRemoveTask={this.removeTask}
                        onUpdateTask={this.updateCompleted}
                    />
                )}
            </>
        );
    }
}

// state = {
//     good: 10,
//     bad: 25,
//     neutral: 30
// }

// let total = Object.values(this.state).reduce((acc, like)=>{
//     return acc + like
// }, acc)

// {total}
