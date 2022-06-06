import { Divider } from '@mui/material';
import React from 'react';
import classes from './Box.module.css';

function Box({ icon, bg, num, slags }) {
  return (
    <div className={classes.box}>
      <div className={classes.boxIcon}>
        {icon}
        <h4>{slags}</h4>
      </div>
      <Divider
        orientation="vertical"
        sx={{
          borderBottomWidth: '45px',
          borderRightWidth: 'medium'
        }}
      />
      <h2>{num}</h2>
    </div>
  );
}

export default Box;
