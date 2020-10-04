import React, { useState } from "react";

export default function ColorPicker(props) {
  const [colorPick, setColorPick] = useState("#ffffff");

  console.log(colorPick);
  return (
    <div>
      <input
        type="color"
        id="htmlColorPicker"
        onClick={(e) => setColorPick(e.target.value)}
        defaultValue={colorPick}
      ></input>
    </div>
  );
}
