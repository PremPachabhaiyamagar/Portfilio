"use client";
import React from "react";
import Header from "./Header";
import Home from "./Home";
import About from "./About";

import Contact from "./Contact";
import Services from "./Services";
import Projects from "./projects/Projects";
import AboutMe from "../components/about/About";
import ContactUpdated from "../components/contact/ContactUpdated";

export const Main = () => {
  return (
    <div className="main-container">
      <Header />
      <Home />

      <AboutMe />
      <Services />
      <Projects />
      {/* <Contact /> */}
      <ContactUpdated />
    </div>
  );
};
export default Main;
