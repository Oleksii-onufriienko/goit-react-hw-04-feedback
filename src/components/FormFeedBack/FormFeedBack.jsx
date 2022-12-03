import { Component } from "react";

import { Statistics } from "components/Statistics/Statistics";
import { FeedbackOptions } from "components/FeedbackOptions/FeedbackOptions";
import { Section } from "components/Section/Section";
import { Notification } from "components/Notification/Notification";

    
export class FormFeedBack extends Component {

    state = {
      good: 0,
      neutral: 0,
      bad: 0
    }
    
    handleOnClick = (e) => { 
        this.setState(prevState => {
            return {
                [e.target.name]: prevState[e.target.name] + 1,
            }
        });
    }

    countTotalFeedback() {
        const { good, neutral, bad } = this.state;
        return good + neutral + bad;
    }

    countPositiveFeedbackPercentage() {
        const allCount = this.countTotalFeedback();
        return allCount > 0 ? Math.round(this.state.good / allCount*100) : 0;
    }

    render() {
        return (
            <>
                <Section title={"Please leave feedback"}>
                    <FeedbackOptions handleOnClick={this.handleOnClick} />
                </Section>
                {this.countTotalFeedback() > 0 ?
                    <Section title="Statistics">
                        <Statistics good={this.state.good} neutral={this.state.neutral} bad={this.state.bad} total={this.countTotalFeedback()} positivePercentage={this.countPositiveFeedbackPercentage()}/>
                    </Section> :
                    <Notification message={"There is no feedback"} />
                }
            </>
        );
    }
}