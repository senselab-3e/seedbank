import React, { useState } from "react";
import axios from "axios";
import { UserId } from "./GetUser";
//import DeleteBt from "../components/DeleteBt";
export default function SliderbyId(props) {
  //const [id, setId] = useState("");
  const [sliders, setSliders] = useState([]);
  // eslint-disable-next-line
  const [userId, setUserId] = useState(UserId());

  const getSliderList = () => {
    setUserId(UserId());
    //     console.log("new event added");
    axios
      // .get("/api/sliderTexts/:user_id")
      .get(`/api/sliderTexts/${userId}`)
      .then((sliderTexts) => {
        setSliders(sliderTexts.data);
      })
      .catch((err) => console.log(err));
  };
  console.log(sliders, userId);
  return (
    <div>
      <button onClick={getSliderList}>GET BY ID</button>
      <div>
        oranges
        <ul>
          {sliders.map(({ body, title, id }) => (
            <li key={id.toString()}>
              {body} {title}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
