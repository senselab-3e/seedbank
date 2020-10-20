import React, { useEffect } from "react";
import axios from "axios";

export default function ImageRecent() {
  const [lastImage, setLastImage] = React.useState("");

  const getImageEntry = () => {
    axios
      .get("/api/assets/images/latest")
      .then((images) => {
        //setLastImage(images.data);
        console.log(images.data);
      })
      .catch((err) => console.log(err));
  };

  React.useEffect(() => {
    getImageEntry();
  }, [getImageEntry]);

  return <div>{lastImage}</div>;
}
