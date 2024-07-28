// Using a function to display object properties

var message = "We choose to go to the Moon!";

var charIndex = message.indexOf("M");

console.log(message.substr(charIndex, 3));

var startIndex = message.indexOf("go");
console.log(startIndex);

var message = "We choose to go to the Moon!";

var startIndexOfChoose = message.indexOf("choose");
var choose = message.substr(startIndexOfChoose, 6); // "choose" has 6 characters
console.log(choose); // Logs "choose"

var message = "We choose to go to the Moon!";

var lastIndex = message.lastIndexOf("oo");
console.log(lastIndex); // Logs the index of "oo" in "Moon"



/* Further Adventures
 *
 * 1) Add a call to showMovieInfo and run the program.
 *    What happens?
 *
 * 2) Declare a movie variable
 *    but don't assign it a value.
 *    Run the program. What happens now?
 *
 * 3) Create an empty object and
 *    assign it to the movie variable.
 *    Run the program again.
 *    Does the output change?
 *
 * 4) Add title, actors and directors properties
 *    to the movie object. Run one more time.
 *    Is the output as expected?
 *
 */
