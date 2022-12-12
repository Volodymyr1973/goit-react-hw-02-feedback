import React from 'react';
import css from './FeedbackOptions.module.css';

export const FeedbackOptions = ({ onChange }) => {
  return (
    <div className={css.feedback__box}>
      <button
        type="button"
        name="good"
        className={css.button__good}
        onClick={onChange}
      >
        Good
      </button>
      <button
        type="button"
        name="neutral"
        className={css.button__neutral}
        onClick={onChange}
      >
        Neutral
      </button>
      <button
        type="button"
        name="bad"
        className={css.button__bad}
        onClick={onChange}
      >
        Bad
      </button>
    </div>
  );
};
