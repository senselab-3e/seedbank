import React, { useEffect } from "react";
import axios from "axios";

export default function ImageRecent() {
  const [lastImage, setLastImage] = React.useState("");
  const [id, setId] = React.useState(null);

  const getRecent = () => {
    axios
      .get(`/api/assets/images/lookup/${id}`)
      .then((image) => {
        console.log(image.data[0]);
        //setLastImage(image);
      })
      .catch((err) => console.log(err));
  };

  const getImageEntry = () => {
    axios
      .get("/api/assets/images/latest")
      .then((images) => {
        //setLastImage(images.data);
        console.log(images.data["max(`id`)"]);
        setId(images.data["max(`id`)"]);
        // getRecent(images.data["max(`id`)"]);
      })
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    getImageEntry();
  }, []);

  console.log(id, lastImage);

  return (
    <div>
      {lastImage}
      <button onClick={getImageEntry}>first</button>
      <button onClick={getRecent}>second</button>
    </div>
  );
}
