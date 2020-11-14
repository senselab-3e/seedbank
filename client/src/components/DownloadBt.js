import React from "react";

export default function DownloadBt(props) {
  //this classname is for disabling and enabling the component, should a certain condition be met. this is useful in the imageformsubmit component, but not for others.
  const [className, setClassName] = React.useState(props.enabledClass || "");
  React.useEffect(() => {
    setClassName(props.enabledClass);
  }, [props.enabledClass]);
  return (
    <div>
      <button className={className} onClick={props.setElement}>
        Download Rendered Image
      </button>
    </div>
  );
}
