import React from "react";
import testimage from "../assets/img/threshold-1.gif";

const randomColor = () => {
  var letters = "0123456789ABCDEF";
  var color = "#";
  for (var i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
};

let h, w, newheight, newwidth;

const uniquePositions = () => {
  h = window.innerHeight - 100;
  w = window.innerWidth - 100;
  newheight = Math.floor(Math.random() * h);
  newwidth = Math.floor(Math.random() * w);

  return [newheight, newwidth];
};

const eventTypeStyling = type => {
  //note: this is already running through a for each in the create links so i don't need to do a queryselect on all the nodes. each valid node is already passing through this function
  //console.log(type);
  switch (type) {
    case "Minor Movement":
      let elType = document.createElement("div");
      elType.className = "threshold";
      elType.style.backgroundImage = `url(${testimage})`;
      let newCoor = uniquePositions();
      //(newCoor);
      elType.style.top = newCoor[0] + "px";
      elType.style.left = newCoor[1] + "px";
      let elWrapper = document.createElement("a");
      elWrapper.className = "thresholdcontainer";
      elWrapper.appendChild(elType);
      document.body.append(elWrapper);
      break;
    default:
      console.log("no event to find name for");
  }
};

const eventType = eventObj => {
  if (eventObj) {
    if (eventObj.event_type) {
      eventTypeStyling(eventObj.event_type);
      //console.log(eventObj.event_type, "belonging to", eventObj.name);
    } else {
      console.log(eventObj.name + " has no event name");
    }
  } else {
    console.log("no valid event object");
  }
};

//check if elements have already been rendered:

var currentEventlist = document.querySelectorAll(".database");
var currentThreshold = document.querySelectorAll(".threshold");

console.log(currentEventlist);
console.log(currentThreshold);

//--->random placement applied to each element created in createLinks
const dotRandPos = el => {
  var xyCoors = uniquePositions(); // returns array with x y values at index 0 and 1
  el.style.top = xyCoors[0] + "px"; //x-axis value
  el.style.left = xyCoors[1] + "px"; //y-axis value
};

const createLinks = (array, classname) => {
  //refactor for more edge-cases - for not its just a truthy check for array value;
  if (array) {
    array.forEach(el => {
      var newElement = document.createElement("div");
      newElement.className = classname;
      newElement.style.backgroundColor = randomColor();
      dotRandPos(newElement);
      //--->random placement if i want it from the beginning
      // let newCoor = uniquePositions();
      // newElement.style.top = newCoor[0] + "px";
      // newElement.style.left = newCoor[1] + "px";
      //---->
      eventType(el);
      if (classname === "database") {
        //all of this can be excavated to a separate exterior function. refactor
        newElement.textContent = el.name;
        let linkWrapper = document.createElement("a");
        linkWrapper.className = classname + "container";
        linkWrapper.appendChild(newElement);
        document.body.append(linkWrapper);
        // console.log("database condition check");
      } else {
        //this is just the default script that was used for inital testing. creating a pixel link to every page currently on glitch. that is what is consisted of in the eventlist array
        let linkWrapper = document.createElement("a");
        linkWrapper.href = "https://convalizards.glitch.me/" + el;
        linkWrapper.className = classname + "container";
        linkWrapper.appendChild(newElement);
        document.body.append(linkWrapper);
      }
    });
  } else {
    console.log("array not valid");
  }
};

const RandomLinkPlace = props => {
  const target = document.querySelectorAll("." + props.classname);
  console.log(target);
  // target.forEach(element => {
  //   dotRandPos(element);
  // });
  //remember that set Interval can not call a function eg. NOT dotRandPost(parameter()) but dotRandPost(parameter) --->only a callback
  //only because a) the prop can only be read within the scope of this component, i have to use the random placement funciton within it.

  // setInterval(dotRandPos, 2000);
  return (
    <div>
      {target.length > 0
        ? console.log("elements already created")
        : createLinks(props.array, props.classname)}
    </div>
  );
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
//         let newCoor4 = uniquePositions();
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
