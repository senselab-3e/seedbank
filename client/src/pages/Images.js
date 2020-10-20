import React from "react";
import { Link } from "react-router-dom";
import ImageCreate from "../components/ImageCreate";
import ImagesGet from "../components/ImagesGet";
import ImagesRecent from "../components/ImageRecent";

const ImagesPage = () => {
  return (
    <div>
      {/* <ImagesGet /> */}
      <ImagesRecent />
      <ImageCreate />
      <br />
      <br />
      <Link to="/">Back to entryway</Link>
    </div>
  );
};

export default ImagesPage;
