import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function Navigation() {
  const [toggle, setToggle] = useState(false);
  const handleClick = () => {
    setToggle(!toggle);
    console.log(toggle);
  };
  return (
    <div>
      <AnimatePresence>
        {toggle && (
          <motion.nav
            key="ahsdfajksdhfakjsdfhakjdshf"
            initial={{ scale: 0}}
            animate={{ scale: 1}}
            exit={{ scale: 0, transition: { duration: 0.5 } }}
            transition={{ duration: 0.6, ease: 'easeIn' }}
          >
            <ul id="primary-navigation" className="primary-navigation flex">
              <li className="active">
                <a>
                  <span aria-hidden="true">01</span> About Me
                </a>
              </li>
              <li>
                <a>
                  <span aria-hidden="true">02</span> Projects
                </a>
              </li>
              <li>
                <a>
                  <span aria-hidden="true">03</span> Technology
                </a>
              </li>
            </ul>
          </motion.nav>
        )}
      </AnimatePresence>
      <button className="mobile-nav-toggle" onClick={handleClick}></button>
    </div>
  );
}
