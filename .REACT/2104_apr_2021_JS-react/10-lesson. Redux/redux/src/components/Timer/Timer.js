import React from "react";
import { connect } from "react-redux";
import * as timerActions from "../../redux/timerActions";

function Timer({ value, step, onIncrement, onDecrement }) {
    return (
        <div>
            <button onClick={() => onIncrement(step)} type="button">
                {" "}
                Increment (+)
            </button>
            <p>{value}</p>
            <button onClick={() => onDecrement(step)} type="button">
                {" "}
                Decrement (-)
            </button>
        </div>
    );
}

let mapStateToProps = (state) => {
    return {
        x: 10,
        y: 20,
        value: state.timer.value,
        step: state.timer.step,
    };
};

// let mapDispatchToProps = (dispatch) => ({
//     onIncrement: (step) => dispatch(timerActions.increment(step)),
//     onDecrement: (step) => dispatch(timerActions.decrement(step)),
// });

let mapDispatchToProps = {
    onIncrement: timerActions.increment,
    onDecrement: timerActions.decrement,
};

export default connect(mapStateToProps, mapDispatchToProps)(Timer);
