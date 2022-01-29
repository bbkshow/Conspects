import React from 'react';
import { connect } from 'react-redux';
import tasksActions from '../../redux/tasks/taskActions';

function Filter({ value, onchangeFilter }) {
    return (
        <>
            <br />
            <label>
                Filter Tasks
                <input
                    type="text"
                    value={value}
                    onChange={evt => onchangeFilter(evt.target.value)}
                />
            </label>
        </>
    );
}

let mapStateToProps = state => ({
    value: state.tasks.filter,
});

let mapDispathToProps = {
    onchangeFilter: tasksActions.changeFilter,
};

export default connect(mapStateToProps, mapDispathToProps)(Filter);
