import React, { Component } from 'react';
import TaskEditor from './TaskEditor';
import TaskList from './TaskList';
import Filter from './Filter';

export default class Tasks extends Component {
    render() {
        return (
            <>
                <TaskEditor />
                <Filter />
                <TaskList />
            </>
        );
    }
}
