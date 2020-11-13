import React from "react";

export default function ChooseFile(props) {
  return (
    <form encType="multipart/form-data">
      <label>
        <input type="file" name="image" onChange={props.onChange} />
      </label>
    </form>
  );
}
