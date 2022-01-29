import React, { Component } from 'react';
import CounterControls from './CounterControls';
// import propTypes from 'prop-types';

// class Counter extends Component {
//     static defaulProps = { itialValue: 0, step: 1 };
//     static propTypes;

//     render() {
//         // console.log(this.props);

//         return (
//             <>
//                 <button
//                     type="button"
//                     onClick={event => {
//                         console.log(event.target);
//                         console.log('Click increment');
//                     }}
//                 >
//                     Increment
//                 </button>

//                 <span> 10 </span>
//                 <button
//                     type="button"
//                     onClick={() => {
//                         console.log('Click decrement');
//                     }}
//                 >
//                     Decrement
//                 </button>
//             </>
//         );
//     }
// }

class Counter extends Component {
    static defaulProps = { itialValue: 0, step: 1 };
    static propTypes;

    // constructor(props) {
    //     super(props);
    //     // this.handleIcrement = this.handleIcrement.bind(this)
    //     this.state = {
    //         name: 'Sara',
    //         age: 25,
    //     };
    // }

    // handleIcrement(event) {
    //     console.log(event.target);
    //     console.log('Click increment');
    // }

    // handleDecrement(event) {
    //     console.log('Click decrement');
    // }

    state = {
        value: this.props.itialValue,
    };

    handleIcrement = event => {
        // console.log(this.state);
        // this.setState({
        //     value: this.state.value + 1,
        // });

        this.setState((prevState, props) => {
            // console.log(prevState);
            // console.log(props);
            return {
                value: prevState.value + props.step,
            };
        });
    };

    handleDecrement = event => {
        this.setState((prevState, props) => {
            return {
                value: prevState.value - props.step,
            };
        });
    };

    render() {
        let { value } = this.state;

        return (
            <>
                <span> {value} </span>
                <CounterControls
                    onHandleIncrement={this.handleIcrement}
                    onHandleDecrement={this.handleDecrement}
                />
            </>
        );
    }
}

export default Counter;

// ul;
//     li;
//     li;
//     li;
//     li;
//     li;
//     li;
// ul;
