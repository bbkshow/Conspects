import { v4 as uuidv4 } from 'uuid';
import actionTypes from './tascsActionTypes';

console.log(actionTypes);

let addTask = text => ({
    type: actionTypes.ADD,
    payload: {
        task: {
            id: uuidv4(),
            text,
            completed: false,
        },
    },
});

let removeTask = taskId => ({
    type: actionTypes.REMOVE,
    payload: {
        taskId,
    },
});

let toggleCompleted = taskId => ({
    type: actionTypes.TOGGLE_COMPLETED,
    payload: {
        taskId,
    },
});

let changeFilter = filter => ({
    type: actionTypes.CHANGE_FILTER,
    payload: {
        filter,
    },
});

export default {
    addTask,
    removeTask,
    toggleCompleted,
    changeFilter,
};
