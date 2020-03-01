export const randomColors = () => {
    var letters = "0123456789ABCDEF";
    var color = "#";
    for (var i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}


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
    let element = 'nothing to return'
    //i need this condition check because on the first two passes of ChooseElement being rendered above by parents, this is an undefined property - so it
    //will continuously throw errors //then i need to site specifically the value props.array and not just props, because props is a long list of items in an object /// a catch all unique to functional components - where as props.array refects what i more exactly passed to this component from a parent element.
    if (props.array) {
        element = props.array[Math.floor(Math.random() * props.array.length)];
        return element
    } else if (props.obj) {
        for (const key in props.obj) {
            element = props.obj[key][Math.floor(Math.random() * props.array.length)];
        }
        return element
    } else {
        return element
    }
}