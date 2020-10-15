import React, { useState, useCallback, useEffect } from "react";
import debounce from "lodash.debounce";

import { FaAlignRight } from "react-icons/fa";
import { SiNextdoor } from "react-icons/si";
import { RiDoorOpenFill } from "react-icons/ri";
import { RiLoginBoxFill } from "react-icons/ri";
import { MdAddToPhotos } from "react-icons/md";
import { RiQuestionLine } from "react-icons/ri";
import { BiChair } from "react-icons/bi";
import { BiCast } from "react-icons/bi";

import "../style/header.css";
import { Link } from "react-router-dom";
import ColorPicker from "../components/entryway/ColorPicker";

//www.pluralsight.com/guides/re-render-react-component-on-window-resize

export default function Header(props) {
  // eslint-disable-next-line
  const [toggle, setToggle] = useState(false);
  // eslint-disable-next-line
  const [isMobile, setMobile] = useState(false);
  // eslint-disable-next-line
  const [miniMenu, setminiMenu] = useState(false);

  const [dimensions, setDimensions] = React.useState({
    height: window.innerHeight,
    width: window.innerWidth,
  });

  const Toggle = () => {
    setToggle(!toggle);
  };

  ///ok. if window size below blah, call Toggle() to 'hide' select part of menu.
  //useCallback - to debounce
  //handleResize
  //get window size

  // const checkWindow = (val) => {
  //   //console.log(isMobile);
  //   console.log("INSIDE: mobile: ", isMobile, "toggle: ", toggle);
  //   //setDimensions(val);
  //   if (val.width < 1000) {
  //     //console.log("BIG WINDOW: toggle: ", toggle);

  //     setMobile(true); // this isn't working. WHY.
  //     setToggle(true); // the toggle value, however, IS being reset. ARG.maybe this is because the condition its checking isnt against itself. ARG.
  //   } else if (val.width > 1000) {
  //     console.log("BIG WINDOW: toggle: ", toggle);
  //     //val.width > 1000 &&
  //     //console.log("greater then 1000", val.width);
  //     console.log(
  //       "greater then 1000",
  //       "mobile: ",
  //       isMobile,
  //       "toggle: ",
  //       toggle
  //     );
  //     //setMobile(false); // this isn't being applied or updated...
  //     setToggle(false);
  //   }

  // };
  // console.log("OUTSIDE : mobile: ", isMobile, "toggle: ", toggle);

  // const debouncedSave = useCallback(
  //   //passing isMobile at this level, made no difference
  //   debounce((nextVal) => checkWindow(nextVal), 100),
  //   [] // will be created only once initially
  //   // when i had the timer set to 1000 i got setTimeOut warnings - tried setting this to 100, but still got a warning.
  // );

  // const onChange = () => {
  //   const dimensions = {
  //     height: window.innerHeight,
  //     width: window.innerWidth,
  //   };
  //   // const { value: nextValue } = e.target;
  //   //setValue(nextValue);
  //   // Even though handleChange is created on each render and executed
  //   // it references the same debouncedSave that was created initially
  //   debouncedSave(dimensions);
  // };
  // //i think i need the debounce to happen on this listener....
  // window.addEventListener("resize", onChange);

  return (
    <nav className="navBar">
      <ul className="show-nav">
        <ColorPicker
          colorCapture={props.colorCapture}
          patchColor={props.patchColor}
        />
        <li className={toggle ? "hide-nav" : "show-nav"}>
          <Link to="/entryway">
            <RiDoorOpenFill />
            Entryway
          </Link>
        </li>

        <li className={toggle ? "hide-nav" : "show-nav"}>
          <Link to="/auth">
            <RiLoginBoxFill />
            Login
          </Link>
        </li>
        <li className={toggle ? "hide-nav" : "show-nav"}>
          <Link to="/oOoOs">
            <BiCast />
            404
          </Link>
        </li>
        <li className={toggle ? "hide-nav user" : "show-nav user"}>
          <Link to="/traces">
            <MdAddToPhotos />
          </Link>
        </li>
        <li className={toggle ? "hide-nav user" : "show-nav user"}>
          <Link to="/events">
            <BiChair />
          </Link>
        </li>

        <li className={toggle ? "hide-nav user" : "show-nav user"}>
          <Link to="/">
            <SiNextdoor />
          </Link>
        </li>

        <li className={toggle ? "hide-nav user" : "show-nav user"}>
          <Link to="/about3e">
            <RiQuestionLine />
          </Link>
        </li>
      </ul>
      <ul>
        <li className="miniMenu">
          <button onClick={Toggle}>
            <FaAlignRight />
          </button>
        </li>
      </ul>
    </nav>
  );
}
