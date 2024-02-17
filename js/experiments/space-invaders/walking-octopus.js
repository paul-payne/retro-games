window.addEventListener("load", function () {
  // references to octopus images
  let octopus1 = document.getElementById("octopus1");
  let octopus2 = document.getElementById("octopus2");

  const canvas = document.getElementById("canvas");
  let g2d = canvas.getContext("2d");

  // position of octopus
  let x = 100;
  const y = 40;
  // driection of motion
  let direction = 1;
  // speed of octopus
  const speed = 50;
  // the step speed
  const walkingSpeed = 5;

  // octopus dimensions
  const octopusWidth = 150;
  const octopusHeight = 90;

  const startTime = Date.now();
  let time = 0;
  let lastTime = 0;
  let dt = 0;

  let octopusImage = null;

  draw();

  function draw() {
    time = (Date.now() - startTime) / 1000;
    dt = time - lastTime;
    lastTime = time;

    g2d.clearRect(0, 0, 800, 800);

    // set which image to draw
    if ((walkingSpeed * time) % 2 > 1) {
      octopusImage = octopus1;
    } else {
      octopusImage = octopus2;
    }

    g2d.drawImage(octopusImage, x, y, octopusWidth, octopusHeight);

    x = x + direction * speed * dt;

    if (x < 0 || x > 800 - octopusWidth) {
      direction = direction * -1;
    }

    window.requestAnimationFrame(draw);
  }
});
