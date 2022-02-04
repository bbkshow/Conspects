import React from "react";
import Timer from "./Timer";
import StepSelector from "./StepSelector";

let stepOptions = [5, 10, 15, 20, 25];

export default function App() {
    return (
        <div>
            <Timer />
            <StepSelector options={stepOptions} />
        </div>
    );
}
