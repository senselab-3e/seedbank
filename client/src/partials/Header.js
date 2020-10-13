import React, { useState } from "react";
// import { FaAlignRight } from "react-icons/fa";
import { SiNextdoor } from "react-icons/si";
import { RiDoorOpenFill } from "react-icons/ri";
import { RiLoginBoxFill } from "react-icons/ri";
import { MdAddToPhotos } from "react-icons/md";
import { RiQuestionLine } from "react-icons/ri";
import { BiChair } from "react-icons/bi";
import { BiCast } from "react-icons/bi";

import "../style/header.css";
import { Link } from "react-router-dom";
import ColorPicker from "../components/ColorPicker";

export default function Header(props) {
  // eslint-disable-next-line
  const [toggle, setToggle] = useState(false);

  // const Toggle = () => {
  //   setToggle(!toggle);
  // };

  //this is useful for appearing disappearing accordian
  //<ul className={toggle ? "nav-links show-nav" : "nav-links"}></ul>
  // <button onClick={Toggle}>
  //       <FaAlignRight />
  //     </button>

  return (
    <nav className="navBar">
      <ul>
        <ColorPicker
          colorCapture={props.colorCapture}
          patchColor={props.patchColor}
        />
        <li>
          <Link to="/entryway">
            <RiDoorOpenFill />
            Entryway
          </Link>
        </li>

        <li>
          <Link to="/auth">
            <RiLoginBoxFill />
            Login
          </Link>
        </li>
        <li>
          <Link to="/about3e">
            <RiQuestionLine />
          </Link>
        </li>
        <li>
          <Link to="/events">
            <BiChair />
          </Link>
        </li>

        <li className="user">
          <Link to="/">
            <SiNextdoor />
          </Link>
        </li>
        <li className="user">
          <Link to="/oOoOs">
            <BiCast />
            404
          </Link>
        </li>
        <li className="user">
          <Link to="/traces">
            <MdAddToPhotos />
          </Link>
        </li>
      </ul>
    </nav>
  );
}

// <div className="navBar">
//   <button onClick={Toggle}>
//     <FaAlignRight />
//   </button>

//   <ul className={toggle ? "nav-links show-nav" : "nav-links"}>
//     <li>
//       <ColorPicker
//         colorCapture={props.colorCapture}
//         patchColor={props.patchColor}
//       />
//     </li>
