"use strict";
// City Names: Write a function called city_country() that takes in the name of a city and its country. The function should return a string formatted like this:
// "Lahore, Pakistan"
// Call your function with at least three city-country pairs, and print the value that’s returned.
function cityCountry(city, country) {
    return `${city}, ${country}`;
}
let C1 = cityCountry('lahore', 'pakistan');
let c2 = cityCountry('tokyo', 'japan');
let c3 = cityCountry('paris', 'france');
console.log(C1);
console.log(c2);
console.log(c3);
