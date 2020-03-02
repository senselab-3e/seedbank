export const randomColors = () => {
  var letters = "0123456789ABCDEF";
  var color = "#";
  for (var i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
};

export const uniquePositions = () => {
  let h, w, newheight, newwidth;
  h = window.innerHeight - 100;
  w = window.innerWidth - 100;
  newheight = Math.floor(Math.random() * h);
  newwidth = Math.floor(Math.random() * w);
  return [newheight, newwidth];
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
