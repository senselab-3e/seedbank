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
import { IoIosCloseCircle } from "react-icons/io";

import "../style/header.css";
import { Link } from "react-router-dom";
import ColorPicker from "../components/entryway/ColorPicker";

export default function Header(props) {
  const [toggle, setToggle] = useState(false);

  const Toggle = () => {
    setToggle(!toggle);
  };

  ///ok. if window size below blah, call Toggle() to 'hide' select part of menu.
  //useCallback - to debounce
  //handleResize
  //get window size

  const checkWindow = () => {
    let mql = window.matchMedia("(max-width: 1000px)");
    console.log(mql.matches);
    mql.matches ? setToggle(true) : setToggle(false);
  };
  const memoizedCallback = useCallback(
    debounce(() => checkWindow(), 300),
    []
  );

  React.useEffect(() => {
    memoizedCallback();
  }, [memoizedCallback]);

  window.addEventListener("resize", memoizedCallback);
  console.log(toggle);

  //if i put the size of the icons with text beside them, above 20, then their baseline no longer lines up with the first non link list item in the header.
  return (
    <nav className="navBar">
      <ul className="show-nav">
        <ColorPicker
          colorCapture={props.colorCapture}
          patchColor={props.patchColor}
        />
        <li className={toggle ? "hide-nav" : "show-nav"}>
          <Link to="/entryway">
            <RiDoorOpenFill size={20} />
            <label>Entryway</label>
          </Link>
        </li>

        <li className={toggle ? "hide-nav" : "show-nav"}>
          <Link to="/auth">
            <RiLoginBoxFill size={20} />
            <label>Login</label>
          </Link>
        </li>
        <li className={toggle ? "hide-nav" : "show-nav"}>
          <Link to="/oOoOs">
            <BiCast size={20} />
            <label>404</label>
          </Link>
        </li>
        <li className={toggle ? "hide-nav user" : "show-nav user"}>
          <Link to="/traces">
            <MdAddToPhotos size={23} />
          </Link>
        </li>
        <li className={toggle ? "hide-nav user" : "show-nav user"}>
          <Link to="/events">
            <BiChair size={25} />
          </Link>
        </li>

        <li className={toggle ? "hide-nav user" : "show-nav user"}>
          <Link to="/">
            <SiNextdoor size={25} />
          </Link>
        </li>

        <li className={toggle ? "hide-nav user" : "show-nav user"}>
          <Link to="/about3e">
            <RiQuestionLine size={25} />
          </Link>
        </li>
        <li className="miniMenu" onClick={Toggle}>
          {toggle ? <FaAlignRight size={20} /> : <IoIosCloseCircle size={30} />}
        </li>
      </ul>
    </nav>
  );
}

//{toggle ? <FaAlignRight size={20} /> : <IoIosCloseCircle size={30} />}
