import React from "react";

const randomColor = () => {
  var letters = "0123456789ABCDEF";
  var color = "#";
  for (var i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
};
//test

let h, w, newheight, newwidth;

const newPosition4Circles = () => {
  h = window.innerHeight - 100;
  w = window.innerWidth - 100;
  newheight = Math.floor(Math.random() * h);
  newwidth = Math.floor(Math.random() * w);

  return [newheight, newwidth];
};

const createLinks = (array, classname) => {
  if (array) {
    array.forEach(el => {
      var newElement = document.createElement("div");
      newElement.className = classname;

      //--->random placement if i want it from the beginning
      // var newCoor = newPosition4Circles();
      // newElement.style.top = newCoor[0] + "px";
      // newElement.style.left = newCoor[1] + "px";
      console.log(el.name);
      if (classname === "database") {
        var text = document.createElement("div");
        text.textContent = el.name;
        text.className = classname + "container";
        text.appendChild(newElement);
        document.body.append(text);
        console.log("database condition check");
      } else {
        newElement.style.backgroundColor = randomColor();
        var a = document.createElement("a");
        a.href = "https://convalizards.glitch.me/" + el;
        a.className = classname + "container";
        a.appendChild(newElement);
        document.body.append(a);
      }
    });
  } else {
    console.log("array not valid");
  }
};

//right now because the elements are being dynamically created and appended outside any of the component rendering, they are actually all loading from the beginning.
//when the route is left, they are all persisting on screen. that's a little ok because it's still an intereseting effect but this will have to be figure out for the picture element version of this, rather then these small pixels
//if you want to remove them, call the function on app level that does a selectqueryall for the classname dot.
//the styling also needs to be managed by styled-components in future refactoring

const RandomLinkPlace = props => {
  createLinks(props.array, props.classname);
  const target = document.querySelectorAll("." + props.classname);
  const dotRandPos = () => {
    target.forEach(function(el) {
      var xyCoors = newPosition4Circles();
      el.style.top = xyCoors[0] + "px";
      el.style.left = xyCoors[1] + "px";
    });
  };
  //remember that set Interval can not call a function eg. dotRandPost(parameter) --->only a callback
  //only because a) the prop can only be read within the scope of this component, i have to use the random placement funciton within it.
  setInterval(dotRandPos, 2000);
  return <div></div>;
};

export default RandomLinkPlace;

//-----> old component writing

// export class RandomLinkPlace extends Component {
//   componentDidMount() {
//     createLinks();
//   }
//   render() {
//     const dotpatches = document.querySelectorAll(".dot");

//     const dotRandPos = () => {
//       dotpatches.forEach(function(patch) {
//         var newCoor4 = newPosition4Circles();
//         patch.style.top = newCoor4[0] + "px";
//         patch.style.left = newCoor4[1] + "px";
//       });
//     };

//     dotRandPos();
//     setInterval(dotRandPos, 3000);
//     return (
//       <div>
//         <div id="target"></div>
//         <LinkElementCreator linkList={linkList} />
//       </div>
//     );
//   }
// }
