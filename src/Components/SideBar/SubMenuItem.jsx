/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
import { ChevronRight } from '@mui/icons-material';
import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';

export default function SubMenuItem({ classes, route, isOpen, setIsOpen, setOpen, handleMenu }) {
  const [isMenuOpen, setMenuOpen] = useState(false);

  function toggle() {
    setMenuOpen((prevState) => {
      setIsOpen(true);
      return !prevState;
    });
  }
  return (
    <div className={classes.subMenuContainer} key={route.name}>
      <div className={classes.menuItem} onClick={toggle}>
        <NavLink to={route.path.toLocaleLowerCase()} className={classes.item}>
          <div className={classes.link_icon}>{route.icon}</div>
          {isOpen && <div className={classes.link_text}> {route.name}</div>}
        </NavLink>
        {isOpen && (
          <ChevronRight
            style={{
              transform: `${isMenuOpen ? 'rotate(90deg)' : 'rotate(0deg)'}`,
              color: '#ffffff'
            }}
          />
        )}
      </div>

      {isMenuOpen && (
        <div className={classes.subMenu}>
          {route.subMenu.map((subMenu, i) => (
            <NavLink
              key={subMenu.name}
              to={`${route.name.split(' ').join('').toLocaleLowerCase()}/${subMenu.path
                .split(' ')
                .join()
                .toLocaleLowerCase()}`}
              className={classes.subLink}>
              <ChevronRight style={{ color: '#ffffff' }} />
              {subMenu.name}
            </NavLink>
          ))}
        </div>
      )}
    </div>
  );
}
