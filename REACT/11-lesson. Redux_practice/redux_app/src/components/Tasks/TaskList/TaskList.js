import React from 'react';
import { connect } from 'react-redux';
import tasksActions from '../../../redux/tasks/taskActions';

import TaskListItem from './TaskListItem';
import './TaskList.css';

function TaskList({ tasks, onRemoveTask, toggleCompleted }) {
    return (
        <div>
            <ul className="TaskList">
                {tasks.map(({ id, text, completed }) => (
                    <TaskListItem
                        key={id}
                        text={text}
                        completed={completed}
                        onRemove={() => onRemoveTask(id)}
                        onUpdate={() => toggleCompleted(id)}
                    />
                ))}
            </ul>
        </div>
    );
}

// let mapStateToProps = state => ({
//     tasks: state.tasks.items,
// });

// let mapStateToProps = state => {
//     let { items, filter } = state.tasks;
//     let visibleTasks = items.filter(task => task.text.includes(filter));
//     return {
//         tasks: visibleTasks,
//     };
// };

let mapStateToProps = state => {
    let { items, filter } = state.tasks;
    let filterToLower = filter.toLowerCase();

    let visibleTasks = items.filter(task =>
        task.text.toLowerCase().includes(filterToLower),
    );

    return {
        tasks: visibleTasks,
    };
};

let mapDispathToProps = {
    onRemoveTask: tasksActions.removeTask,
    toggleCompleted: tasksActions.toggleCompleted,
};

export default connect(mapStateToProps, mapDispathToProps)(TaskList);
