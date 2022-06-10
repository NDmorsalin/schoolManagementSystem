import React from 'react';
import classes from './Board.module.css';

function Notice({ notice }) {
  const rendColor = () => {
    const randNum = () => {
      return Math.round(Math.random() * 224);
    };
    return `rgb(${randNum()},${randNum()},${randNum()})`;
  };
  return (
    <div className={classes.noticeContainer}>
      <div className={classes.time}>{notice.time}</div>
      <h3
        className={classes.sender}
        style={{
          color: rendColor()
        }}>
        {notice.sender}
      </h3>
      <p className={classes.notice}>{notice.notice} </p>
    </div>
  );
}

export default Notice;
