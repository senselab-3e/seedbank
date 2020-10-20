import React, { useEffect } from "react";
import axios from "axios";

export default function ImageRecent() {
  const [lastImage, setLastImage] = React.useState("");
  const [id, setId] = React.useState(null);

  const getbyId = () => {
    axios
      .get(`/api/assets/images/lookup/${id}`)
      .then((image) => {
        console.log(image.data[0]);
        // setLastImage(image.data[0]);
      })
      .catch((err) => console.log(err));
  };

  const getTopEntryId = () => {
    axios
      .get("/api/assets/images/latest")
      .then((images) => {
        //setLastImage(images.data);
        console.log(images.data["max(`id`)"]);
        setId(images.data["max(`id`)"]);
        getbyId(images.data["max(`id`)"]);
      })
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    getTopEntryId();
  }, []);

  console.log(id, lastImage);

  return (
    <div>
      {lastImage}
      <button onClick={getTopEntryId}>first</button>
      <button onClick={getbyId}>second</button>
    </div>
  );
}
