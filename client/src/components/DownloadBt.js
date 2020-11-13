import React from "react";

export default function DownloadBt(props) {
  return (
    <div>
      <button className={props.enabledClass} onClick={props.setElement}>
        Download Rendered Image
      </button>
    </div>
  );
}
