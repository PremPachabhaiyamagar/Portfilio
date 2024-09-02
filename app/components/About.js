"use client";
import React from "react";
import { useInView } from "react-intersection-observer";
import { useEffect } from "react";
import ScrollTo from "react-scroll-into-view";
import { BsArrowDownShort } from "react-icons/bs";
import { motion, useAnimation } from "framer-motion";

export const About = () => {
  const [ref, inView] = useInView({
    threshold: 0.2,
  });
  const [ref2, inView2] = useInView({
    threshold: 0.2,
  });
  const variants = {
    hidden: { opacity: 0, x: 100 },
    visible: {
      opacity: 1,

      x: 0,

      transition: {
        type: "spring",
        staggerChildren: 0.4,

        duration: 1,
        bounce: 0.5,
      },
    },
  };
  const animation = useAnimation();
  const animation2 = useAnimation();
  useEffect(() => {
    if (inView) {
      animation.start("visible");
    } else {
      animation.start("hidden");
    }
  }, [inView, animation]);
  useEffect(() => {
    if (inView2) {
      animation2.start("visible");
    } else {
      animation2.start("hidden");
    }
  }, [inView2, animation2]);

  return (
    <>
      <div className="about-container" name="section11" id="section1">
        <h1 className="about-heading" id="lang">
          About me
        </h1>

        <motion.div
          ref={ref}
          initial="hidden"
          animate={animation}
          variants={variants}
          className="about-container-body"
        >
          <div className="card">
            <div className="card-pp"></div>
            <motion.div variants={variants} className="card-header-text">
              <h1 className="">Prem Pachabhaiya</h1>

              <h1>Frontend Web Developer</h1>
              <h1>Kathmandu , Nepal</h1>
            </motion.div>

            <motion.div variants={variants} className="card-text">
              <p>
                I am a 21 year old self tought FrontEnd developer currently
                doing B.Tech in Artificial Intelligence and Data Science
                Engineering(CAD).I have been coding since 4 years and now with
                Javascript and its various libraries and frameworks for about 2
                years and fallen in love with it.I always want to learn new
                things and perform recurring things smartly and give my best for
                whom I am working.
              </p>
            </motion.div>
          </div>
          <motion.div
            ref={ref2}
            initial="hidden"
            animate={animation2}
            variants={variants}
            className="cardd card-right"
          >
            <h1 className="text-3xl font-bold">Languages and Tools I use</h1>
            <ul>
              <li>
                <img src="./images/html.png" />
              </li>
              <li>
                <img src="./images/css.png" />
              </li>
              <li>
                <img src="./images/js.png" />
              </li>
              <li>
                <img src="./images/react.png" />
              </li>
              <li>
                <img src="./images/node.png" />
              </li>
              <li>
                <img src="./images/mongo.png" />
              </li>
              <li>
                <img src="./images/git.png" />
              </li>
              <li>
                <img src="./images/amazon.png" />
              </li>
              <li>
                <img src="./images/figma.png" />
              </li>
            </ul>
          </motion.div>
        </motion.div>
      </div>
    </>
  );
};
export default About;
