import React from "react";

export default function DownloadBt(props) {
  //this classname is for disabling and enabling the component, should a certain condition be met. this is useful in the imageformsubmit component, but not for others.
  const [className, setClassName] = React.useState(props.enabledClass || "");
  const [buttonMessage, setMessage] = React.useState("Awaiting Image");

  React.useEffect(() => {
    setClassName(props.enabledClass);
    if (props.enabledClass !== "disabled") {
      setMessage(props.message);
    }
    // setMessage(props.message);
  }, [props.enabledClass, props.message]);

  //   React.useEffect(() => {
  //     setMessage(props.message);
  //   }, [props.message]);

  return (
    <div>
      <button className={className} onClick={props.setElement}>
        {buttonMessage}
      </button>
    </div>
  );
}
