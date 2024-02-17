// get access to the canvas
const canvas = document.getElementById("canvas");
// get a graphics 2d object
const g2d = canvas.getContext("2d");

let x = 200;
const y = 100;
const octopusColor = "black";
let direction = 0;
const speed = 20;

function octopus1() {
  updateX();

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
  x = x + direction * speed;
}

// call the  functions
octopus1();

// define a  function to respond to a key down event
function arrowKeysDownControl(event) {
  /*
        prevent the browser from doing its default behaviour in response to
        pressing the left and right arrow keys
     */
  event.preventDefault();

  // test for right arrow
  if (event.key == "ArrowRight") {
    direction = 1;
  }

  // test for left arrow
  if (event.key == "ArrowLeft") {
    direction = -1;
  }
}

// register the arrowKeysControl  function to listen for keydown events
document.addEventListener("keydown", arrowKeysDownControl);
