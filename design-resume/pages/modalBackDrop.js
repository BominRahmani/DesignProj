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
      transition={{duration: 0.5}}
    >
      {children}
    </motion.div>
  );
};

export default ModalBackDrop;
