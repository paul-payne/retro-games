// get access to the canvas
canvas = document.getElementById("canvas6");
// get a graphics 2d object
g2d = canvas.getContext("2d");

g2d.fillStyle = "black";
g2d.fillRect(30, 0, 20, 10);
g2d.fillRect(20, 10, 40, 10);
g2d.fillRect(10, 20, 60, 10);
g2d.fillRect(0, 30, 80, 20);
g2d.fillRect(20, 50, 10, 10);
g2d.fillRect(50, 50, 10, 10);
g2d.fillRect(10, 60, 10, 10);
g2d.fillRect(30, 60, 10, 10);
g2d.fillRect(40, 60, 10, 10);
g2d.fillRect(60, 60, 10, 10);
g2d.fillRect(0, 70, 10, 10);
g2d.fillRect(20, 70, 10, 10);
g2d.fillRect(50, 70, 10, 10);
g2d.fillRect(70, 70, 10, 10);

//eyes
g2d.fillStyle = "white";
g2d.fillRect(20, 30, 10, 10);
g2d.fillRect(50, 30, 10, 10);
