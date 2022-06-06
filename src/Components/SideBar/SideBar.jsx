/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
import { MapsUgc, Menu, MenuBook, Settings } from '@mui/icons-material';
import { motion } from 'framer-motion';
import React from 'react';
import { NavLink } from 'react-router-dom';
import {
  AccountIcon,
  AttendanceIcon,
  CarIcon,
  ClassIconIcon,
  ClassRoutineIcon,
  DashboardIcon,
  HostelIcon,
  LibraryIcon,
  LocationIcon,
  NoticeIcon,
  ParentsIcon,
  StudentsIcon,
  SubjectIcon,
  TeachersIcon,
  UIElementsIcon
} from '../../assets/icons/Icons';
import Logo from '../../assets/Logo.svg';
import classes from './SideBar.module.css';
import SubMenuItem from './SubMenuItem';

const routes = [
  {
    path: '/',
    name: 'Dashboard',
    icon: <DashboardIcon />,
    subMenu: [
      {
        path: 'Admin',
        name: 'Admin'
      },
      {
        path: 'Student',
        name: 'Student'
      },
      {
        path: 'Parents',
        name: 'Parents'
      }
    ]
  },
  {
    path: '/Student',
    name: 'Student',
    icon: <StudentsIcon />,
    subMenu: [
      {
        path: 'Admin',
        name: 'Admin'
      },
      {
        path: 'Student',
        name: 'Student'
      },
      {
        path: 'Parents',
        name: 'Parents'
      }
    ]
  },
  {
    path: '/Teachers',
    name: 'Teachers',
    icon: <TeachersIcon />,
    subMenu: [
      {
        path: 'Admin',
        name: 'Admin'
      },
      {
        path: 'Student',
        name: 'Student'
      },
      {
        path: 'Parents',
        name: 'Parents'
      }
    ]
  },
  {
    path: '/Parents',
    name: 'Parents',
    icon: <ParentsIcon />,
    subMenu: [
      {
        path: 'Admin',
        name: 'Admin'
      },
      {
        path: 'Student',
        name: 'Student'
      },
      {
        path: 'Parents',
        name: 'Parents'
      }
    ]
  },
  {
    path: '/Library',
    name: 'Library',
    icon: <LibraryIcon />,
    subMenu: [
      {
        path: 'Admin',
        name: 'Admin'
      },
      {
        path: 'Student',
        name: 'Student'
      },
      {
        path: 'Parents',
        name: 'Parents'
      }
    ]
  },
  {
    path: '/Account',
    name: 'Account',
    icon: <AccountIcon />,
    subMenu: [
      {
        path: 'Admin',
        name: 'Admin'
      },
      {
        path: 'Student',
        name: 'Student'
      },
      {
        path: 'Parents',
        name: 'Parents'
      }
    ]
  },
  {
    path: '/Class',
    name: 'Class',
    icon: <ClassIconIcon />,
    subMenu: [
      {
        path: 'Admin',
        name: 'Admin'
      },
      {
        path: 'Student',
        name: 'Student'
      },
      {
        path: 'Parents',
        name: 'Parents'
      }
    ]
  },
  {
    path: '/Subject',
    name: 'Subject',
    icon: <SubjectIcon />,
    subMenu: [
      {
        path: 'Admin',
        name: 'Admin'
      },
      {
        path: 'Student',
        name: 'Student'
      },
      {
        path: 'Parents',
        name: 'Parents'
      }
    ]
  },
  {
    path: '/ClassRoutine',
    name: 'Class Routine',
    icon: <ClassRoutineIcon />,
    subMenu: [
      {
        path: 'Admin',
        name: 'Admin'
      },
      {
        path: 'Student',
        name: 'Student'
      },
      {
        path: 'Parents',
        name: 'Parents'
      }
    ]
  },
  {
    path: '/Attendance',
    name: 'Attendance',
    icon: <AttendanceIcon />,
    subMenu: [
      {
        path: 'Admin',
        name: 'Admin'
      },
      {
        path: 'Student',
        name: 'Student'
      },
      {
        path: 'Parents',
        name: 'Parents'
      }
    ]
  },
  {
    path: '/Exam',
    name: 'Exam',
    icon: <MenuBook />,
    subMenu: [
      {
        path: 'Admin',
        name: 'Admin'
      },
      {
        path: 'Student',
        name: 'Student'
      },
      {
        path: 'Parents',
        name: 'Parents'
      }
    ]
  },
  {
    path: '/Transport',
    name: 'Transport',
    icon: <CarIcon />,
    subMenu: [
      {
        path: 'Admin',
        name: 'Admin'
      },
      {
        path: 'Student',
        name: 'Student'
      },
      {
        path: 'Parents',
        name: 'Parents'
      }
    ]
  },
  {
    path: '/Hostel',
    name: 'Hostel',
    icon: <HostelIcon />,
    subMenu: [
      {
        path: 'Admin',
        name: 'Admin'
      },
      {
        path: 'Student',
        name: 'Student'
      },
      {
        path: 'Parents',
        name: 'Parents'
      }
    ]
  },
  {
    path: '/Notice',
    name: 'Notice',
    icon: <NoticeIcon />,
    subMenu: [
      {
        path: 'Admin',
        name: 'Admin'
      },
      {
        path: 'Student',
        name: 'Student'
      },
      {
        path: 'Parents',
        name: 'Parents'
      }
    ]
  },
  {
    path: '/Message',
    name: 'Message',
    icon: <MapsUgc />,
    subMenu: [
      {
        path: 'Admin',
        name: 'Admin'
      },
      {
        path: 'Student',
        name: 'Student'
      },
      {
        path: 'Parents',
        name: 'Parents'
      }
    ]
  },
  {
    path: '/UIElements',
    name: 'UI Elements',
    icon: <UIElementsIcon />,
    subMenu: [
      {
        path: 'Admin',
        name: 'Admin'
      },
      {
        path: 'Student',
        name: 'Student'
      },
      {
        path: 'Parents',
        name: 'Parents'
      }
    ]
  },
  {
    path: '/Map',
    name: 'Map',
    icon: <LocationIcon />,
    subMenu: [
      {
        path: 'Admin',
        name: 'Admin'
      },
      {
        path: 'Student',
        name: 'Student'
      },
      {
        path: 'Parents',
        name: 'Parents'
      }
    ]
  },
  {
    path: '/Setting',
    name: 'Setting',
    icon: <Settings />,
    subMenu: [
      {
        path: 'Admin',
        name: 'Admin'
      },
      {
        path: 'Student',
        name: 'Student'
      },
      {
        path: 'Parents',
        name: 'Parents'
      }
    ]
  }
];

function SideBar({ isOpen, setIsOpen, handleMenu }) {
  return (
    <motion.div
      animate={{
        width: isOpen ? '220px' : '60px',
        transition: { duration: 0.5, type: 'spring', damping: 10 }
      }}
      className={classes.sidebar}>
      <motion.div
        animate={{
          width: isOpen ? '220px' : '60px',
          position: 'fixed',
          transition: { duration: 0.3, type: 'spring', damping: 10 }
        }}
        className={classes.logo}>
        {isOpen && (
          <span className={classes.logo_text}>
            <img src={Logo} alt="Logo" />
          </span>
        )}
        <span className="logo_icon" onClick={handleMenu}>
          <Menu fontSize="large" />
        </span>
      </motion.div>
      <div className={classes.routes}>
        {routes.map((route, i) => {
          if (route.subMenu) {
            return (
              <SubMenuItem
                key={route.name}
                classes={classes}
                handleMenu={handleMenu}
                setIsOpen={setIsOpen}
                isOpen={isOpen}
                route={route}
              />
            );
          }
          return (
            <NavLink className={classes.link} to={route.path.toLocaleLowerCase()} key={route.name}>
              <div className={classes.link_icon}>{route.icon}</div>
              {isOpen && <div className={classes.link_text}> {route.name}</div>}
            </NavLink>
          );
        })}
      </div>
    </motion.div>
  );
}

export default SideBar;
