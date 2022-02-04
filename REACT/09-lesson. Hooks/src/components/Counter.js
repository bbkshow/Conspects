import React, { useState, useEffect } from "react";

export default function Counter() {
    // const [state, setState] = useState(initialState);

    let [count, setCountState] = useState(0); //  [state, updater]
    let [textValue, setTextValue] = useState("");

    useEffect(() => {
        console.log("Counter обновился");
    }, [count]);

    // useEffect(() => {
    //     console.log("textValue обновилось", textValue);
    // }, [textValue]);

    let handleIncrement = () => {
        document.title = `You clicked ${count + 1} times`;
        setCountState(count + 1);
    };

    let handleChange = (event) => {
        // console.log(event.target.value);
        setTextValue(event.target.value);
    };

    return (
        <div>
            <input type="text" value={textValue} onChange={handleChange} />
            <p>You clicked {count} times</p>
            <button type="button" onClick={handleIncrement}>
                Increment counter
            </button>
        </div>
    );
}

// export default class Counter extends Component {
//     state = {
//         count: 0,
//     };

//     handleIncrement = () => {
//         this.setState((state) => ({ count: state.count + 1 }));
//     };

//     componentDidMount() {
//         document.title = `You clicked ${this.state.count} times`;
//     }

//     componentDidUpdate(prevProps, prevState) {
//         if (prevState.count !== this.state.count) {
//             document.title = `You clicked ${this.state.count} times`;
//         }
//     }

//     render() {
//         return (
//             <div>
//                 <p>You clicked {this.state.count} times</p>
//                 <button type="button" onClick={this.handleIncrement}>
//                     Increment counter
//                 </button>
//             </div>
//         );
//     }
// }
