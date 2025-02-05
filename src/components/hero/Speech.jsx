import React from "react";
import { TypeAnimation } from "react-type-animation";
import { motion } from "motion/react";

const Speech = () => {
  return (
    <motion.div
      className="bubbleContainer"
      animate={{ opacity: [0, 1] }}
      transition={{ duration: 1 }}
    >
      <div className="bubble">
        <TypeAnimation
          sequence={[
            1000, // wait 1s before typing out the first string
            // Same substring at the start will only be typed out once, initially
            "Crafting sleek, responsive, and user-friendly web experiences.",
            1000, // wait 1s before replacing "Mice" with "Hamsters"
            "Expert in HTML, CSS, JavaScript, and modern frameworks.",
            1000,
            "Transforming ideas into interactive, pixel-perfect designs.",
            1000,
            "Committed to delivering high-performance and visually stunning websites.",
            1000,
          ]}
          wrapper="span"
          speed={40}
          deletionSpeed={60}
          //   omitDeletionAnimation
          repeat={Infinity}
        />
      </div>
      <img src="/man.png" alt="" />
    </motion.div>
  );
};

export default Speech;
