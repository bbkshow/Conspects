import { createStore, combineReducers } from "redux";
import timerReducer from "./timerReducer";

// let reducer = (state = 0, action) => {};

let rootReducer = combineReducers({
    timer: timerReducer,
});

let store = createStore(
    rootReducer,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default store;

// state = timer{
//     step: 5
//     value: 0
// }

/* 
Store
dispatch: ƒ dispatch(action)
getState: ƒ getState()
replaceReducer: ƒ replaceReducer(nextReducer)
subscribe: ƒ subscribe(listener)
Symbol(observable): ƒ observable()
*/

/*
state = {
    value : valueReducer,
    step: stepReducer
}
*/
