import React from "react";
import { motion } from "framer-motion";

const ModalBackDrop = ({ children, onClick }) => {
  return (
    <motion.div
      className="back-drop"
      onClick={onClick}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="close" onClick={onClick}>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <svg viewBox="0 0 36 36" className="circle">
          <path
            strokeDasharray="100, 100"
            d="M18 2.0845
        a 15.9155 15.9155 0 0 1 0 31.831
        a 15.9155 15.9155 0 0 1 0 -31.831"
          />
        </svg>
      </div>
      {children}
    </motion.div>
  );
};

export default ModalBackDrop;
