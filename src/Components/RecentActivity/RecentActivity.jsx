import React from 'react';
import Activity from './Activity';

const activities = [
  {
    time: '23 Mar 22',
    activity: 'You like one post'
  },
  {
    time: '23 Mar 22',
    activity: 'You dislike one post'
  },
  {
    time: '23 Mar 22',
    activity: 'You Comment one post'
  },
  {
    time: '23 Mar 22',
    activity: 'You have update your profile'
  }
];
function RecentActivity() {
  return (
    <div
      style={{
        marginTop: '1rem'
      }}>
      {activities.map((activity, index) => (
        <Activity activity={activity} key={`${activity + index}`} />
      ))}
    </div>
  );
}

export default RecentActivity;
