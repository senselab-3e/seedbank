import React, { useState, useCallback } from "react";
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
  const [value, setValue] = useState("");

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
  //   console.log(val < 900);
  //   //setMobile(true)

  // };

  console.log(dimensions);

  const debouncedSave = useCallback(
    debounce((nextVal) => setDimensions(nextVal), 300),
    [] // will be created only once initially
  );

  const onChange = () => {
    const dimensions = {
      height: window.innerHeight,
      width: window.innerWidth,
    };
    // const { value: nextValue } = e.target;
    //setValue(nextValue);
    // Even though handleChange is created on each render and executed
    // it references the same debouncedSave that was created initially
    debouncedSave(dimensions);
  };

  window.addEventListener("resize", onChange);

  return (
    <nav className="navBar">
      <ul>
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
        <li>
          <button onClick={Toggle}>
            <FaAlignRight />
          </button>
        </li>
      </ul>
    </nav>
  );
}
