import React, { Component } from 'react';
import Form from './components/Fomr/Form';
import Section from './components/Section/Section';
import Statistic from './components/Statistic/Statistic';
import Notification from './components/Notification/Notification';

export default class App extends Component {
  state = {
    Good: 0,
    Neutral: 0,
    Bad: 0,
  };

  handleChange = (event) => {
    let { name } = event.target;
    this.setState((prevState) => ({ [name]: prevState[name] + 1 }));
  };

  countTotal() {
    let { Good, Neutral, Bad } = this.state;
    let total = Good + Neutral + Bad;
    return total;
  }

  countPositiveFeedback() {
    let { Good } = this.state;
    let total = this.countTotal();
    let goodPercent = (Good * 100) / total;
    // return goodPercent;
    return Math.round(goodPercent);
  }

  render() {
    let { Good, Neutral, Bad } = this.state;
    let total = this.countTotal();
    return (
      <div>
        <Section title="Please leave feedback">
          <Form onHandleChange={this.handleChange} />
        </Section>
        <Section title="Statistic">
          {total === 0 ? (
            <Notification message="No result" />
          ) : (
            <Statistic
              onGood={Good}
              onNeutral={Neutral}
              onBad={Bad}
              onTotal={this.countTotal()}
              onCountPositiveFeedback={this.countPositiveFeedback()}
            />
          )}
        </Section>
      </div>
    );
  }
}
