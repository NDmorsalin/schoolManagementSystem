import { Grid } from '@mui/material';
import React from 'react';
import { useLocation } from 'react-router-dom';
import { StudentsIcon } from '../../assets/icons/Icons';
import BarChart from '../../Components/BarChart';
import Box from '../../Components/Box/Box';
import Reloaded from '../../Components/Reloaded/Reloaded';
import classes from './Home.module.css';

function Home() {
  const { pathname } = useLocation();
  return (
    <div className={classes.home}>
      <div className={classes.path}>{pathname.toUpperCase()}</div>
      <Grid container spacing={2}>
        <Grid item sm={6} md={4} lg={3}>
          <Box slags="Student" icon={<StudentsIcon />} num="2455498" />
        </Grid>
        <Grid item sm={6} md={4} lg={3}>
          <Box slags="Student" icon={<StudentsIcon />} num="2455498" />
        </Grid>
        <Grid item sm={6} md={4} lg={3}>
          <Box slags="Student" icon={<StudentsIcon />} num="2455498" />
        </Grid>
        <Grid item sm={6} md={4} lg={3}>
          <Box slags="Student" icon={<StudentsIcon />} num="2455498" />
        </Grid>
      </Grid>
      <div className={classes.container}>
        <Grid container sm={6}>
          <Grid item sm={12}>
            {' '}
            <Reloaded title="title">
              <BarChart />
            </Reloaded>
          </Grid>
        </Grid>
        <Grid container sm={6} spacing={2}>
          <Grid item sm={6}>
            {' '}
            <Reloaded title="title">children</Reloaded>
          </Grid>
          <Grid item sm={6}>
            {' '}
            <Reloaded title="title">children</Reloaded>
          </Grid>
        </Grid>
      </div>
    </div>
  );
}

export default Home;
