"use client";
import React from "react";
import { useInView } from "react-intersection-observer";
import { useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import ScrollTo from "react-scroll-into-view";
import { BsArrowDownShort } from "react-icons/bs";

export const Home = () => {
  const [ref, inView] = useInView({
    /* Optional options */
    threshold: 0.3,
  });
  const variants = {
    hidden: { opacity: 0, x: 100 },
    visible: {
      opacity: 1,
      scale: 1,

      x: 0,

      transition: {
        type: "spring",
        staggerChildren: 0.5,

        duration: 1,
        bounce: 0.5,
      },
    },
  };

  const animation = useAnimation();
  useEffect(() => {
    if (inView) {
      animation.start("visible");
    } else {
      animation.start("hidden");
    }
  }, [inView, animation]);

  const variants2 = {
    visible: {
      opacity: 1,

      transition: {
        delay: 0.5,
        duration: 1,
      },
    },
    hidden: {
      x: 100,
      opacity: 0,
    },
  };
  const moveBottom = () => {
    console.log("hello");
    window.scrollTo(0, 9999);
  };

  return (
    <>
      <div>
        <motion.div className="home-container">
          <p className="dot">.....</p>
          <motion.div
            ref={ref}
            initial="hidden"
            animate={animation}
            variants={variants}
          >
            <motion.h1 className="h" variants={variants}>
              Hi,Prem here,
            </motion.h1>
            <motion.h2 variants={variants}>
              A passionate Frontend Developer
            </motion.h2>
            <motion.p variants={variants}>
              Looking for someone to build and make your products standout on
              Web?
            </motion.p>
            <motion.p1 variants={variants}>
              lets walk around,I will build a fully responsive Client
              Side,Server Side and Dynamic Single Page applications
            </motion.p1>
          </motion.div>
        </motion.div>
      </div>

      <ScrollTo selector=".abt">
        <div
          className="arrow-container animated fadeInDown"
          onClick={moveBottom}
        >
          <div className="arrow-2">
            <BsArrowDownShort
              style={{
                color: "black",
                width: 40,
                height: 40,
                position: "relative",
                left: "50%",
                top: "50%",
                transform: "translate(-50%,-50%)",
              }}
            />
            {/* <i className="fa fa-angle-down"></i> */}
          </div>
          <div className="arrow-1 animated hinge infinite zoomIn"></div>
        </div>
      </ScrollTo>
    </>
  );
};
export default Home;
