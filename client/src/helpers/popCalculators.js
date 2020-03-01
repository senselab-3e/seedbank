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