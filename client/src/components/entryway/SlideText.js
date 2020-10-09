import React, { useState, useEffect } from "react";
import axios from "axios";
// eslint-disable-next-line
import styled from "styled-components";

const randomColors = () => {
  var letters = "0123456789ABCDEF";
  var color = "#";
  for (var i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
};

// const TextSlice = styled.div.attrs((props) => ({
//   style: {
//     background: randomColors(),
//   },
// }))`
//   overflow: scroll;
//     cursor: pointer;
//     z-index: 10;
//     width: 0.3vw;
//     height: 100vh;
//     -webkit-transition: width 3s;
//     -moz-transition: width 3s;
//     -ms-transition: width 3s;
//     -o-transition: width 3s;
//     transition: width 3s;
//     }
//     &:hover {
//         cursor: pointer;
//         border: 1px inset white;
//     }
//   `;

/* annoying. the javascript assigned styling on this element override any of the other settings i try to add to it via hover*/

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

  const swapClassOpen = function (e) {
    const target = e.target.classList;
    //console.log(e.target.childNodes[0].classList, "apples");
    //console.log(textContent);
    if (target.contains("sliderOpen")) {
      target.remove("sliderOpen");
      e.target.childNodes[0].classList.add("hidden"); //reveals the div with text content inside of it
    } else {
      target.add("sliderOpen");
      e.target.childNodes[0].classList.remove("hidden");
    }
  };

  //   const sliderStyling = {
  //     background: randomColors(),
  //   };

  let texts = [];

  for (const key in textList.texts) {
    let colorOpts = [];
    colorOpts.push(randomColors());
    //console.log(textList.texts[key].title, textList.texts[key].body);
    texts.push(
      <div
        className="slider"
        style={{
          background: colorOpts,
        }}
        onClick={swapClassOpen}
        key={textList.texts[key].id}
      >
        <div className="textBox">
          <li key={textList.texts[key].id}> {textList.texts[key].body}</li>
        </div>
      </div>
    );
  }

  return <>{texts}</>;
}

/* <div className="textBox">
          <SlideText alltheThings={alltheThings} />
        </div> */

//     let texts = [];

//     for (const key in textList.texts) {
//       //console.log(textList.texts[key].title, textList.texts[key].body);
//       texts.push(
//         <li key={textList.texts[key].id}>{textList.texts[key].body}</li>
//       );
//     }

//     props.alltheThings(textList.texts);
//     //console.log(texts[0]);

//     return (
//       <div className="textBox">
//         <ul>{texts}</ul>
//       </div>
//     );
//   }
