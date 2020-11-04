import React from "react";
//import { Link } from "react-router-dom";
import "../style/images.css";
import ImageUpload from "../components/ImageUpload";
//import ImagesGet from "../components/ImagesGet";
// import ImagesRecent from "../components/ImageRecent";

const ImagesPage = () => {
  return (
    <div className="contain">
      <ImageUpload />
    </div>
  );
};
export default ImagesPage;
