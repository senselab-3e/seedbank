import React from "react";
import { Link } from "react-router-dom";
import ImageCreate from "../components/ImageCreate";
import ImagesGet from "../components/ImagesGet";

const ImagesPage = () => {
  return (
    <div>
      <ImagesGet />
      <ImageCreate />
      <br />
      <br />
      <Link to="/">Back to entryway</Link>
    </div>
  );
};

export default ImagesPage;
