import React from "react";
import { connect } from "react-redux";
import * as timerActions from "../../redux/timerActions";

function StepSelector({ step, options, onChangeStep }) {
    return (
        <label>
            <select
                value={step}
                onChange={(event) => onChangeStep(event.target.value)}
            >
                {options.map((option) => (
                    <option key={option}>{option}</option>
                ))}
            </select>
        </label>
    );
}

// let mapStateToProps = (state) => {
//     return {
//         step: state.timer.step,
//     };
// };

let mapStateToProps = (state) => ({
    step: state.timer.step,
});

let mapDispatchToProps = {
    onChangeStep: timerActions.changeStep,
};

export default connect(mapStateToProps, mapDispatchToProps)(StepSelector);
