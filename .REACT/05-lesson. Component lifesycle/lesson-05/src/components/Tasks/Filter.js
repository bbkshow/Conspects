import React from 'react';

export default function Filter({ value, onchangeFilter }) {
    return (
        <>
            <br />
            <label>
                Filter Tasks
                <input
                    type="text"
                    value={value}
                    // onChange={onchangeFilter}
                    onChange={evt => onchangeFilter(evt.target.value)}
                />
            </label>
        </>
    );
}
