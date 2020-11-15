import React from "react";

export default function ChooseFile(props) {
  if (props.onChange) {
    return (
      <form encType="multipart/form-data">
        <div className="button-wrap">
          <label className="new-button">
            <input type="file" name="image" onChange={props.onChange} />
          </label>
        </div>
      </form>
    );
  } else {
    return (
      <div>an onChange function missing in props for form submit element"</div>
    );
  }
}
