import React, { useState, useEffect } from "react";
import { UserId } from "../GetUser";
import axios from "axios";
import styled from "styled-components";

const Button = styled.button`
  z-index: 10;
  display: inline-block;
  border-radius: 3px;
  background: var(--header-primary);
  padding: 0.5rem 0;
  margin: 0.5rem 1rem;
  //NOTE if you change this margin, note that it matches åwhat is being used in the DataCreate component, for the input form element, whose styling is in a traditional css in entryway.css
  width: 11rem;
  color: var(--linkGrey);
  opacity: 0.9;
  border: 1.5px solid var(--header-primary);
  position: absolute;
  bottom: 20%;
  font-weight: 300;
  font-size: medium;
  letter-spacing: 1px;
  text-decoration: none;
  text-align: center;
  font-family: "Roboto", sans-serif;
  cursor: pointer;
  &:hover {
    display: block;
    color: white;
    background: var(--linkGrey);
  }
`;

export default function SaveColorPick(props) {
  const [colorPick, setColorPick] = useState(props.mainBG);

  useEffect(() => {
    setColorPick(props.mainBG);
  }, [props.mainBG]);

  const submitColorVal = (e) => {
    const userId = UserId();
    // console.log(colorPick, userId, "clicked");
    e.preventDefault();
    axios
      .put(`/api/auth/${userId}`, {
        userId: userId,
        colorPick: colorPick,
      })
      .then((colorPick) => {
        console.log("Added color: " + colorPick);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return <Button onClick={submitColorVal}>Save Color</Button>;
}
