import { combineReducers } from "redux";
import { Type } from "./timerActions";

let valueReducer = (state = 0, { type, payload }) => {
    switch (type) {
        case Type.INCREMENT:
            return state + payload;
        case Type.DECREMENT:
            // return state - payload;
            return state - payload < 0 ? 0 : state - payload;

        default:
            return state;
    }
};

let stepReducer = (state = 5, { type, payload }) => {
    switch (type) {
        case Type.CHANGE_STEP:
            return payload.step;

        default:
            return state;
    }
};

export default combineReducers({
    value: valueReducer,
    step: stepReducer,
});
