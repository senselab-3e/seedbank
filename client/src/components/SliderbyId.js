import React, { useState } from "react";
import axios from "axios";
import { UserId } from "./GetUser";

export default function SliderbyId(props) {
  const [sliders, setSliders] = useState([]);
  // eslint-disable-next-line
  const [userId, setUserId] = useState(UserId());

  const getSliderList = () => {
    //double checks if a current user matches
    setUserId(UserId());
    axios
      .get(`/api/sliderTexts/${userId}`)
      .then((sliderTexts) => {
        setSliders(sliderTexts.data);
      })
      .catch((err) => console.log(err));
  };

  return (
    <div>
      <button onClick={getSliderList}>GET BY ID</button>
      <div>
        oranges
        <ul>
          {sliders.map(({ body, title, id }) => (
            <li key={id.toString()}>
              {title} {body}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
