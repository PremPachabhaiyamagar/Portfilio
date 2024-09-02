import React from "react";
import ProductCard from "../ProductCard/ProductCard";
// import ProductCard from "../ProductCard/ProductCards";
import { motion } from "framer-motion";
import Slider from "react-slick";
import "../css/about.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
const Projects = () => {
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
  var settings = {
    dots: true,

    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    initialSlide: 1,
    arrows: true,
    appendDots: (dots) => <h1>{dots}</h1>,
    focusOnSelect: true,
    responsive: [
      {
        breakpoint: 1244,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  const projects = [
    {
      id: 1,
      mainImage:
        "https://res.cloudinary.com/dnwtfserf/image/upload/v1685555853/shopify-banner_cgyibf.png",
      mainText: "Full Stack E-commerce App",
      features: ["Responsive Design", "Products Listings", "Payment Gateway"],
      links: [
        "https://shopify-frontend-5d0ba.web.app/",
        "https://shopify-frontend-5d0ba.web.app/",
      ],
    },
    {
      id: 2,
      mainImage:
        "https://res.cloudinary.com/dnwtfserf/image/upload/v1685555836/gravityBanner_vn62dk.png",
      mainText: "React Gravity Simulation",
      features: [
        "Physics Concept Simulaton",
        "Experimental Values",
        "Interactive Demonstration",
      ],
      links: [
        "https://vercel.com/prem-pachabhaiyas-projects/gravity-simulation",
        "https://github.com/PremPachabhaiyamagar/Gravity_simulation.git",
      ],
    },
    {
      id: 3,
      mainImage:
        "https://res.cloudinary.com/dnwtfserf/image/upload/v1685612239/dashyBanner_upvnyn.png",
      mainText: "Interactive Dashboard UI",
      features: ["Multiple Sections", "Customization Space", "Full fludged"],
      links: ["https://dashyy-b6ffa.web.app/", "https://dashyy-b6ffa.web.app/"],
    },
  ];
  return (
    <motion.div className="about-container prjt">
      <h1 variants={variants} className="about-heading" id="lang">
        My Projects
      </h1>
      <div className="w-full flex flex-col gap-5 mx-auto justify-between lg:flex-row">
        <Slider {...settings} className="gap-5">
          {/* <ProductCard />
					<ProductCard />
					<ProductCard />
					<ProductCard />
					<ProductCard /> */}
          {projects &&
            projects.map((item) => <ProductCard item={item} key={item.id} />)}
        </Slider>
      </div>
    </motion.div>
  );
};

export default Projects;
