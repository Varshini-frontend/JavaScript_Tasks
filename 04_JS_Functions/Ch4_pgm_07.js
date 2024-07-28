// Using the findTotal function to display a calculation

var planet = "Jupiter";
var bigPlanet = planet.toUpperCase();
var getBig = function (str) {
    return str.toUpperCase();
};
console.log(planet + " becomes " + bigPlanet);

var getSmall = function (str) {
    return str.toLowerCase();
};

// Testing getSmall function
var country = "UNITED STATES";
var smallCountry = getSmall(country);
console.log(country + " becomes " + smallCountry);




/* Further Adventures
 *
 * 1) Change number1 and number2 and run the program
 *
 * 2) Add a third variable, number3, and assign it a value
 *
 * 3) Update the findTotal function to add the three numbers
 *
 * 4) Update the console.log line to show the new calculation
 *
 */
