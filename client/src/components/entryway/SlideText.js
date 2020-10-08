import React, { useState, useEffect } from "react";
import axios from "axios";

export default function SlideText(props) {
  const [textList, setTextList] = useState({});

  const getList = () => {
    axios
      .get("/api/sliderTexts")
      .then((sliderTexts) => {
        setTextList({ texts: sliderTexts.data });
      })
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    getList();
  }, []);

  let texts = [];

  for (const key in textList.texts) {
    //console.log(textList.texts[key].title, textList.texts[key].body);
    texts.push(
      <li key={textList.texts[key].id}>{textList.texts[key].body}</li>
    );
  }

  props.alltheThings(texts);
  //console.log(texts[0]);

  return (
    <div>
      <ul>{texts}</ul>
    </div>
  );
}
