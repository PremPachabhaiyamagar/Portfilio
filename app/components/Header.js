"use client";
import React from "react";
import { BsFacebook, BsGithub } from "react-icons/bs";
import { FaInstagramSquare } from "react-icons/fa";
import { AiFillLinkedin } from "react-icons/ai";
// import { GoThreeBars } from "react-icons/go";
import { FaBars } from "react-icons/fa";
import { BiArrowBack } from "react-icons/bi";
import { useState, useEffect } from "react";
// import Image from "next/image";
// import AlanImg from "../components/assets/Alan.png";
import ScrollTo, { scrollIntoView } from "react-scroll-into-view";

export const Header = () => {
  const [toogle, setToogle] = useState(false);
  const moveToTop = () => {
    if (typeof document !== "undefined") {
      document.documentElement.scrollTop = 0;
    }
  };
  const changeToogle = () => {
    setToogle(!toogle);
  };

  return (
    <>
      {toogle === false ? (
        <div className="header-container">
          {/* <Image
            alt="alan logo"
            src={AlanImg}
            width={"3rem"}
            className="w-[8rem] lg:w-[12rem]"
          /> */}
          <div className="w-[8rem] lg:w-[12rem] font-extrabold text-3xl tracking-wider text-red-500 drop-shadow-md">
            PREM
          </div>
          <ul>
            <ScrollTo selector=".dot">
              <li>Home</li>
            </ScrollTo>

            <ScrollTo selector=".abt">
              <li>About</li>
            </ScrollTo>

            <ScrollTo selector=".service-container">
              <li>services</li>
            </ScrollTo>

            <ScrollTo selector=".prjt">
              <li>projects</li>
            </ScrollTo>

            <ScrollTo selector=" .cnt">
              <li>contact</li>
            </ScrollTo>
          </ul>
          <ul>
            <li>
              <a href="https://www.facebook.com/profile.php?id=100030118779626">
                <BsFacebook />
              </a>
            </li>
            <li>
              <a href="https://www.instagram.com/mr.magar35/">
                <FaInstagramSquare />
              </a>
            </li>
            <li>
              <a href="https://www.linkedin.com/in/prem-pachabhaiya-773995229/">
                <AiFillLinkedin />
              </a>
            </li>
            <li>
              <a href="https://github.com/PremPachabhaiyamagar">
                <BsGithub />
              </a>
            </li>
          </ul>
          <FaBars className="nav" onClick={changeToogle} />
        </div>
      ) : (
        <div className="modal">
          <BiArrowBack className="back" onClick={changeToogle} />
          <ul>
            <ScrollTo selector=".dot">
              <li onClick={changeToogle}>Home</li>
            </ScrollTo>

            <ScrollTo selector=".abt">
              <li onClick={changeToogle}>About</li>
            </ScrollTo>

            <ScrollTo selector=".service-container">
              <li onClick={changeToogle}>services</li>
            </ScrollTo>

            <ScrollTo selector=".prjt">
              <li onClick={changeToogle}>projects</li>
            </ScrollTo>

            <ScrollTo selector=".cnt">
              <li onClick={changeToogle}>contact</li>
            </ScrollTo>
          </ul>
          <h1>Connect with me on</h1>
          <ul className="links">
            <li>
              <a href="https://www.facebook.com/profile.php?id=100030118779626">
                <BsFacebook />
              </a>
            </li>
            <li>
              <a href="https://www.instagram.com/mr.magar35/">
                <FaInstagramSquare />
              </a>
            </li>
            <li>
              <a href="https://www.linkedin.com/in/prem-pachabhaiya-773995229/">
                <AiFillLinkedin />
              </a>
            </li>
            <li>
              <a href="https://github.com/PremPachabhaiyamagar">
                <BsGithub />
              </a>
            </li>
          </ul>
        </div>
      )}
    </>
  );
};
export default Header;
