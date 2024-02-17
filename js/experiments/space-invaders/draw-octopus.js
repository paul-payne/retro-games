window.addEventListener("load", function () {
  const octopus1 = document.getElementById("octopus1");

  const canvas = document.getElementById("canvas");
  const g2d = canvas.getContext("2d");

  const x = 100;
  const y = 40;
  const octopusWidth = 150;
  const octopusHeight = 90;

  g2d.drawImage(octopus1, x, y, octopusWidth, octopusHeight);
});
