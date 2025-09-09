// Prompt user for marks
  var marks = prompt("Enter student marks (0 - 100):");

  // Convert input to number
  marks = Number(marks);

  // Validate input
  if (marks >= 0 && marks <= 100) {
    var grade = "";

    if (marks > 79) {
      grade = "A";
      // If mark is 80 to 100 grade A
    } else if (marks >= 60) {
      grade = "B";
      // If mark is 60 to 79 grade B
    } else if (marks >= 49) {
      grade = "C";
      // If mark is 49 to 59 grade C
    } else if (marks >= 40) {
      grade = "D";
      // If mark is 40 to 49 grade D
    } else {
      grade = "E";
      // If mark is lower than 40 (0-39) grade E
    }

    // Show grade
    alert("The grade is: " + grade);
  } else {
    alert("Invalid input. Please enter a number between 0 and 100.");
  }