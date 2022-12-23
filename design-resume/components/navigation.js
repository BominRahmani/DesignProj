import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import AboutMe from "./modal/aboutMe";
import Projects from "./modal/projects";
import Technology from "./modal/technology";

export default function Navigation() {
  const [toggle, setToggle] = useState(false);
  const [modalOpen, setAboutModalOpen] = useState(false);
  const [techModalOpen, setTechModalOpen] = useState(false);
  const [projectModalOpen, setProjectModalOpen] = useState(false);
  const aboutClose = () => setAboutModalOpen(false);
  const aboutOpen = () => setAboutModalOpen(true);
  const projectClose = () => setProjectModalOpen(false);
  const projectOpen = () => setProjectModalOpen(true);
  const techClose = () => setTechModalOpen(false);
  const techOpen = () => setTechModalOpen(true);

  const items = ["About Me", "Technology", "Projects", "Resume"];

  const navList = {
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.2,
        staggerChildren: 0.07,
      },
    },
    hidden: {
      opacity: 0,
      transition: {
        staggerChildren: 0.05,
        staggerDirection: -1,
      },
    },
  };

  const navItem = {
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        y: { stiffness: 1000, velocity: -100 },
      },
    },
    hidden: {
      y: 50,
      opacity: 0,
      transition: {
        y: { stiffness: 1000, velocity: -100 },
      },
    },
  };

  const handleClick = () => {
    setToggle(!toggle);
    aboutClose();
    projectClose();
    techClose();
  };

  const mappedItemClick = (item) => {
    switch (item) {
      case "About Me":
        modalOpen ? aboutClose() : aboutOpen();
        break;
      case "Technology":
        projectModalOpen ? projectClose() : projectOpen();
        break;
      case "Projects":
        techModalOpen ? techClose() : techOpen();
        break;
      case "Resume":
        window.open("/Resume.pdf", "_blank");
        break;
    }
  };

  const navContainer = {
    visible: {
      //x: 0,
      opacity: 1,
      transition: {
        x: { velocity: 100 },
        duration: 0.3,
      },
    },
    hidden: {
      //x: -250,
      opacity: 0,
      transition: {
        x: { velocity: 100 },
        duration: 0.3,
      },
    },
  };

  return (
    <div>
      <AnimatePresence>
        {toggle && !modalOpen && !techModalOpen && !projectModalOpen && (
          <motion.div
            className="navbar"
            initial="hidden"
            animate={toggle ? "visible" : "hidden"}
            exit="hidden"
            variants={navContainer}
          >
            <motion.ul
              className="navList"
              initial="hidden"
              animate="visible"
              exit="hidden"
              variants={navList}
            >
              {items.map((item) => (
                <motion.li
                  className="nav-item"
                  variants={navItem}
                  key={item}
                  onClick={() => mappedItemClick(item)}
                >
                  <p>{item}</p>
                </motion.li>
              ))}
            </motion.ul>
          </motion.div>
        )}
      </AnimatePresence>
      <label
        className="mobile-nav-toggle"
        htmlFor="check"
        style={
          !modalOpen && !techModalOpen && !projectModalOpen
            ? { visibility: "visible" }
            : { visibility: "hidden" }
        }
      >
        <input type="checkbox" id="check" onClick={handleClick} />
        <span></span>
        <span></span>
        <span></span>
      </label>
      <AnimatePresence initial={false} mode="wait" onExitComplete={() => null}>
        {modalOpen && (
          <AboutMe modalOpen={modalOpen} handleClose={aboutClose} />
        )}
        {projectModalOpen && (
          <Projects modalOpen={projectModalOpen} handleClose={projectClose} />
        )}
        {techModalOpen && (
          <Technology modalOpen={techModalOpen} handleClose={techClose} />
        )}
      </AnimatePresence>
    </div>
  );
}
