// Calling the sayHello function three times

var line = function (lineLength) {
  var line = "========================================";
  lineLength = Math.max(0, lineLength);
  lineLength = Math.min(40, lineLength);
  return line.substr(0, lineLength);
};

for (var i = -20; i <= 60; i += 10) {
  console.log("Length: " + i + ", Line: " + line(i));
}


var spaces = function (spaceLength) {
  var spaces = "                                        ";
  spaceLength = Math.max(0, spaceLength);
  spaceLength = Math.min(40, spaceLength);
  return spaces.substr(0, spaceLength);
};
// Test spaces function
console.log(spaces(15)); // Output: "               "
console.log(spaces(40)); // Output: "                                        "
console.log(spaces(50)); // Output: "


var emptyBox = function (boxWidth) {
  boxWidth = Math.max(0, boxWidth);
  boxWidth = Math.min(40, boxWidth);

  var topBottom = line(boxWidth);
  var middle = "=" + spaces(boxWidth - 2) + "=";

  console.log(topBottom);
  for (var i = 0; i < 3; i++) {
      console.log(middle);
  }
  console.log(topBottom);
};

// Test emptyBox function
emptyBox(12);


console.log(line(30));
console.log(line(40));
console.log(line(50));

  


/* Further Adventures
 *
 * 1) Change the message from the sayHello function.
 *
 * To add a line-break to a string, insert '\n'
 * e.g. "Line One\nLine Two"
 *
 * 2) Break the Hello World! message across two lines.
 *
 * 3) Create a function that prints the letters
 *    of "Hello World!" one by one down the page
 *
 */
