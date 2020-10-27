import React from "react";
import axios from "axios";

export default function ImagesGet() {
  const [images, setImages] = React.useState({});
  const [isLoading, setLoading] = React.useState(false);
  const [imgDispLmt, setLimit] = React.useState(30);
  const [lowerLimit, setLowerLimit] = React.useState(0);
  const [upperLimit, setUpperLimit] = React.useState(imgDispLmt);
  //const [imgList, setImgList] = React.useState([]);

  const root = "https://3ecologies-seedbank.com/assets/images/";

  const getData = () => {
    console.log("getting images");
    axios
      .get("/api/assets/images")
      .then((images) => {
        setLoading(true);
        setImages(images.data);
      })
      .catch((err) => console.log(err));
  };

  React.useEffect(() => {
    getData();
  }, []);

  // React.useEffect(() => {
  //   getData();
  // }, []);

  //https://create-react-app.dev/docs/advanced-configuration/
  //notes on using public folder: https://create-react-app.dev/docs/using-the-public-folder/
  let imageList = [];
  let message = "";

  for (const key in images) {
    //console.log(key);
    if (isLoading) {
      message = "image list";
      // if (imageList.length < imgDispLmt) {
      if (key >= lowerLimit && key <= upperLimit) {
        var notes;
        var tendencies;

        //the slice removes the file extension .png .gif .jpg from the uploaded image, so the only name displayed is the file name. but do we like the file names??? is this important information?
        //not yet... but maybe in the future
        var cardcaption = images[key].name.slice(0, -4);

        if (images[key].notes) {
          notes = "Notes: " + images[key].notes;
        }

        if (images[key].tendencies) {
          tendencies = "Tendencies: " + images[key].tendencies;
        }

        imageList.push(
          //another styling approach which just handles displaying the image
          // <img
          //   className="item"
          //   key={key}
          //   src={root + images[key].path + "/" + images[key].name}
          //   alt={images[key].name}
          // />

          //alternative styling approach using cards. not sure what i prefer yet.
          <div className="card" key={key}>
            <img
              key={key}
              src={root + images[key].path + "/" + images[key].name}
              alt={images[key].name}
            />
            <div key={images[key].name} className="text">
              {/* <p key={images[key].name}> {cardcaption}</p>
              <p key={key + "notes"}> {notes}</p>
              <p key={key + "tendencies"}>{tendencies}</p>
              <button>more</button> */}
            </div>
          </div>
        );
      }
    } else if (isLoading) {
      message = "Loading";
    }
  }

  const resetImageSelection = () => {
    console.log("resetting", lowerLimit);
    //image List needs to be set up as a hook for this to work
    // imageList.splice(0, 10);
    setLowerLimit(lowerLimit + 10);
    setUpperLimit(upperLimit + 10);
    //setLimit(imgDispLmt + 10);
    console.log("resetting");
  };

  const loadMoreImages = () => {
    //imgDispLmt < 50 ? setLimit(imgDispLmt + 10) : resetImageSelection();
    imageList.length < 50
      ? setUpperLimit(upperLimit + 10)
      : resetImageSelection();
  };

  //console.log(images);

  //NOt being used right now. this is just a way to extract all the names -- into a separate array.
  //new objects where the key value is made into the key name, can also be handled here, but making things = {}
  //things[item.name] = item.name
  // let things = "";
  // if (images.length > 1) {
  //   things = images.map((item) => {
  //     return item.name;
  //   });
  // }
  //console.log(things); // gives me a new array with just the names

  return (
    <>
      <button>group by upload date</button>
      <button>group by tendency</button>
      <p> {message}</p>
      {/* <div className="gallery">
        <p> {message}</p>

        <ul>{imageList}</ul>
      </div> */}
      <div className="cards">{imageList}</div>
      <button onClick={loadMoreImages}>View 10 more</button>
    </>
  );
}
