import React, { Component } from 'react';
import './Clock.css';

export default class Clock extends Component {
    state = {
        time: new Date().toLocaleTimeString(),
    };

    intervalId = '';

    componentDidMount() {
        // console.log('Click componentDidMount');
        this.intervalId = setInterval(() => {
            this.setState({ time: new Date().toLocaleTimeString() });
        }, 1000);
    }

    componentWillUnmount() {
        clearInterval(this.intervalId);
    }

    render() {
        // console.log('Clock render...', new Date().toLocaleTimeString());

        return <div className="Clockface">{this.state.time}</div>;
    }
}
