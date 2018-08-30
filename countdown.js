var countdownGenerator = function (x) {

  var fuse = x + 1;

  return function () {
    fuse-=1;

    if (fuse > 0) {
      console.log(`T-minus ${fuse}...`)
    } else if (fuse === 0) {
      console.log("Blast off!");
    } else console.log("Rockets already gone, bub!");

    return fuse; //I don't understand why this makes closure work...
  }
};

var countdown = countdownGenerator(3);
countdown(); // T-minus 3...
countdown(); // T-minus 2...
countdown(); // T-minus 1...
countdown(); // Blast Off!
countdown(); // Rockets already gone, bub!
countdown(); // Rockets already gone, bub!