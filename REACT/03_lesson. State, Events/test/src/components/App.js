import React, { Component } from 'react';
import propTypes from 'prop-types';
import Layout from './Layout';

import TaskEditor from './TaskEditor/TaskEditor';
import TaskList from './TaskList/TaskList';
import cresteTask from '../utils/create-task';
import createTask from '../utils/create-task';

export default class App extends Component {
    // static defaultProps = {};
    // static propTypes = {};

    state = {
        tasks: [],
    };

    addTask = () => {
        // console.log(cresteTask());
        let task = createTask();
        this.setState((prevState, props) => {
            return {
                tasks: [...prevState.tasks, task],
            };
        });
    };

    removeTask = taskId => {
        // this.setState((prevState, props) => {
        //     return {
        //         tasks: prevState.tasks.filter(task => {
        //             return task.id !== taskId;
        //         }),
        //     };
        // });

        this.setState((prevState, props) => {
            return { tasks: prevState.tasks.filter(({ id }) => id !== taskId) };
        });
    };

    render() {
        let { tasks } = this.state;
        return (
            <Layout>
                <TaskEditor onAddTask={this.addTask} />
                {tasks.length > 0 && (
                    <TaskList tasks={tasks} onRemoveTask={this.removeTask} />
                )}
            </Layout>
        );
    }
}

// import React from 'react';
// import Layout from './Layout';
// // import Counter from './Counter';

// function App() {
//     return <Layout>{/* <Counter initialValue={0} step={1} /> */}</Layout>;
// }

// export default App;
