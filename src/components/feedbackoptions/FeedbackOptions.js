import React from 'react';
import PropTypes from 'prop-types';
import css from './FeedbackOptions.module.css';

export const FeedbackOptions = ({ onChange, options }) => {
  const optionsBtn = Object.keys(options);
  console.log(optionsBtn);
  console.log(css);
  return (
    <div className={css.feedback__box}>
      {optionsBtn.map(option => (
        <button
          type="button"
          key={option}
          name={option}
          className={css[`button__${option}`]}
          onClick={onChange}
        >
          {option}
        </button>
      ))}
    </div>
  );
};

FeedbackOptions.propTypes = {
  options: PropTypes.arrayOf(
    PropTypes.shape({
      good: PropTypes.string,
      neutral: PropTypes.string,
      bad: PropTypes.string,
    })
  ),
  onChange: PropTypes.func.isRequired,
};
