// get access to the canvas
canvas = document.getElementById("canvas1");
// get a graphics 2d object
g2d = canvas.getContext("2d");

// octopus 1

g2d.fillStyle = "black";
g2d.fillRect(60, 0, 30, 10);
g2d.fillRect(20, 10, 110, 10);
g2d.fillRect(0, 20, 150, 40);
// legs
g2d.fillRect(40, 60, 20, 10);
g2d.fillRect(90, 60, 20, 10);
g2d.fillRect(30, 70, 20, 10);
g2d.fillRect(100, 70, 20, 10);
g2d.fillRect(60, 70, 30, 10);
g2d.fillRect(0, 80, 30, 10);
g2d.fillRect(120, 80, 30, 10);

g2d.fillStyle = "white";
g2d.fillRect(30, 40, 30, 10);
g2d.fillRect(90, 40, 30, 10);
