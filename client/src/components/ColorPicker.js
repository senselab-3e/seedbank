import React, { useState } from "react";
import { UserId } from "./GetUser";
import axios from "axios";

export default function ColorPicker(props) {
  const [colorPick, setColorPick] = useState("#ffffff");

  console.log(colorPick);

  const submit = (e) => {
    //weirdly, the state for userId is staying at null. this is nnot a long term fix but for now
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
        id="htmlColorPicker"
        onClick={(e) => setColorPick(e.target.value)}
        onChange={(e) => console.log(e.target.value)}
        defaultValue={colorPick}
      ></input>
      <button onClick={submit}>submit to database</button>
    </div>
  );
}
