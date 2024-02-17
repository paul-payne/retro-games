// get access to the canvas
canvas = document.getElementById("canvas2");
// get a graphics 2d object
g2d = canvas.getContext("2d");
// octopus 2

g2d.fillStyle = "black";
g2d.fillRect(60, 0, 30, 10);
g2d.fillRect(20, 10, 110, 10);
g2d.fillRect(0, 20, 150, 40);
// legs
g2d.fillRect(30, 60, 30, 10);
g2d.fillRect(90, 60, 30, 10);
g2d.fillRect(10, 70, 20, 10);
g2d.fillRect(120, 70, 20, 10);
g2d.fillRect(60, 70, 30, 10);

g2d.fillRect(30, 80, 20, 10);
g2d.fillRect(100, 80, 20, 10);

g2d.fillStyle = "white";
g2d.fillRect(30, 40, 30, 10);
g2d.fillRect(90, 40, 30, 10);
