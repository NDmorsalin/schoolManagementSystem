import { Message, Notifications, Public, Search } from '@mui/icons-material';
import React from 'react';
import eduCap from '../../assets/eduCap.svg';
import classes from './TopBar.module.css';

function TopBar({ isOpen, handleMenu }) {
  return (
    <div className={classes.topBar}>
      <div className={classes.brandTitle}>
        <img src={eduCap} alt="Educational cap" className={classes.eduCap} />
        <h1 className={classes.title}>
          Welcome To Akkhor <span className={classes.slag}> School Management system</span>{' '}
        </h1>
      </div>
      <div className={classes.rightBar}>
        <div className={classes.topSearch}>
          <Search />
          <input type="search" className={classes.search} />
        </div>

        <div className={classes.language}>
          <Public />
          <select value="bd" name="language" id="language">
            <option value="bd">Bangla</option>
            <option value="in">Hindi</option>
            <option value="bd">Bangla</option>
          </select>
        </div>
        <div className={classes.info}>
          <div className={`${classes.message} ${classes.info_num}`}>
            <div className={classes.num}>1</div>
            <Message />
          </div>
          <div className={`${classes.notifications} ${classes.info_num}`}>
            <div className={classes.num}>2</div>
            <Notifications />
          </div>
        </div>

        <div className={classes.profile}>
          <img
            className={classes.avatar}
            src="https://avatarfiles.alphacoders.com/798/79891.jpg"
            alt=""
          />
          <div className="bio">
            <div className={classes.name}>Accusantium labor</div>
            <div className={classes.degn}>Students </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TopBar;
