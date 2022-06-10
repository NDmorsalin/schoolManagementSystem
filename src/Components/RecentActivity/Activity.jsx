import React from 'react';
import classes from './Activity.module.css';

function Activity({ activity }) {
  const rendColor = () => {
    const randNum = () => {
      return Math.round(Math.random() * 224);
    };
    return `rgb(${randNum()},${randNum()},${randNum()})`;
  };
  return (
    <div className={classes.activity}>
      <div className="time">{activity.time}</div>
      <h3 className={classes.post}>{activity.activity}</h3>
      <div
        className={classes.circle}
        style={{
          border: `2px solid ${rendColor()}`
        }}
      />
    </div>
  );
}

export default Activity;
