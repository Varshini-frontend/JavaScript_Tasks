// Displaying a menu

var message = "We choose to go to the Moon!";

console.log(message.substr(3, 12));
console.log(message.substr(20)); // Logs "Moon!"
console.log(message.substr(11, 6)); // Logs "go to the"
console.log(message.substr(0, 10));
console.log(message.substr(3)); // Logs "choose to go to the Moon!"
console.log(message.substr(-5)); // Logs "Moon!"
console.log(message.substr(11, -3)); // Logs "go to the"
// using message.substr(-5) starts from the 5th character from the end (Moon!). message.substr(11, -3) starts from index 11 and ignores the last 3 characters (go to the).




/* Further Adventures
 *
 * 1) Add two more options to the displayMenu
 *    function and run the program.
 *
 * 2) Create your own displayMyMenu function.
 *
 * 3) Add a line to call your function as well.
 *    Run the program
 *
 */
