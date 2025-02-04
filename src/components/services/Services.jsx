import React, { useRef } from "react";
import "./Services.css";
import ComputerModelContainer from "./computer/ComputerModelContainer";
import { title } from "motion/react-client";
import Counter from "./counter";
import { motion } from "motion/react";
import { useInView } from "react-intersection-observer";

const textVariants = {
  initial: {
    x: -100,
    y: -100,
    opacity: 0,
  },
  animate: {
    x: 0,
    y: 0,
    opacity: 1,
    transition: {
      duration: 1,
    },
  },
};

const listVariants = {
  initial: {
    x: -100,
    opacity: 0,
  },
  animate: {
    x: 0,
    opacity: 1,
    transition: {
      duration: 1,
      staggerChildren: 0.5,
    },
  },
};

const services = [
  {
    id: 1,
    img: "service1.png",
    title: "Web Development",
    Counter: 35,
  },
  {
    id: 2,
    img: "service2.png",
    title: "Product Design",
    Counter: 23,
  },
  {
    id: 3,
    img: "service3.png",
    title: "Branding",
    Counter: 15,
  },
];

const Services = () => {
  const ref = useRef();
  const isInView = useInView(ref);
  return (
    <div className="services" ref={ref}>
      <div className="sSection left">
        <motion.h1
          variants={textVariants}
          initial="initial"
          animate="animate"
          className="sTitle"
        >
          How do I help?
        </motion.h1>
        <div className="serviceList">
          {services.map((service) => (
            <div className="service" key={service.id}>
              <div className="serviceIcon">
                <img src={service.img} alt="" />
              </div>
              <div className="serviceInfo">
                <h2>{service.title}</h2>
                <h3>{service.Counter} Projects</h3>
              </div>
            </div>
          ))}
        </div>
        <div className="counterList">
          <Counter from={0} to={104} text="Projects Completed" />
          <Counter from={0} to={72} text="Happy Clients" />
        </div>
      </div>
      <div className="sSection right"><ComputerModelContainer /></div>
    </div>
  );
};

export default Services;
