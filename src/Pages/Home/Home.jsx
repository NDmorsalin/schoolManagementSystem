import { Grid } from '@mui/material';
import React from 'react';
import { useLocation } from 'react-router-dom';
import { MoneyIcon, ParentsIcon, StudentsIcon, TeachersIcon } from '../../assets/icons/Icons';
import BarChart from '../../Components/BarChart/BarChart';
import Box from '../../Components/Box/Box';
import Calender from '../../Components/Calender/Calender';
import Board from '../../Components/NoticeBoard/Board';
import RecentActivity from '../../Components/RecentActivity/RecentActivity';
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
          <Box slags="Teacher" icon={<TeachersIcon />} num="2498" />
        </Grid>
        <Grid item sm={6} md={4} lg={3}>
          <Box slags="Parents" icon={<ParentsIcon />} num="15498" />
        </Grid>
        <Grid item sm={6} md={4} lg={3}>
          <Box slags="Total earning" icon={<MoneyIcon />} num="2455498" />
        </Grid>
      </Grid>
      <Grid container className={classes.container}>
        <Grid container sm={12} md={6} spacing={2}>
          <Grid item sm={12}>
            <Reloaded title="Fess Collection Expense">
              <BarChart />
            </Reloaded>
          </Grid>
          <Grid item sm={12}>
            <Reloaded title="Fess Collection Expense">
              <Calender />
            </Reloaded>
          </Grid>
        </Grid>
        <Grid container sm={12} md={6} spacing={2}>
          <Grid item sm={12} md={6}>
            <Box slags="Student" icon={<StudentsIcon />} num="2455498" />
          </Grid>
          <Grid item sm={12} md={6}>
            <Box slags="Student" icon={<StudentsIcon />} num="2455498" />
          </Grid>
          <Grid item sm={12} md={6}>
            <Reloaded title="Notice Board">
              <Board />
            </Reloaded>
          </Grid>
          <Grid item sm={12} md={6}>
            <Reloaded title="Recent activity">
              <RecentActivity />
            </Reloaded>
          </Grid>
        </Grid>
      </Grid>
    </div>
  );
}

export default Home;
