import React from 'react';

export default function TaskListItem({ text, comleted, onRemove, onUpdate }) {
    return (
        <li className="TaskList-item">
            <p className="TaskList-text">{text}</p>
            <section className="TaskList-actions">
                <label>
                    <input
                        type="checkbox"
                        checked={comleted}
                        onChange={onUpdate}
                    />
                </label>

                <button
                    onClick={onRemove}
                    type="button"
                    className="TaskList-button"
                >
                    Delete
                </button>
            </section>
        </li>
    );
}
