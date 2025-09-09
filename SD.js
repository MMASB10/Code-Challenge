// Ask the user to input the speed
  var speed = prompt("Enter the car speed (in km/h):");

  // Convert input to a number
  speed = Number(speed);

  // Check if input is a valid number
  if (isNaN(speed)) {
    alert("Please enter a valid number.");
  } else {
    if (speed <= 70) {
      alert("Ok");
    } else {
      // Calculate demerit points
      var points = Math.floor((speed - 70) / 5);

      if (points > 12) {
        alert("License suspended");
      } else {
        alert("Points: " + points);
      }
    }
  }