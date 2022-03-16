import React from 'react';
import './TaskList.css';
import TaskListItem from './TaskListItem';

export default function TaskList({ tasks, onRemoveTask }) {
    return (
        <div>
            {console.log(tasks)}

            <ul className="TaskList">
                {tasks.map(({ id, text, completed }) => (
                    <TaskListItem
                        key={id}
                        text={text}
                        onRemove={() => onRemoveTask(id)}
                    />
                ))}
            </ul>
        </div>
    );
}
