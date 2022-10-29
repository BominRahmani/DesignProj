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
  const [modalNav, setModalNav] = useState({
    about: false,
    tech: false,
    projects: false,
  });
  const handleClick = () => {
    setToggle(!toggle);
    aboutClose();
    projectClose();
    techClose();
  };
  return (
    <div>
      <AnimatePresence>
        {toggle && !modalOpen && !techModalOpen && !projectModalOpen && (
          <motion.nav
            key="ahsdfajksdhfakjsdfhakjdshf"
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            exit={{ scale: 0, transition: { duration: 0.5 } }}
            transition={{ duration: 0.6, ease: "easeIn" }}
          >
            <ul id="primary-navigation" className="primary-navigation flex">
              <li className="active">
                <a onClick={() => (modalOpen ? aboutClose() : aboutOpen())}>
                  <span aria-hidden="true">01</span> About Me
                </a>
              </li>
              <li>
                <a
                  onClick={() =>
                    projectModalOpen ? projectClose() : projectOpen()
                  }
                >
                  <span aria-hidden="true">02</span> Technology
                </a>
              </li>
              <li>
                <a onClick={() => (techModalOpen ? techClose() : techOpen())}>
                  <span aria-hidden="true">03</span> Projects
                </a>
              </li>
            </ul>
          </motion.nav>
        )}
      </AnimatePresence>
      <button className="mobile-nav-toggle" onClick={handleClick}></button>
      <AnimatePresence
        initial={false}
        exitBeforeEnter={true}
        onExitComplete={() => null}
      >
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
