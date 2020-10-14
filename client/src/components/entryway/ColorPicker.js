import React, { useState, useEffect } from "react";
// import { UserId } from "../GetUser";
// import axios from "axios";

//UPDATE `users` SET `patch_color` = '#ffffff' WHERE `users`.`id` = 16;

export default function ColorPicker(props) {
  const [colorPick, setColorPick] = useState(props.patchColor || "#000000");

  const sendColor = (e) => {
    if (props.colorCapture) {
      console.log(e.target.value, " assignment");
      props.colorCapture(e.target.value);
    }
  };

  useEffect(() => {
    setColorPick(props.patchColor);
  }, [props.patchColor]); //the setColorPick will run only when this prop value changes

  //Previously i had the color input and the button for saving that color, all in this component. but i then needed to separate out the button. just keeping this code here for now, in case i change my mind.
  // const submitColorVal = (e) => {
  //   const userId = UserId();
  //   console.log(colorPick, userId, "clicked");
  //   e.preventDefault();
  //   axios
  //     .put(`/api/auth/${userId}`, {
  //       userId: userId,
  //       colorPick: colorPick,
  //     })
  //     .then((colorPick) => {
  //       console.log("Added color: " + colorPick);
  //     })
  //     .catch((err) => {
  //       console.log(err);
  //     });
  // };
  return (
    <>
      <li>
        <input
          type="color"
          className="menuColorPicker"
          onClick={(e) => setColorPick(e.target.value)}
          onChange={(e) => sendColor(e)}
          defaultValue={colorPick}
        ></input>
        Select Color
      </li>
    </>
  );
}

/* <button onClick={submitColorVal}>Save Color</button> */

//I'm going to potentially move this button to another level, or just when the entryway view is activated... which means setting up a callback and props system to pass the color value up to the app level....
