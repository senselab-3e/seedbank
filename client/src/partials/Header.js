import React, { useState, useCallback } from "react";
import debounce from "lodash.debounce";
import { Link } from "react-router-dom";
import ColorPicker from "../components/entryway/ColorPicker";
import "../style/header.css";

import { GiHamburgerMenu } from "react-icons/gi";
import { SiNextdoor } from "react-icons/si";
import { RiDoorOpenFill } from "react-icons/ri";
import { RiLoginBoxFill } from "react-icons/ri";
import { MdAddToPhotos } from "react-icons/md";
import { RiQuestionLine } from "react-icons/ri";
import { BiChair } from "react-icons/bi";
import { BiCast } from "react-icons/bi";
import { IoIosCloseCircle } from "react-icons/io";

export default function Header(props) {
  const [toggle, setToggle] = useState(false);

  const Toggle = () => {
    setToggle(!toggle);
  };

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
            <RiDoorOpenFill size={23} />
            <label>Entryway</label>
          </Link>
        </li>

        <li className={toggle ? "hide-nav" : "show-nav"}>
          <Link to="/auth">
            <RiLoginBoxFill size={23} />
            <label>Login</label>
          </Link>
        </li>
        <li className={toggle ? "hide-nav" : "show-nav"}>
          <Link to="/oOoOs">
            <BiCast size={23} />
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
            <BiChair size={23} />
          </Link>
        </li>

        <li className={toggle ? "hide-nav user" : "show-nav user"}>
          <Link to="/">
            <SiNextdoor size={23} />
          </Link>
        </li>

        <li className={toggle ? "hide-nav user" : "show-nav user"}>
          <Link to="/about3e">
            <RiQuestionLine size={23} />
          </Link>
        </li>
        <li className="miniMenu" onClick={Toggle}>
          {toggle ? (
            <GiHamburgerMenu size={20} />
          ) : (
            <IoIosCloseCircle size={30} />
          )}
        </li>
      </ul>
    </nav>
  );
}

//{toggle ? <FaAlignRight size={20} /> : <IoIosCloseCircle size={30} />}
