// get access to the canvas
const canvas = document.getElementById("canvas");
// get a graphics 2d object
const g2d = canvas.getContext("2d");

let x = 200;
const y = 100;

console.log("x");
console.log(x);
console.log(typeof x);
console.log("y");
console.log(y);
console.log(typeof y);

function octopus1() {
  g2d.fillStyle = "black";
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
}

function octopus2() {
  g2d.fillStyle = "black";
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
}

// call the  functions
octopus1();
octopus2();
