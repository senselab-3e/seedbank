import React, { useState, useEffect } from "react";
import { UserId } from "./GetUser";
import axios from "axios";

//UPDATE `users` SET `patch_color` = '#ffffff' WHERE `users`.`id` = 16;

export default function ColorPicker(props) {
  const [colorPick, setColorPick] = useState(props.patchColor || "#000000");
  console.log(colorPick);

  if (props.colorCapture) {
    //if a prop function is passed down to this component, to bring that color value to other components, run it here
  }

  useEffect(() => {
    setColorPick(props.patchColor);
  });

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
    //this.props.apiRequest();
  };
  return (
    <div>
      <input
        type="color"
        className="colorPicker"
        // id="htmlColorPicker"
        onClick={(e) => setColorPick(e.target.value)}
        onChange={(e) => console.log(e.target.value)}
        defaultValue={colorPick}
      ></input>
      <button onClick={submitColorVal}>submit to database</button>
    </div>
  );
}
