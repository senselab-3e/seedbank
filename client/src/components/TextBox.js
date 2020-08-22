import React from "react";
import Text from "../components/Text";

export default function TextBox() {
  return (
    <div className="textSub-container">
      <Text></Text>
      <form>
        <label>
          Text:
          <input type="text" name="name" />
        </label>
        <input type="submit" value="Submit" />
      </form>
    </div>
  );
}
