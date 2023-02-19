import React from 'react';
import Button from 'shared/components/Button/Button';
import PropTypes from 'prop-types';
import styles from './FeedbackOptions.module.scss';

function FeedbackOptions({ options, onLeaveFeedback }) {
  return (
    <ul className={styles.feedbackOptions}>
      {options.map(({ type, title }) => (
        <li key={title}>
          <Button onClick={onLeaveFeedback} type={type} title={title} />
        </li>
      ))}
    </ul>
  );
}

FeedbackOptions.propTypes = {
  options: PropTypes.arrayOf(PropTypes.object),
  onLeaveFeedback: PropTypes.func,
};

export default FeedbackOptions;
