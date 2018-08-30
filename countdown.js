var countdownGenerator = function (x) {

  var fuse = x + 1;

  return function () {
    fuse -= 1;

    if (fuse = 0) {
      console.log("Blast Off!");
    } else if (fuse < 0) {
      console.log("Rockets already gone, bub!");
    } else console.log(`T-minus ${x}...`);

    return fuse;
  }
};

var countdown = countdownGenerator(3);
countdown(); // T-minus 3...
countdown(); // T-minus 2...
countdown(); // T-minus 1...
countdown(); // Blast Off!
countdown(); // Rockets already gone, bub!
countdown(); // Rockets already gone, bub!