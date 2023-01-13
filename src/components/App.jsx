import { Component } from "react";
import { Statistics } from "components/Statistics/Statistics";
import { Section } from "components/Section/Section";
import { FeedbackOptions } from "components/FeedbackOptions/FeedbackOptions";
import { Notification } from "components/Notification/Notification";
import css from "components/App.module.css";


export class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0
  };
  
  countTotalFeedback = () => {
    const { good, neutral, bad } = this.state;
    return good + neutral + bad;
  };

  countPositiveFeedbackPercentage = () => {
    const { good } = this.state;
    return Math.round((good / this.countTotalFeedback()) * 100)
  };

  addFeedback = option => {
    this.setState(prevState => ({ [option]: prevState[option] + 1 }));
  };
  
  render() {
    const { good, neutral, bad } = this.state;
    return <div className={css.section}>
      <Section title="Please leave your feedback">
        <FeedbackOptions options={Object.keys(this.state)}
          onLeaveFeedback={this.addFeedback}
        />
      </Section>

      <Section title="Statistics">
        {this.countTotalFeedback() ?  (<Statistics
          good={good}
          neutral={neutral}
          bad={bad}
          total={this.countTotalFeedback()}
          positivePercentage={this.countPositiveFeedbackPercentage()}
      />) : (<Notification message="There is no feedback" />) }
       
      </Section>
    </div>
  }
};
