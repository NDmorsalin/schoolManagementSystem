import { motion } from 'framer-motion';
import React from 'react';
import TopBar from '../Components/TopBar/TopBar';

function Page({ children, isOpen, handleMenu }) {
  return (
    <motion.div
      animate={{
        width: isOpen ? 'calc(100% - 220px)' : 'calc(100% - 60px)',
        transition: { duration: 0.5, type: 'spring', damping: 10 }
      }}
      className="page">
      <TopBar sOpen={isOpen} handleMenu={handleMenu} />
      {children}
    </motion.div>
  );
}

export default Page;
