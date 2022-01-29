// state = {
//     tasks: {
//         items: [],
//         filter: '',
//     },
// };

import { combineReducers } from 'redux';
import actionTypes from './tascsActionTypes';

// console.log(actionTypes);

let itemsReducer = (state = [], { type, payload }) => {
    switch (type) {
        case actionTypes.ADD:
            return [...state, payload.task];

        case actionTypes.REMOVE:
            return state.filter(task => task.id !== payload.taskId);

        case actionTypes.TOGGLE_COMPLETED:
            return state.map(task => {
                return task.id === payload.taskId
                    ? { ...task, completed: !task.completed }
                    : task;
            });

        default:
            return state;
    }
};

let filterReducer = (state = '', { type, payload }) => {
    switch (type) {
        case actionTypes.CHANGE_FILTER:
            return payload.filter;

        default:
            return state;
    }
};

export default combineReducers({
    items: itemsReducer,
    filter: filterReducer,
});

// addTask = text => {
//     const task = {
//         id: uuidv4(),
//         text,
//         completed: false,
//     };

//     this.setState((prevState, props) => {
//         return {
//             tasks: [...prevState.tasks, task],
//         };
//     });
// };

// removeTask = taskId => {
//     this.setState((prevState, props) => ({
//         tasks: prevState.tasks.filter(({ id }) => id !== taskId),
//     }));
// };

// updateCompleted = taskId => {
//     this.setState(prevState => {
//         return {
//             tasks: prevState.tasks.map(task => {
//                 if (task.id === taskId) {
//                     return {
//                         ...task,
//                         completed: !task.completed,
//                     };
//                 }
//                 return task;
//             }),
//         };
//     });
// };

// changeFilter = filter => {
//     this.setState({ filter });
// };

// getVisibleTasks = () => {
//     let { tasks, filter } = this.state;
//     return tasks.filter(task => task.text.includes(filter));
// };
