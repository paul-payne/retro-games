window.addEventListener("load", function (event) {
  const octopus1 = document.getElementById("octopus1");
  const octopus2 = document.getElementById("octopus2");
  const cannonImage = document.getElementById("cannon");

  const canvas = document.getElementById("canvas");
  const g2d = canvas.getContext("2d");

  // position of fleet
  let fleetX = 0;
  const fleetY = 100;

  let direction = 1;
  // speed of the octopuses
  const speed = 50;
  // increase this value to increase the walking speed
  const walkingSpeed = 5;

  const octopusWidth = 30;
  const octopusHeight = octopusWidth * 0.6;

  const startTime = Date.now();
  let time = 0;
  let lastTime = 0;
  let dt = 0;

  let octopusImage = null;

  const laserPulse = {
    x: 400,
    y: 0,
    width: 2,
    height: 10,
    alive: false,
    speed: 150,
  };

  const cannon = {
    x: laserPulse.x - octopusWidth / 2,
    y: 500,
    width: octopusWidth,
    height: octopusHeight,
    direction: 0,
    speed: 200,
  };

  // distance between the octopuses
  let relativeX = [0, 40, 80, 120, 160, 200, 240, 280, 320, 360, 400];

  draw();

  function draw() {
    // set time
    time = (Date.now() - startTime) / 1000;
    dt = time - lastTime;
    lastTime = time;

    g2d.clearRect(0, 0, 800, 800);

    // set which image to draw
    octopusImage = (walkingSpeed * time) % 2 > 1 ? octopus1 : octopus2;

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

    fleetX = fleetX + direction * dt * speed;

    if (fleetX <= 20 || fleetX >= 350) {
      direction = direction * -1;

      //reset the position of the fleet to the respective bounds
      fleetX = fleetX <= 20 ? 20 : 350;
    }

    // if laser pulse goes off the top of the screen
    if (laserPulse.y < 0) {
      laserPulse.alive = false;
    }

    // if laser pulse is alive change y position
    if (laserPulse.alive) {
      laserPulse.y = laserPulse.y - laserPulse.speed * dt;
      g2d.fillRect(
        laserPulse.x,
        laserPulse.y,
        laserPulse.width,
        laserPulse.height
      );
    } else {
      // reset y position to start if laser pulse is dead
      laserPulse.alive = true;
      laserPulse.y = 500;
    }

    // draw the laser pulse
    g2d.fillRect(
      laserPulse.x,
      laserPulse.y,
      laserPulse.width,
      laserPulse.height
    );

    // draw the cannon
    g2d.drawImage(cannonImage, cannon.x, cannon.y, cannon.width, cannon.height);

    window.requestAnimationFrame(draw);
  }
});
