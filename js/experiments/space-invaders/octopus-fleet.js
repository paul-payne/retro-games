window.addEventListener("load", function () {
  // references to octopus images
  let octopus1 = document.getElementById("octopus1");
  let octopus2 = document.getElementById("octopus2");

  const canvas = document.getElementById("canvas");
  let g2d = canvas.getContext("2d");

  // position of octopus
  let fleetX = 100;
  const fleetY = 40;
  // driection of motion
  let direction = 1;
  // speed of octopus
  const speed = 50;
  // the step speed
  const walkingSpeed = 5;

  // octopus dimensions
  const octopusWidth = 30;
  const octopusHeight = 20;

  const startTime = Date.now();
  let time = 0;
  let lastTime = 0;
  let dt = 0;

  let octopusImage = null;

  const relativeX = [0, 40, 80, 120, 160, 200, 240, 280, 320, 360, 400];

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

    // distance between the octopuses
    const dx = 40;

    // loop the body while i < 11 is true
    for (let i = 0; i < 11; i = i + 1) {
      //draw an octopus
      g2d.drawImage(
        octopusImage,
        fleetX + relativeX[i],
        fleetY,
        octopusWidth,
        octopusHeight
      );
    }

    fleetX = fleetX + direction * speed * dt;

    if (fleetX < 0 || fleetX > 800 - octopusWidth) {
      direction = direction * -1;
    }

    window.requestAnimationFrame(draw);
  }
});
