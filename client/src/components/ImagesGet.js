import React from "react";
import axios from "axios";

export default function ImagesGet() {
  const [images, setImages] = React.useState({});
  const [isLoading, setLoading] = React.useState(false);
  //for some reason the process.env isn't being read. in the documentation it sayssss that it is read in both dev and production modes, but in stack overflow, years prior, it wasnt. not sure whats going on but will do this for now.
  // const root = process.env.PUBLIC_URL + "assets/images/";
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

  //https://create-react-app.dev/docs/advanced-configuration/
  //notes on using public folder: https://create-react-app.dev/docs/using-the-public-folder/
  let imageList = [];
  let message = "";

  for (const key in images) {
    if (isLoading) {
      message = "image list";
      if (imageList.length < 10) {
        imageList.push(
          <li key={key}>
            {images[key].name}
            <img
              className="image"
              src={root + images[key].path + "/" + images[key].name}
              alt={images[key].name}
            />
          </li>
        );
      }
    } else if (isLoading) {
      message = "Loading";
    }
  }

  return (
    <div>
      <p> {message}</p>

      <ul>{imageList}</ul>
    </div>
  );
}
