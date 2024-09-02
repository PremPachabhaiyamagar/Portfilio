"use client";
import React, { useEffect } from "react";
import MyImage from "../assets/Prem.png";
import Image from "next/image";
import { useInView } from "react-intersection-observer";
import css from "styled-jsx/css";
import { motion, useAnimation } from "framer-motion";

const AboutMe = () => {
  const [ref, inView] = useInView({
    threshold: 0.2,
  });
  const animation = useAnimation();
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
  useEffect(() => {
    if (inView) {
      animation.start("visible");
    } else {
      animation.start("hidden");
    }
  }, [inView, animation]);
  const fontStyles = css`
    @import url("https://fonts.googleapis.com/css2?family=Dancing+Script:wght@500&family=Mr+Dafoe&display=swap");

    .card-header-text h1 {
      font-family: "Dancing Script", cursive;
      font-family: "Mr Dafoe", cursive;
    }
  `;
  return (
    <>
      <h1 className="text-center about-head mt-[3rem] mb-[3rem] abt">
        About Me
      </h1>
      <motion.div
        ref={ref}
        initial="hidden"
        animate={animation}
        variants={variants}
        className="about_me border-white w-full  items-center lg:flex flex-row justify-center none "
      >
        <Image
          src={MyImage}
          className="lg:w-3/5 mx-auto"
          alt="Prem_Pachabhaiya_photo"
        />
        <div className="w-full flex-col lg:flex-row justify-between">
          <div className="none">
            <motion.div variants={variants} className="card-header-text">
              <h1 className="w-full mx-auto text-center lg:text-start font-thin">
                Prem Pachabhaiya
              </h1>

              <h1 className="text-center lg:text-start">
                Frontend Web Developer
              </h1>
              <h1 className="text-center lg:text-start">Kathmandu , Nepal</h1>
            </motion.div>

            <motion.div variants={variants} className="card-text">
              <p className="lg:mr-5">
                I am a 22 year old self tought FrontEnd developer currently
                doing B.Tech in Artificial Intelligence and Data Science
                Engineering(CAD).I have been coding since 3 years and now with
                Javascript and its various libraries and frameworks for about 2
                years and fallen in love with it.I always want to learn new
                things and perform recurring things smartly and give my best for
                whom I am working.
              </p>
            </motion.div>
          </div>
        </div>
      </motion.div>
    </>
  );
};

export default AboutMe;
