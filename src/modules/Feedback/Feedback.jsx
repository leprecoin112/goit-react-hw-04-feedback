import React, { useState, useEffect } from 'react';
import FeedbackOptions from './FeedbackOptions/FeedbackOptions';
import Statistics from './Statistics/Statistics';
import Section from './Section/Section';
import Notification from 'shared/components/Notification/Notification';

const OPTIONS_BUTTON = [
  {
    type: 'button',
    title: 'Good',
  },
  {
    type: 'button',
    title: 'Neutral',
  },
  {
    type: 'button',
    title: 'Bad',
  },
];

export function FeedBack() {
  const [good, setGood] = useState(0);
  const [bad, setBad] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [total, setTotal] = useState(0);

  const onLeaveFeedback = e => {
    const name = e.target.name;

    switch (name) {
      case 'bad':
        setBad(prevBad => prevBad + 1);
        break;
      case 'good':
        setGood(prevGood => prevGood + 1);
        break;
      case 'neutral':
        setNeutral(prevNeutral => prevNeutral + 1);
        break;
      default:
        throw new Error(`parameter ${name} ) is not supported`);
    }
  };

  useEffect(() => {
    setTotal(bad + good + neutral);
  }, [bad, good, neutral]);

  const countPositiveFeedbackPercentage = () => {
    if (!total) {
      return 0;
    }
    const percentage = (good / total) * 100;
    return Number.parseInt(percentage.toFixed(0));
  };

  return (
    <div>
      <Section title="Please leave feedback">
        <FeedbackOptions
          options={OPTIONS_BUTTON}
          onLeaveFeedback={onLeaveFeedback}
        />
      </Section>

      <Section title="Statistic">
        {!total ? (
          <Notification message="There is no feedback" />
        ) : (
          <Statistics
            good={good}
            neutral={neutral}
            bad={bad}
            total={total}
            positivePercentage={countPositiveFeedbackPercentage()}
          />
        )}
      </Section>
    </div>
  );
}

export default FeedBack;
