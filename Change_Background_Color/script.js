let text = document.getElementById("text-container");
let bgColor = [
  { name: "rgb(255, 0, 0, 0.3)", color: "RED" },
  { name: "rgb(0, 255, 0,0.3)", color: "GREEN" },
  { name: "rgb(0, 0, 255,.3)", color: "BLUE" },
  { name: "rgb(255, 255, 0,.3)", color: "YELLOW" },
  { name: "rgb(0, 255, 255,.3)", color: "CYAN" },
  { name: "rgb(255, 0, 255,.3)", color: "MAGENTA" },
  { name: "rgba(255, 165, 0, 0.3)", color: "ORANGE" },
  { name: "rgba(128, 128, 128, 0.3)", color: "GRAY" },
  { name: "rgba(0, 128, 128, 0.3)", color: "TEAL" },
  { name: "rgba(128, 0, 0, 0.3)", color: "MAROON" },
];

let index = 0;
// Function to change background color

function preBkGround() {
  if (index >= 0) {
    document.body.style.backgroundColor = bgColor[index].name;
    console.log(index);

    document.getElementById("text-box").style.backgroundColor =
      bgColor[index].name;

    document.getElementById("btn-box").style.backgroundColor =
      bgColor[index].name;

    document.getElementById("colorName").textContent = bgColor[index].color;
    index--;
  }
}

function nextBkGround() {
  if (index < bgColor.length) {
    document.body.style.backgroundColor = bgColor[index].name;

    document.getElementById("text-box").style.backgroundColor =
      bgColor[index].name;

    document.getElementById("btn-box").style.backgroundColor =
      bgColor[index].name;

    document.getElementById("colorName").textContent = bgColor[index].color;
    index++;
  } else {
    index = 0;
  }
}
