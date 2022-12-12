import React from 'react';
import css from './Statistics.module.css';

export const Statistics = ({
  good,
  neutral,
  bad,
  total,
  positivePercentage,
}) => {
  return (
    <div>
      {good || neutral || bad ? (
        <>
          <p className={css.statistics__good}>Good: {good}</p>
          <p className={css.statistics__neutral}>Neutral: {neutral}</p>
          <p className={css.statistics__bad}>Bad: {bad}</p>
          <p className={css.statistics__total}>Total: {total}</p>
          <p className={css.statistics__positive}>
            Positive feedback: {positivePercentage}
          </p>
        </>
      ) : (
        <p className={css.statistics__noresult}>There is no feedback</p>
      )}
    </div>
  );
};
