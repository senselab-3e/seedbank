import React from "react";

export default function ChooseFile(props) {
  if (props.onChange) {
    return (
      <form encType="multipart/form-data">
        <label>
          <input type="file" name="image" onChange={props.onChange} />
        </label>
      </form>
    );
  } else {
    return (
      <div>an onChange function missing in props for form submit element"</div>
    );
  }
}
