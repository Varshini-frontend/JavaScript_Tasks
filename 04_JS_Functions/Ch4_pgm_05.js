// Two more function definitions and assignments

var showSmaller = function (num1, num2) {
    var smaller = Math.min(num1, num2);
    var larger = Math.max(num1, num2);

    console.log(smaller + " is smaller than " + larger);
};

showSmaller(12, 3);
showSmaller(-10, 3);
showSmaller(3,0,8);

var showLarger = function(num1, num2, num3){
    var small = Math.min(num1, num2, num3);
    var large1 = Math.max(num1, num2);
    var large2 = Math.max(num2,num3);

    console.log(small + " is smaller than " + large1 + " and " + large2);
};

showLarger(3,-9,7);
showLarger(9,10,68);
showLarger(4,0,-4);




/* Further Adventures
 *
 *
 * 1) Declare number1, number2 and result variables.
 *
 * 2) Assign values to the variables.
 *
 * 3) Run the findTotal function by writing its name
 *    followed by parentheses: findTotal();
 *
 * 4) Display the result on the console.
 *
 * 5) Run the displayMenu function.
 *
 */
