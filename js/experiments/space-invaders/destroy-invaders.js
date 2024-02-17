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

  // invaders is an empty array
  let invaders = [];

  for (let column = 0; column < 11; column = column + 1) {
    // create a new invader
    const invader = {
      image1: octopus1,
      image2: octopus2,
      x: relativeX[column],
      y: 0,
      width: 30,
      height: 18,
      speed: 50,
      alive: true,
    };

    //push the object invader onto the array
    invaders.push(invader);
  }

  draw();

  function draw() {
    // set time
    time = (Date.now() - startTime) / 1000;
    dt = time - lastTime;
    lastTime = time;

    g2d.clearRect(0, 0, 800, 800);

    fleetX = fleetX + direction * dt * speed;

    if (fleetX <= 20 || fleetX >= 350) {
      direction = direction * -1;
      //reset the position of the fleet to the respective bounds
      fleetX = fleetX <= 20 ? 20 : 350;
    }

    let toggleImage = (walkingSpeed * time) % 2 > 1;

    for (let i = 0; i < invaders.length; i = i + 1) {
      let v = invaders[i];
      // if invader is alive draw it
      if (v.alive) {
        // select which image to draw
        image = toggleImage ? v.image1 : v.image2;
        // draw invader
        g2d.drawImage(image, fleetX + v.x, fleetY + v.y, v.width, v.height);
      }
    }

    // a loop through all the invader to detect a laser collision
    for (let i = 0; i < invaders.length; i = i + 1) {
      let v = invaders[i];

      if (v.alive) {
        // test for laserPulse collision with invader
        // text y location
        if (
          laserPulse.y > fleetY + v.y &&
          laserPulse.y < fleetY + v.y + v.height &&
          laserPulse.x > fleetX + v.x &&
          laserPulse.x < fleetX + v.x + v.width
        ) {
          // kill invader
          v.alive = false;
          // kill the laser pulse
          laserPulse.alive = false;
          // break out of the loop
          break;
        }
      }
    }

    // if laser pulse goes off the top of the screen
    if (laserPulse.y < 0) {
      laserPulse.alive = false;
    }
    //console.log(laserPulse.alive);
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
      laserPulse.y = 500;
    }

    // draw the laser pulse
    if (laserPulse.alive) {
      g2d.fillRect(
        laserPulse.x,
        laserPulse.y,
        laserPulse.width,
        laserPulse.height
      );
    }

    // draw the cannon
    g2d.drawImage(cannonImage, cannon.x, cannon.y, cannon.width, cannon.height);

    cannon.x = cannon.x + cannon.speed * cannon.direction * dt;

    window.requestAnimationFrame(draw);
  }
  // define a  function to respond to a key down event
  function arrowKeyDown(event) {
    // prevent the browser from doing its default behaviour to pressing left and right arrow keys
    event.preventDefault();
    // test for right arrow
    console.log("***" + event.key + "***");
    if (event.key === "ArrowRight") cannon.direction = 1;
    if (event.key === "ArrowLeft") cannon.direction = -1;
    if (event.key === " " && laserPulse.alive === false) {
      laserPulse.alive = true;
      laserPulse.x = cannon.x + cannon.width / 2;
      console.log("fired laser pulse");
    }
  }

  // define a  function to respond to a key down event
  function arrowKeyUp(event) {
    // test for right arrow
    if (event.key == "ArrowRight") cannon.direction = 0;
    if (event.key == "ArrowLeft") cannon.direction = 0;
  }

  // register the arrowKeyUp  function to listen for keydown events
  document.addEventListener("keydown", arrowKeyDown);
  // register the arrowKeysControl  function to listen for keydown events
  document.addEventListener("keyup", arrowKeyUp);
});
