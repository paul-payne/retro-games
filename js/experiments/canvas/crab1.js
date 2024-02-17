// get access to the canvas
canvas = document.getElementById("canvas3");
// get a graphics 2d object
g2d = canvas.getContext("2d");

g2d.fillStyle = "black";
g2d.fillRect(20, 0, 10, 10);
g2d.fillRect(80, 0, 10, 10);
g2d.fillRect(30, 10, 10, 10);
g2d.fillRect(70, 10, 10, 10);
g2d.fillRect(20, 20, 70, 10);
g2d.fillRect(10, 30, 90, 20);
g2d.fillRect(0, 10, 10, 40);
g2d.fillRect(100, 10, 10, 40);
g2d.fillRect(20, 50, 70, 10);
g2d.fillRect(30, 60, 10, 10);
g2d.fillRect(70, 60, 10, 10);
g2d.fillRect(20, 70, 10, 10);
g2d.fillRect(80, 70, 10, 10);

//eyes
g2d.fillStyle = "white";
g2d.fillRect(30, 30, 10, 10);
g2d.fillRect(70, 30, 10, 10);
