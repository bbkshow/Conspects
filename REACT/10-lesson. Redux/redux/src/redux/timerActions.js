// Action Creators

export const Type = {
    INCREMENT: "INCREMENT",
    DECREMENT: "DECREMENT",
    CHANGE_STEP: "CHANGE_STEP",
};

export let increment = (value) => ({
    type: Type.INCREMENT,
    payload: value,
});

export let decrement = (value) => ({
    type: Type.DECREMENT,
    payload: value,
});

export let changeStep = (step) => ({
    type: Type.CHANGE_STEP,
    payload: {
        step: Number(step),
    },
});

// export default {
//     increment,
//     decrement
// }

//Action Example
// let action = {
//     type: "ADD_DATA",
//     payload: {
//         name: "Vova",
//     },
// };
