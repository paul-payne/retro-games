window.addEventListener("load", function (event) {
  let octopus1 = document.getElementById("octopus1");
  let octopus2 = document.getElementById("octopus2");
  let cannonImage = document.getElementById("cannon");
  let spacecraftImage = document.getElementById("spacecraft");

  const canvas = document.getElementById("canvas");
  const g2d = canvas.getContext("2d");

  // position of fleet
  let fleetX = 0;
  let fleetY = 100;

  let direction = 1;
  // speed of the octopuses
  let speed = 50;
  // increase this value to increase the walking speed
  let walkingSpeed = 5;

  let octopusWidth = 30;
  let octopusHeight = octopusWidth * 0.6;

  let startTime = Date.now();
  let time = 0;
  let lastTime = 0;
  let dt = 0;

  let octopusImage = null;

  let laserPulse = {
    x: 400,
    y: 0,
    width: 2,
    height: 10,
    alive: false,
    speed: 150,
    update: function () {
      if (this.alive) {
        this.y = this.y - this.speed * dt;
        this.alive = this.y > 0;
      } else {
        this.y = 500;
      }
    },
    draw: function () {
      // if laser pulse is alive change y position
      if (this.alive) {
        g2d.fillRect(this.x, this.y, this.width, this.height);
      }
    },
  };

  // cannon object
  let cannon = {
    image: cannonImage,
    x: laserPulse.x - octopusWidth / 2,
    y: 500,
    width: octopusWidth,
    height: octopusHeight,
    direction: 0,
    speed: 200,
    alive: true,

    update: function () {
      if (this.alive) {
        this.x = this.x + this.direction * this.speed * dt;
      }
    },

    draw: function () {
      if (this.alive) {
        g2d.drawImage(this.image, this.x, this.y, this.width, this.height);
      }
    },

    collision: function (laserPulse) {
      // only detect collision if invader is alive
      if (this.alive) {
        // check overlpa with laserPulse
        if (
          laserPulse.y + laserPulse.height > this.y &&
          laserPulse.y + laserPulse.height < this.y + laserPulse.height &&
          laserPulse.x > this.x &&
          laserPulse.x < this.x + this.width
        ) {
          // if collision kill this invader aand laserPulse
          this.alive = false;
          laserPulse.alive = false;
          return true;
        }
      }
      return false;
    },
  };

  //spacecraft laser pulse object
  let spacecraftLaserPulse = {
    x: 400,
    y: 0,
    width: 3,
    height: 18,
    alive: false,
    speed: 150,
    fireX: 400,

    update: function () {
      if (this.alive) {
        this.y = this.y + this.speed * dt;
        this.alive = this.y < 600;
      }
    },

    draw: function () {
      if (this.alive) {
        g2d.fillStyle = "red";
        g2d.fillRect(this.x, this.y, this.width, this.height);
        g2d.fillStyle = "black";
      }
    },
  };

  //spacecraft object
  let spacecraft = {
    x: 800,
    y: 50,
    width: 60,
    height: 30,
    alive: false,
    direction: -1,
    speed: 100,
    flightTime: 5,

    update: function () {
      // test spacecraft flight time
      if (time > this.flightTime && this.alive == false) {
        this.alive = true;
        spacecraftLaserPulse.fireX = 100 + 600 * Math.random();
        spacecraftLaserPulse.alive = false;
      }

      if (this.alive) {
        this.x = this.x + this.direction * this.speed * dt;
        if (
          spacecraftLaserPulse.fireX > this.x &&
          spacecraftLaserPulse.alive == false
        ) {
          spacecraftLaserPulse.alive = true;
          spacecraftLaserPulse.x = this.x + this.width / 2;
          spacecraftLaserPulse.y = this.y + this.height;
        }
      }

      if (this.x < -this.width) {
        this.alive = false;
        this.x = 800;
        this.flightTime = time + 10 + Math.random() * 20;
      }
    },

    draw: function () {
      if (this.alive) {
        g2d.drawImage(spacecraftImage, this.x, this.y, this.width, this.height);
      }
    },

    collision: function (laserPulse) {
      // if spacecraft collides with laser pulse reset it.
      if (laserPulse.y > this.y && laserPulse.y < this.y + this.height) {
        // test for laserPulse collision with spacecraft
        if (laserPulse.x > this.x && laserPulse.x < this.x + this.width) {
          this.alive = false;
          this.x = 800;
          this.flightTime = time + 10 + Math.random() * 20;
          laserPulse.alive = false;
        }
      }
    },
  };

  // invaders
  let invaders = [];

  for (let row = 0; row < 5; row = row + 1) {
    for (let column = 0; column < 11; column = column + 1) {
      let invader = {
        image1: octopus1,
        image2: octopus2,
        x: column * 40,
        y: row * 40,
        width: 30,
        height: 18,
        speed: 50,
        alive: true,
        draw: function (flip, x, y) {
          if (this.alive) {
            let image = flip ? this.image1 : this.image2;
            g2d.drawImage(
              image,
              x + this.x,
              y + this.y,
              this.width,
              this.height
            );
          }
        },

        collision: function (laserPulse) {
          // only detect collision if invader is alive
          if (this.alive) {
            // check overlpa with laserPulse
            if (
              laserPulse.y > fleetY + this.y &&
              laserPulse.y < fleetY + this.y + this.height &&
              laserPulse.x > fleetX + this.x &&
              laserPulse.x < fleetX + this.x + this.width
            ) {
              // if collision kill this invader aand laserPulse
              this.alive = false;
              laserPulse.alive = false;
              return true;
            }
          }
          return false;
        },
      };

      invaders.push(invader);
    }
  }

  let image1 = true;

  draw();

  function draw() {
    // set time
    time = (Date.now() - startTime) / 1000;
    dt = time - lastTime;
    lastTime = time;

    g2d.clearRect(0, 0, 800, 800);

    // set which image to draw
    // octopusImage = ((walkingSpeed*time) % 2 > 1)?octopus1:octopus2;
    let toggleImage = (walkingSpeed * time) % 2 > 1;

    // loop the body while i < 11 is true
    for (let i = 0; i < invaders.length; i = i + 1) {
      invaders[i].draw(toggleImage, fleetX, fleetY);
    }

    fleetX = fleetX + direction * dt * speed;

    if (fleetX <= 20 || fleetX >= 350) {
      direction = direction * -1;
      //reset the position of the fleet to the respective bounds
      fleetX = fleetX <= 20 ? 20 : 350;
    }

    // if laser pulse goes off the top of the screen
    laserPulse.update();
    laserPulse.draw();

    // draw cannon

    cannon.update();
    cannon.draw();
    cannon.collision(spacecraftLaserPulse);

    //      cannon.draw();

    // a loop through all the invader to detect a laser collision
    for (let i = 0; i < invaders.length; i = i + 1) {
      let v = invaders[i];
      if (v.collision(laserPulse)) break;
    }

    window.requestAnimationFrame(draw);
  }

  // define a function to respond to a key down event
  function arrowKeyDown(event) {
    // prevent the browser from doing its default behaviour to pressing left and right arrow keys
    event.preventDefault();
    // test for right arrow
    if (event.key == "ArrowRight") cannon.direction = 1;
    if (event.key == "ArrowLeft") cannon.direction = -1;
    if (event.key == " " && laserPulse.alive == false && cannon.alive == true) {
      laserPulse.alive = true;
      laserPulse.x = cannon.x + cannon.width / 2;
    }
  }

  // define a function to respond to a key down event
  function arrowKeyUp(event) {
    // test for right arrow
    if (event.key == "ArrowRight") cannon.direction = 0;
    if (event.key == "ArrowLeft") cannon.direction = 0;
  }

  // register the arrowKeyUp function to listen for keydown events
  document.addEventListener("keydown", arrowKeyDown);
  // register the arrowKeysControl function to listen for keydown events
  document.addEventListener("keyup", arrowKeyUp);
});
