import React from "react";

export default function UploadFileBt(props) {
  //const [image, setImage] = React.useState();

  return (
    <form encType="multipart/form-data">
      <label>
        <input type="file" name="image" onChange={props.onChange} />
      </label>
    </form>
  );
}
