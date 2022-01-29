import React, { useState, useEffect, useRef } from "react";

export default function Clock() {
    let [time, setTime] = useState(new Date());

    let intervalId = useRef(); // { current: 'aszsdscsc'}

    useEffect(() => {
        intervalId.current = setInterval(() => {
            setTime(new Date());
        }, 1000);

        return () => {
            console.log("Clock clear before next useEffect");
            clearInterval(intervalId.current);
        };
    });

    return <p>Current time: {time.toLocaleTimeString()}</p>;
}

// export default class Clock extends Component {
//     state = {
//         time: new Date(),
//     };

//     intervalId = null;

//     componentDidMount() {
//         this.intervalId = setInterval(() => {
//             this.setState({ time: new Date() });
//         }, 1000);
//     }

//     componentWillUnmount() {
//         console.log("Clock unmount");
//         clearInterval(this.intervalId);
//     }

//     render() {
//         return <p>Current time: {this.state.time.toLocaleTimeString()}</p>;
//     }
// }
