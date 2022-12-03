import { useState } from "react";

import { Statistics } from "components/Statistics/Statistics";
import { FeedbackOptions } from "components/FeedbackOptions/FeedbackOptions";
import { Section } from "components/Section/Section";
import { Notification } from "components/Notification/Notification";

    
export function FormFeedBack () {

    const [good, setGood] = useState(0);
    const [neutral, setNeutral] = useState(0);
    const [bad, setBad] = useState(0);
    
   const handleOnClick = (e) => { 
        switch (e.target.name) {
            case 'good':
                setGood(good + 1);
                break;
            case 'neutral':
                setNeutral(neutral + 1);
                break;
            case 'bad':
                setBad(bad + 1);
                break;
            default:
                return;
        }
    }


    function countTotalFeedback() {
        return good + neutral + bad;
    }

    function countPositiveFeedbackPercentage() {
        const allCount = countTotalFeedback();
        return allCount > 0 ? Math.round(good / allCount*100) : 0;
    }
        return (
            <>
                <Section title={"Please leave feedback"}>
                    <FeedbackOptions handleOnClick={handleOnClick} />
                </Section>
                {countTotalFeedback() > 0 ?
                    <Section title="Statistics">
                        <Statistics good={good} neutral={neutral} bad={bad} total={countTotalFeedback()} positivePercentage={countPositiveFeedbackPercentage()}/>
                    </Section> :
                    <Notification message={"There is no feedback"} />
                }
            </>
        );
}