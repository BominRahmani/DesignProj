import { motion } from "framer-motion";
import Backdrop from "../modalBackDrop";
import Image from "next/image";
import Lottie from "lottie-react";
import { useLottie } from "lottie-react";
import LinkedIn from "../../public/linkedin-lottie.json"
import Github from "../../public/github-lottie.json"

const dropIn = {
  hidden: {
    y: "-100vh",
    opacity: 0,
  },
  visible: {
    y: "0",
    opacity: 1,
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

const ModalText = ({ text }) => { 
  return (
  <div className="modal-text" onClick={(e) => e.stopPropagation()}>
    <h3>{text}</h3>
    <div className="left-side-about-me">
      <Image
        className="profile-picture"
        src="/profile_picture.jpeg"
        alt="/synthBack.jpeg"
        width="300"
        height="300"
      />
      <h1>Bomin Rahmani</h1>
      <div className="about-me-middle">
        <p>
          I&apos;m a software developer that works with almost every facet of the
          industry, whether that be mobile, web, or research development!
        </p>
        <div className="icon-tray">
          <a
            href="https://github.com/BominRahmani"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Lottie animationData={Github} loop={true} />
          </a>
          <a
            href="https://www.linkedin.com/in/bominrahmani/"
            target="_blank"
            rel="noopener noreferrer"
          >
          <Lottie animationData={LinkedIn} loop={true} />
          </a>
        </div>
      </div>
    </div>
  </div>
);
}

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
