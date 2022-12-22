import { motion } from "framer-motion";
import Backdrop from "../modalBackDrop";
import Link from "next/link";
import Image from "next/image";

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

const ModalText = ({ text }) => (
  <div className="modal-text" onClick={(e) => e.stopPropagation()}>
    <h3>{text}</h3>
    <div className="left-side-about-me">
      <h1>Projects</h1>
      <p>
        The Google project was made to show off the various features of the
        Pixel 6 and Pixel 6 Pro
      </p>
      <Image className="pixel-picture" src="/pixel6.png" alt="" width="180" height="300"/>
      <Link href="/Google"><button className="project-btn">Pixel 6 Demo</button></Link>
      <p>
        The Proctor and Gamble project was developed to create an advanced filtration pipeline
         that took advantage of several artificial intelligence techniques; namely object and activity detection.
      </p>
      <Image className="pixel-picture" src="/obj_mock.png" alt="" width="350" height="230"/>
      <Link href="/detection"><button className="project-btn">Detection Demo</button></Link>
      <p>
        The Krypt project was a test to see if I could create a fully functioning social media website of my own.
        It features a fully functional database with the ability to create Google authenticated accounts, posts, comments, and more!
      </p>
      <Image className="social_pic" src="/social_media_mock.png" alt="" width="300" height="180"/>
      <Link href="/Krypt"><button className="project-btn">Krypt Demo</button></Link>
    </div>
  </div>
);

const Technology = ({ handleClose, text }) => {
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

export default Technology;
