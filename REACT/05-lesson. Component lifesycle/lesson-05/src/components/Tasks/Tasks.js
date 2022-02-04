import React, { Component } from "react";

import TaskEditor from "./TaskEditor";
import TaskList from "./TaskList";
// import createTask from '../../utils/create-task';

import Filter from "./Filter";
import { v4 as uuidv4 } from "uuid";

export default class Tasks extends Component {
    state = {
        tasks: [],
        filter: "",
    };

    componentDidMount() {
        console.log("componentDidMount");
        let tasks = localStorage.getItem("tasks");
        console.log(tasks);
        if (tasks) {
            this.setState({
                tasks: JSON.parse(tasks),
            });
        }
    }

    componentDidUpdate(prevProps, prevState) {
        // console.log("prevProps", prevProps);
        // console.log("this.props", this.props);
        // console.log("prevState", prevState);
        // console.log("this.state", this.state);

        if (prevState.tasks !== this.setState.tasks) {
            console.log("Save to LS");
            localStorage.setItem("tasks", JSON.stringify(this.state.tasks));
        }
    }

    addTask = (text) => {
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

    removeTask = (taskId) => {
        this.setState((prevState) => ({
            tasks: prevState.tasks.filter(({ id }) => id !== taskId),
        }));
    };

    updateCompleted = (taskId) => {
        this.setState((prevState) => {
            return {
                tasks: prevState.tasks.map((task) => {
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

    changeFilter = (filter) => {
        this.setState({ filter });
    };

    getVisibleTasks = () => {
        let { tasks, filter } = this.state;
        return tasks.filter((task) => task.text.includes(filter));
    };

    render() {
        let { tasks, filter } = this.state;
        let visibleTasks = this.getVisibleTasks();

        return (
            <>
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
