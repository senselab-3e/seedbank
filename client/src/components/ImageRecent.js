import React, { useEffect } from "react";
import axios from "axios";
import bluesponge from "../assets/images/63/26/f3/a1/image_from_ios_720_1.jpg";

export default function ImageRecent() {
  const [lastImage, setLastImage] = React.useState({
    id: "",
    name: "",
    path: "../assets/images/63/26/f3/a1/image_from_ios_720_1.jpg",
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
          path: "../assets/images/" + path + "/" + name,
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

  console.log(id, lastImage.path, bluesponge);

  //const imageLoad = [];
  //   for (const key in lastImage) {
  //     //    <img src={imageLoad.path}></img>
  //     console.log(imageLoad["path"]);
  //   }

  //   const imageLoad = [];
  //   function outPut() {
  //     if (lastImage.path) {
  //       imageLoad.push(
  //         <img src={require(`${lastImage.path}`)} alt={lastImage.name} />
  //       );
  //     }
  //   }

  //   let thing = outPut();
  //   imageLoad.push(thing);
  const target = "../assets/images/63/26/f3/a1/image_from_ios_720_1.jpg";

  console.log(typeof target);

  //   NOTES://0
  //https://stackoverflow.com/questions/52109907/react-require-error-cannot-find-module
  //The problem is require() itself. require() get's fired, when the app starts.
  //When a path is passed statically, require() knows where to look when the app
  //starts and all is good. However, when the path gets passed dynamically, require()
  //does not know on start up of the app where to look for the image. Hence, it does not find it.
  //That is why requiere() cannot take a dynamically created path.
  return (
    <div>
      Pathway: {lastImage.path}
      {/* {imageLoad} */}
      <img
        src={require("../assets/images/63/26/f3/a1/image_from_ios_720_1.jpg")}
        alt="thing"
      />
      {lastImage.path}
      {/* <img src={require(`${lastImage.path}`)} alt="product" /> */}
      {/* <img src={require(`${target}`)} alt="thing" /> */}
      {/* <img src={require('"' + target + '"')} alt="thing" /> */}
      {/* <img src={require({ target })} alt="thing" /> */}
      {/* <img src={require(target)} alt="thing" /> */}
      {/* <img src={require(JSON.stringify(target))} alt="thing" /> */}
      {/* <img src={bluesponge} alt="hello" /> */}
      <button onClick={getTopEntryId}>first</button>
      <button onClick={getbyId}>second</button>
    </div>
  );
}
