import React from "react";
import cardBg from "../images/cardBackground.png";
import { motion } from "framer-motion";

const Card = (props) => {
  const container = {
    hidden: { opacity: 1, scale: 0 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.2,
      },
    },
  };

  const item = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
    },
  };
  return (
    <div className="w-full">
      <motion.div
        variants={container}
        initial="hidden"
        animate="visible"
        className="flex flex-col relative rounded-lg h-full shadow-md shadow-gray-300"
      >
        <img
          src={cardBg}
          alt={cardBg}
          className="rounded-lg absolute h-full w-full"
        />
        <div className="z-10 p-6">
          <motion.h5 variants={item} className="text-gray-500">
            {props.title}
          </motion.h5>
          <motion.div
            variants={item}
            className="p-4 flex justify-end text-white gap-2"
          >
            <p className="font-extrabold text-6xl">{props.count}</p>
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
};

export default Card;
