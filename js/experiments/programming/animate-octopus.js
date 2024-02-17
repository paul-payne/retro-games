// get access to the canvas
const canvas = document.getElementById("canvas");
// get a graphics 2d object
const g2d = canvas.getContext("2d");

let x = 200;
const y = 100;
const octopusColor = "black";
let direction = 1;
const speed = 20;

console.log("x");
console.log(x);
console.log(typeof x);
console.log("y");
console.log(y);
console.log(typeof y);
console.log("octopus color");
console.log(octopusColor);
console.log(typeof octopusColor);

function octopus1() {
  updateX();
  console.log("octopus1");
  g2d.clearRect(0, 0, 800, 800);
  g2d.fillStyle = octopusColor;
  g2d.fillRect(x + 60, y + 0, 30, 10);
  g2d.fillRect(x + 20, y + 10, 110, 10);
  g2d.fillRect(x + 0, y + 20, 150, 40);
  // legs
  g2d.fillRect(x + 40, y + 60, 20, 10);
  g2d.fillRect(x + 90, y + 60, 20, 10);
  g2d.fillRect(x + 30, y + 70, 20, 10);
  g2d.fillRect(x + 100, y + 70, 20, 10);
  g2d.fillRect(x + 60, y + 70, 30, 10);
  g2d.fillRect(x + 0, y + 80, 30, 10);
  g2d.fillRect(x + 120, y + 80, 30, 10);

  g2d.fillStyle = "white";
  g2d.fillRect(x + 30, y + 40, 30, 10);
  g2d.fillRect(x + 90, y + 40, 30, 10);
  setTimeout(octopus2, 500);
}

function octopus2() {
  updateX();
  console.log("octopus2");
  g2d.clearRect(0, 0, 800, 800);
  g2d.fillStyle = octopusColor;
  g2d.fillRect(x + 60, y + 0, 30, 10);
  g2d.fillRect(x + 20, y + 10, 110, 10);
  g2d.fillRect(x + 0, y + 20, 150, 40);
  // legs
  g2d.fillRect(x + 30, y + 60, 30, 10);
  g2d.fillRect(x + 90, y + 60, 30, 10);
  g2d.fillRect(x + 10, y + 70, 20, 10);
  g2d.fillRect(x + 120, y + 70, 20, 10);
  g2d.fillRect(x + 60, y + 70, 30, 10);

  g2d.fillRect(x + 30, y + 80, 20, 10);
  g2d.fillRect(x + 100, y + 80, 20, 10);

  g2d.fillStyle = "white";
  g2d.fillRect(x + 30, y + 40, 30, 10);
  g2d.fillRect(x + 90, y + 40, 30, 10);
  setTimeout(octopus1, 500);
}

function updateX() {
  // change direction if x is out of range
  if (x <= 0 || x >= 650) {
    direction = -1 * direction;
  }

  x = x + direction * speed;
}

// call the  functions
octopus1();
