import { motion } from "framer-motion";
import Backdrop from "../modalBackDrop";
import { Canvas } from "@react-three/fiber";
import WordCloud from "../wordCloud"

const dropIn = {
  hidden: {
    y: "-100vh",
    opacity: 0,
  },
  visible: {
    y: "0",
    opacity: "1",
    transition: {
      duration: 1,
      type: "spring",
      damping: "25",
      stiffness: "500",
    },
  },
  exit: {
    y: "100vh",
    opacity: 0,
    transition: {
      duration: 0.8,
    },
  },
};

const ModalText = ({ text }) => (
  <div className="projects-text" onClick={(e) => e.stopPropagation()}>
    <h3>{text}</h3>
    <h1> Projects </h1>
    <WordCloud className="word-cloud" />
  </div>
);

const Projects = ({ handleClose, text }) => {
  return (
    <Backdrop onClick={handleClose}>
      <motion.div
        onClick={(e) => e.stopPropagation()}
        className="modal grey-gradient"
        variants={dropIn}
        initial="hidden"
        animate="visible"
        exit="exit"
      ></motion.div>
      <ModalText text={text} />
    </Backdrop>
  );
};

export default Projects;
