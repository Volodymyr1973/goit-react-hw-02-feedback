import React, { Component } from 'react';
// import ReactDOM from 'react-dom';

export class App extends Component {
  constructor() {
    super();

    this.state = {
      good: 0,
      neutral: 0,
      bad: 0,
    };
  }

  countTotalFeedback() {
    const { good, neutral, bad } = this.state;
    console.log(good);
    return good + neutral + bad;
  }

  countPositiveFeedbackPercentage() {
    const { good, neutral, bad } = this.state;
    if (!good && !neutral && !bad) {
      return 0;
    } else return ((good / this.countTotalFeedback()) * 100).toFixed(0);
  }

  render() {
    const { good, neutral, bad } = this.state;
    return (
      <>
        <div>
          <h2>Please leave feedback</h2>
          <button
            type="button"
            onClick={() => {
              this.setState(prevState => ({ good: prevState.good + 1 }));
            }}
          >
            Good
          </button>
          <button
            type="button"
            onClick={() => {
              this.setState(prevState => ({ neutral: prevState.neutral + 1 }));
            }}
          >
            Neutral
          </button>
          <button
            type="button"
            onClick={() => {
              this.setState(prevState => ({ bad: prevState.bad + 1 }));
            }}
          >
            Bad
          </button>
        </div>
        <div>
          <h2>Statistics</h2>
          {good || neutral || bad ? (
            <>
              <p>Good: {this.state.good}</p>
              <p>Neutral: {this.state.neutral}</p>
              <p>Bad: {this.state.bad}</p>
              <p>Total: {this.countTotalFeedback()}</p>
              <p>Positive feedback: {this.countPositiveFeedbackPercentage()}</p>
            </>
          ) : (
            <p>There is no feedback</p>
          )}
        </div>
      </>
    );
  }
}
