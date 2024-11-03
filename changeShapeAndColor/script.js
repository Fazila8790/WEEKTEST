let round = document.querySelector(".round");
let btn = document.querySelectorAll("button");
let shape = document.querySelector("#square");

btn[0].addEventListener("click", changeColor);

function generateColor() {
    let color = Math.floor(Math.random() * 255);
    return color;
}

function changeColor() {
    let newColor = `rgb(${generateColor()}, ${generateColor()}, ${generateColor()})`;
    round.style.backgroundColor = newColor;
}

btn[1].addEventListener("click", changeShape);
let arr = [
    "right-point", "parallal", "cheg", "square", "round", 
    "diamond", "triangle", "arrow", "frame", "star", 
    "cross", "left-point",
];

function randomShape() {
    let idx = Math.floor(Math.random() * arr.length);
    return arr[idx];
}

function changeShape() {
    let idname = randomShape();
    shape.id = idname;
}