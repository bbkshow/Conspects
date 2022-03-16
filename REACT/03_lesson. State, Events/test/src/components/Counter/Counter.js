import React, { Component } from 'react';
// import propTypes from 'prop-types';
import CounterControls from './CounterControls';

class Counter extends Component {
    // static defaultProps = { initialValue: 0, step: 1 };
    // static propTypes;

    state = {
        value: this.props.initialValue,
    };

    handleIncrement = event => {
        this.setState((prevState, props) => {
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
                <span>{value}</span>
                <CounterControls
                    onHandleIncrement={this.handleIncrement}
                    onHandleDecrement={this.handleDecrement}
                />
            </>
        );
    }
}

export default Counter;
