import React, { useState, useEffect } from "react";
import { UserId } from "../GetUser";
import axios from "axios";
import styled from "styled-components";

const Button = styled.button`
  display: inline-block;
  border-radius: 3px;
  padding: 0.5rem 0;
  margin: 0.5rem 1rem;
  width: 11rem;
  background: transparent;
  color: white;
  border: 2px solid white;
  position: absolute;
  top: 400px;
  left: 30px;
`;

export default function SaveColorPick(props) {
  const [colorPick, setColorPick] = useState(props.mainBG);

  useEffect(() => {
    setColorPick(props.mainBG);
  }, [props.mainBG]);

  console.log(props.mainBG, colorPick, "savecolorlevel");

  const submitColorVal = (e) => {
    const userId = UserId();
    console.log(colorPick, userId, "clicked");
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

  return (
    <div className="colorPickSave">
      <button onClick={submitColorVal}> Save Color </button>
    </div>
  );
}
