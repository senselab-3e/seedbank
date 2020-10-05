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
  }, [props.patchColor]); //the setColorPick will run only when this prop value changes

  //NOTE: The way to ensure useEffect is run only once is to use an empty dependency array.  --->   }, []);

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
    <div>
      <input
        type="color"
        className="colorPicker"
        id="htmlColorPicker"
        onClick={(e) => setColorPick(e.target.value)}
        onChange={(e) =>
          props.colorCapture
            ? props.colorCapture(e.target.value)
            : console.log(e.target.value)
        }
        defaultValue={colorPick}
      ></input>
      <button onClick={submitColorVal}>Save Color Preference</button>
    </div>
  );
}
