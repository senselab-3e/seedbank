import React, { useState, useCallback } from "react";
import debounce from "lodash.debounce";
//method draw from https://divyanshu013.dev/blog/react-debounce-throttle-hooks/

//SQL values are being set and passed up to app where UPDATE `users` SET `patch_color` = '#ffffff' WHERE `users`.`id` = 16;

export default function ColorPicker(props) {
  const [colorPick, setColorPick] = useState(props.patchColor || "#000000");
  //const [debouncedVal, saveToDb] = useState(""); // would be an API call normally /// but my props.colorCapture takes the value and passes up to a parent app and then back down to other components that handle the saving.

  const debouncedSave = useCallback(
    debounce((nextVal) => props.colorCapture(nextVal), 100),
    [] // will be created only once initially
  );

  const onChange = (e) => {
    const { value: nextValue } = e.target;
    setColorPick(nextValue);
    debouncedSave(nextValue);
  };

  return (
    <>
      <li>
        <input
          id="picker"
          type="color"
          className="menuColorPicker"
          onClick={(e) => setColorPick(e.target.value)}
          onChange={(e) => onChange(e)}
          defaultValue={colorPick}
        ></input>
        <label htmlFor="picker">Select Color</label>
      </li>
    </>
  );
}

/* <button onClick={submitColorVal}>Save Color</button> */

//I'm going to potentially move this button to another level, or just when the entryway view is activated... which means setting up a callback and props system to pass the color value up to the app level....

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
