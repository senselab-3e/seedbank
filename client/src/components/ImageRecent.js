import React, { useEffect } from "react";
import axios from "axios";
import bluesponge from "../assets/images/63/26/f3/a1/image_from_ios_720_1.jpg";

import { chooseElement } from "../helpers/Calculators";
import { imgThingies, imageList } from "../helpers/ArrayOptions";

export default function ImageRecent() {
  const [lastImage, setLastImage] = React.useState({
    id: "",
    name: "",
    path: "../assets/images/63/26/f3/a1/image_from_ios_720_1.jpg",
    tendencies: "",
    notes: "",
  });

  const pathOrigin = process.env.HOST;

  const [id, setId] = React.useState(null);

  const imgStorage = chooseElement(imgThingies);

  console.log(imageList);

  for (const key in imageList) {
    console.log(imageList[key]);
  }

  const getbyId = () => {
    axios
      .get(`/api/assets/images/lookup/${id}`)
      .then((image) => {
        // console.log(JSON.stringify(image));
        console.log(image.data[0]);
        const { id, name, path, tendencies, notes } = image.data[0];
        setLastImage({
          path: path + "/" + name,
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

  const testRemote = "/assets/images/00/1e/2a/6f/mimo-feet.gif";
  console.log(typeof target);

  //   NOTES://0
  //WRONG: https://stackoverflow.com/questions/45334874/load-images-based-on-dynamic-path-in-reactjs
  //HINT ON WHY ITS NOT WORKING: https://stackoverflow.com/questions/52109907/react-require-error-cannot-find-module
  //The problem is require() itself. require() get's fired, when the app starts.
  //When a path is passed statically, require() knows where to look when the app
  //starts and all is good. However, when the path gets passed dynamically, require()
  //does not know on start up of the app where to look for the image. Hence, it does not find it.
  //That is why requiere() cannot take a dynamically created path.

  //Only partially dynamic statement are allowed for import().

  //Packaging happens once before runtime so those variables don't have values yet.
  return (
    <div>
      Pathway: {lastImage.path}
      {/* {imageLoad} */}
      {/* <img
        src={require("../assets/images/63/26/f3/a1/image_from_ios_720_1.jpg")}
        alt="thing"
      /> */}
      dd
      <img
        className="imgUploadPreview"
        src={
          process.env.PUBLIC_URL + "/assets/images/00/1e/2a/6f/mimo-feet.gif"
        }
        alt=""
      />
      <img src={process.env.PUBLIC_URL + testRemote} alt="" />
      <br></br>
      {process.env.PUBLIC_URL + "/assets/images/00/1e/2a/6f/mimo-feet.gif"}
      <br></br>
      {process.env.PUBLIC_URL + testRemote}
      <br></br>
      {/* <img src={`${imgStorage}`} alt="ddd" /> */}
      {/* <img
        src={require(`../assets/images/${lastImage.path}${lastImage.name}`)}
      /> */}
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
