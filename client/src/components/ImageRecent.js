import React, { useEffect } from "react";
import axios from "axios";

export default function ImageRecent() {
  const [lastImage, setLastImage] = React.useState({
    id: "",
    name: "",
    path: "",
    tendencies: "",
    notes: "",
  });

  const [id, setId] = React.useState(null);

  const imgStorage = [];

  const getbyId = () => {
    axios
      .get(`/api/assets/images/lookup/${id}`)
      .then((image) => {
        // console.log(JSON.stringify(image));
        console.log(image.data[0]);
        const { id, name, path, tendencies, notes } = image.data[0];
        setLastImage({
          path: path,
          id: id,
          name: name,
          tendencies: tendencies,
          notes: notes,
        });
        //imgStorage.push(image.data[0]);
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
        images.data
          ? getbyId(images.data["max(`id`)"])
          : console.log("ntohing");
      })
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    getTopEntryId();
  }, []);

  console.log(id, lastImage);

  return (
    <div>
      <button onClick={getTopEntryId}>first</button>
      <button onClick={getbyId}>second</button>
    </div>
  );
}
