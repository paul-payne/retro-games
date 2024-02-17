        // get access to the canvas 
        const canvas = document.getElementById("canvas");
        // get a graphics 2d object  
        const g2d = canvas.getContext("2d");
        // draw rectangles
        // run fillRect methods in the graphics 2d object
        // octopus 1


        // define octopus1 with parameter x
        function octopus1(x, y) {

          g2d.fillStyle = "black";
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

        }

        // octopus 2

        function octopus2(x, y) {
          g2d.fillStyle = "black";
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
        }

        octopus1(0, 30);
        octopus2(200, 300);
        octopus1(320, 200);
        octopus2(480, 400);
        octopus1(620, 550);