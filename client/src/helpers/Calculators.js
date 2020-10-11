  export const randomColors = () => {
      var letters = "0123456789ABCDEF";
      var color = "#";
      for (var i = 0; i < 6; i++) {
          color += letters[Math.floor(Math.random() * 16)];
      }
      return color;
  };

  //returns both a x and y position

  export const uniquePositions = () => {
      let h, w, newheight, newwidth;
      h = window.innerHeight - 100;
      w = window.innerWidth - 100;
      newheight = Math.floor(Math.random() * h);
      newwidth = Math.floor(Math.random() * w);
      return [newheight, newwidth];
  };

  const ranValMinMax = (min, max) => {
      return Math.random() * (max - min) + min;
  };


  export const createPositions = (dim) => {
      let num = "";
      switch (dim) {
          case "top":
              num = ranValMinMax(100, window.innerHeight - 100);
              num += "px";
              break;
          case "left":
              num = ranValMinMax(100, window.innerWidth - 100);
              num += "px";
              break;
          default:
              num = ranValMinMax(100, window.innerHeight - 100);
              num += "px";
      }
      return num;
  };


  export const chooseElement = props => {
      //   console.log(props.array, "full array passing to choose element component");
      //let element = 'nothing to return'
      let index = "no array";
      if (props) {
          index = Math.floor(Math.random() * props.length);
          return props[index];
      } else {
          return index;
      }
  };


  ///this function calculats where the user clicked, and then exports 2 values that can be assigned to 2 palettes/elements, one on either side of that click position, 
  export const GetPosition = (e) => {
      let relativePos = {
          leftSide: 50,
          rightSide: 50
      }
      const xPosition = e.clientX;
      const intViewportWidth = window.innerWidth;
      let percentageWidth = Math.floor((xPosition / intViewportWidth) * 100);
      relativePos.leftSide = percentageWidth;
      relativePos.rightSide = 100 - percentageWidth;
      return relativePos
  };