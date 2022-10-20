import { motion } from "framer-motion";
import Backdrop from "../modalBackDrop";

const dropIn = {
  hidden: {
    y: "-100vh",
    opacity: 0,
  },
  visible: {
    y: "0",
    opacity: "1",
    transition: {
      duration: 3,
      type: "spring",
      damping: "25",
      stiffness: "500",
    },
  },
  exit: {
    y: "100vh",
    opacity: 0,
  },
};


const ModalText = ({ text }) => (
    <div className="modal-text">
      <h3>{text}</h3> 
      <img className="profile-picture" src="profile_picture.jpeg" />
      <h1>Bomin Rahmani</h1>
      <p>Software Developer</p>
      <p>Full Stack Developer</p>
      <div className="icon-tray">
        <img src="github-icon.png"></img>
        <img src="linkedin-icon.png"></img>
      </div>
    </div>
  );

const AboutMe = ({ handleClose, text }) => {
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

export default AboutMe;
