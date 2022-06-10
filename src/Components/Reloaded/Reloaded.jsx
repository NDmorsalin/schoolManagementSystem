import React, { useState } from 'react';
import { FaAngleDown, FaRedo } from 'react-icons/fa';
import { GrClose } from 'react-icons/gr';
import classes from './Reloaded.module.css';

function Reloaded({ children, title }) {
  const [isOpen, setIsOpen] = useState(true);

  const handelOpen = () => {
    setIsOpen((prevOpen) => !prevOpen);
  };
  return (
    <div className={classes.reload}>
      <div className={classes.reload_top}>
        <h3 className={classes.title}>{title}</h3>
        <div className={classes.icons}>
          <FaAngleDown onClick={handelOpen} size="1.5rem" color="#FDC600" />
          <GrClose />
          <FaRedo />
        </div>
      </div>
      {isOpen && children}
    </div>
  );
}

export default Reloaded;
