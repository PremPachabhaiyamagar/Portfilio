"use client";
import React from "react";
import { useInView } from "react-intersection-observer";
import { useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import { BsGithub } from "react-icons/bs";
import { ImLink } from "react-icons/im";
import ImageGallery from "react-image-gallery";

export const Projects = () => {
  const [ref, inView] = useInView({
    /* Optional options */
    threshold: 0.2,
  });
  const [ref1, inView1] = useInView({
    /* Optional options */
    threshold: 0.3,
  });
  const [ref2, inView2] = useInView({
    /* Optional options */
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
  const animation3 = useAnimation();
  useEffect(() => {
    if (inView) {
      animation.start("visible");
      return animation.stop;
    } else {
      animation.start("hidden");
    }
  }, [inView, animation, inView1]);
  useEffect(() => {
    if (inView1) {
      animation2.start("visible");
      return animation2.stop;
    } else {
      animation2.start("hidden");
    }
  }, [inView1, animation2]);
  useEffect(() => {
    if (inView2) {
      animation3.start("visible");
      return animation3.stop;
    } else {
      animation3.start("hidden");
    }
  }, [inView2, animation3]);
  const linked = [
    {
      original: "images/linked/1.png",
      thumbnail: "images/linked/1.png",
    },
    {
      original: "images/linked/2.png",
      thumbnail: "images/linked/2.png",
    },
    {
      original: "images/linked/3.png",
      thumbnail: "images/linked/3.png",
    },
  ];
  const eCom = [
    {
      original: "images/e-com/1.png",
      thumbnail: "images/e-com/1.png/",
    },
    {
      original: "images/e-com/2.png",
      thumbnail: "images/e-com/2.png",
    },
    {
      original: "images/e-com/3.png",
      thumbnail: "images/e-com/3.png",
    },
    {
      original: "images/e-com/4.png",
      thumbnail: "images/e-com/4.png",
    },
  ];
  const gravity = [
    {
      original: "images/gravity//1.png",
      thumbnail: "images/gravity/1.png/",
    },
    {
      original: "images/gravity/2.png",
      thumbnail: "images/gravity/2.png",
    },
    {
      original: "images/gravity/3.png",
      thumbnail: "images/gravity/3.png",
    },
  ];

  return (
    <>
      <motion.div className="project-container">
        <motion.h1 variants={variants}>My Projects</motion.h1>
        <motion.div
          ref={ref2}
          initial="hidden"
          animate={animation3}
          variants={variants}
          className="project-card"
        >
          <motion.h2 variants={variants}>React E-commerce Shoe-Store</motion.h2>
          <motion.div variants={variants} className="project-content-wrapper">
            <ImageGallery items={eCom} className="max-h-10 h-1" />

            <motion.p variants={variants}>
              The is the simple e-commerse project built with MERN Stack
              (MongoDb,Express,React and Node). The main purpose of building
              this app is to simulate a user landing on a site and ordering a
              product which he likes. All the functionality are working pretty
              fine though still lots of work is to be done on both refinement
              and functionality which I will be adding later. I have used redux
              to store the state of user and cart items.Also,stripe payment
              gateway is implemented for the test payment.A user can visit all
              his purchased items in the purchase page as well.
            </motion.p>
          </motion.div>
          <div className="flex items-center justify-center gap-10">
            <a href="!#">
              <BsGithub className="gitt" />
            </a>
            <a href="https://shoestore-online.netlify.app/">
              <ImLink className="gitt" />
            </a>
          </div>
        </motion.div>

        <motion.div
          ref={ref}
          initial="hidden"
          animate={animation}
          variants={variants}
          className="project-card"
        >
          <motion.h2 variants={variants}>React-Gravity-Balls</motion.h2>
          <motion.div variants={variants} className="project-content-wrapper">
            <ImageGallery items={gravity} />;
            <motion.p variants={variants}>
              This is the gravity simulation app made in a consideration that
              anything that has mass is impacted by gravity. Objects with more
              mass have more gravity. Gravity also gets weaker with distance.
              So, the closer objects are to each other, the stronger their
              gravitational pull is. Due to this phenomena every objects left in
              a free space drops down to the ground level as it is attracted
              toward the center of the earth. With the gravitational force
              applying on an object while leaving in a free space and the loss
              of energy by an object when it comes in contact with the ground
              due to friction is the main points taken in consideration while
              buiilding this app. However,resistance due to air is neglected
              This app is built with Canvas,JavaScript,React and Physics.
            </motion.p>
          </motion.div>
          <div className="flex items-center justify-center gap-10">
            <a href="!#">
              <BsGithub className="gitt" />
            </a>
            <a href="https://react-gravity-simulation.herokuapp.com/">
              <ImLink className="gitt" />
            </a>
          </div>
        </motion.div>
        <motion.div
          ref={ref1}
          initial="hidden"
          animate={animation2}
          variants={variants}
          className="project-card"
        >
          <motion.h2 variants={variants}>LinkedIn-Clone</motion.h2>
          <motion.div variants={variants} className="project-content-wrapper">
            <ImageGallery items={linked} />
            <motion.p variants={variants}>
              LinkedIn is the world's largest professional network on the
              internet. You can use LinkedIn to find the right job or
              internship, connect and strengthen professional relationships, and
              learn the skills you need to succeed in your career. You can
              access LinkedIn from a desktop, LinkedIn mobile app, mobile web
              experience, or the LinkedIn Lite Android mobile app. This app only
              tries to simulate how we perform different CRUD operations on it
              perticulary focusing on posting something with images and videos.
              I have used React,Redux,Styled Components for frontend and
              Firebase for backend.
            </motion.p>
          </motion.div>
          <div className="flex items-center justify-center gap-10">
            <a href="https://github.com/AlanNJ/linkedin-clone">
              <BsGithub className="gitt" />
            </a>
            <a href="https://github.com/AlanNJ/linkedin-clone">
              <ImLink className="gitt" />
            </a>
          </div>
        </motion.div>
      </motion.div>
    </>
  );
};
export default Projects;
