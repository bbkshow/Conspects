import React from 'react';
import './TaskList.css';

import TaskListItem from './TaskListItem';
export default function TaskList({ tasks, onRemoveTask, onUpdateTask }) {
    return (
        <div>
            <ul className="TaskList">
                {tasks.map(({ id, text, completed }) => (
                    <TaskListItem
                        key={id}
                        text={text}
                        completed={completed}
                        onRemove={() => onRemoveTask(id)}
                        onUpdate={() => onUpdateTask(id)}
                    />
                ))}
            </ul>
        </div>
    );
}
