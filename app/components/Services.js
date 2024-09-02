"use client";
import React from "react";
import { AiOutlineStar } from "react-icons/ai";
import { useInView } from "react-intersection-observer";
import { useEffect } from "react";
import { motion, useAnimation } from "framer-motion";

export const Services = () => {
  const [ref, inView] = useInView({
    /* Optional options */
    threshold: 0.3,
  });
  const [ref2, inView2] = useInView({
    /* Optional options */
    threshold: 0.3,
  });
  const variants = {
    hidden: { opacity: 0, x: 500 },
    visible: {
      opacity: 1,

      x: 0,

      transition: {
        type: "spring",
        staggerChildren: 0.7,

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
    <div className="service-container" ref={ref}>
      <h1>services</h1>
      <motion.div
        initial="hidden"
        animate={animation}
        variants={variants}
        className="service-card"
      >
        <motion.ul className="w-[40rem]">
          <div className="relative flex justify-between items-center gap-[5rem]">
            <li className="mr-5">Responsive Websites</li>
            <img
              src="images/tick.png"
              className="w-5 h-5 absolute right-0 ml-5"
            />
          </div>
          <div className="relative flex justify-between items-center">
            <li>Client and Server Applications</li>
            <img src="images/tick.png" className="w-5 h-5 absolute right-0" />
          </div>
          <div className="relative flex justify-between items-center">
            <li>Progressive Web Apps</li>
            <img src="images/tick.png" className="w-5 h-5 absolute right-0" />
          </div>
          {/* <div className="relative flex justify-between items-center">
            <li>UI/UX Design</li>
            <img src="images/tick.png" className="w-5 h-5 absolute right-0" />
          </div> */}
          {/* <div className="relative flex justify-between items-center">
            <li>Logo Design and SVG creation</li>
            <img src="images/tick.png" className="w-5 h-5 absolute right-0" />
          </div> */}
          <div className="relative flex justify-between items-center">
            <li>Creating and managing DBs.</li>
            <img src="images/tick.png" className="w-5 h-5 absolute right-0" />
          </div>
          <div className="relative flex justify-between items-center">
            <li>Creating REST Api's</li>
            <img src="images/tick.png" className="w-5 h-5 absolute right-0" />
          </div>
          <div className="relative flex justify-between items-center">
            <li>Search Engine Optimization(SEO)</li>
            <img src="images/tick.png" className="w-5 h-5 absolute right-0" />
          </div>
          {/* <div className="relative flex justify-between items-center">
						<li>Creating REST Api's</li>
						<img src="images/tick.png" className="w-5 h-5 absolute right-0" />
					</div>

					<li>Client and Server side Applications</li>
					<li>UI/UX Design</li>
					<li>Logo Design and SVG creation</li>

					<li>Creating REST Api's</li>
					<li>Creating and managing your Backend.</li>
					<li>Search Engine Optimization(SEO)</li> */}
        </motion.ul>
        {/* <div className="tick">
					<img src="images/tick.png" />
					<img src="images/tick.png" />
					<img src="images/tick.png" />
					<img src="images/tick.png" />
					<img src="images/tick.png" />
					<img src="images/tick.png" />
					<img src="images/tick.png" />
				</div> */}
      </motion.div>
      <motion.div ref={ref2}>
        <motion.p initial="hidden" animate={animation2} variants={variants}>
          I always focus on meeting the client's demand to the top notch and
          deliver the products on time.Will be responsible for the entire
          application developement and deploying the site on cloud making it
          live. Catch me up to make your product stand out top on Web.
          <br />
          Thanks,lets build something Awesome !!
        </motion.p>
      </motion.div>
    </div>
  );
};
export default Services;
