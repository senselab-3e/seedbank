import React from "react";
import { Link } from "react-router-dom";
import "../style/images.css";
import ImageCreate from "../components/ImageCreate";
// import ImagesGet from "../components/ImagesGet";
// import ImagesRecent from "../components/ImageRecent";

const ImagesPage = () => {
  return (
    <div className="main">
      <div className="main-body">
        <div className="section-left"></div>

        <div className="main-content">
          <ImageCreate />
        </div>
        <div className="section-right"></div>
      </div>
    </div>
  );
};

export default ImagesPage;
