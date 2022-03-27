import React, { Component, PureComponent } from 'react';

export default class Tabs extends Component {
    state = {
        activeIndex: 0,
    };

    // componentDidUpdate(prevProps, prevState) {
    //     console.log('prevState', prevState);
    //     console.log('this.state', this.state);
    // }

    shouldComponentUpdate(nextProps, nextState) {
        // console.log('nextState', nextState);
        // console.log('this.state', this.state);

        return nextState.activeIndex !== this.state.activeIndex;
    }

    activeTabIndex = idx => {
        this.setState({ activeIndex: idx });
    };

    render() {
        let { items } = this.props;
        let tab = items[this.state.activeIndex];

        return (
            <>
                <div>
                    {items.map((item, idx) => (
                        <button
                            onClick={() => this.activeTabIndex(idx)}
                            key={item.label}
                            type="button"
                        >
                            {item.label}
                        </button>
                    ))}
                </div>
                <div>
                    <h1>{tab.label}</h1>
                    <p>{tab.content}</p>
                </div>
            </>
        );
    }
}
