"use strict";
// More Conditional Tests: You don’t have to limit the number of tests you create to 10. If you want to try more comparisons, write more tests. Have at least one True and one False result for each of the following:
// • Tests for equality and inequality with strings
// • Tests using the lower case function
// • Numerical tests involving equality and inequality, greater than and less than, greater than or equal to, and less than or equal to
// • Tests using "and" and "or" operators
// • Test whether an item is in a array
// • Test whether an item is not in a array
let name_1 = "maham";
let name_2 = "zoha";
let name_3 = "amna";
// **TEST INEQUALITY AND EQUALITY**
if (name_1 == name_3) {
}
else {
    console.log("names are not equal");
}
if (name_1 < name_2) {
}
else {
    console.log("names are equal");
}
// **LOWER CASE FUNCTION**
if (name_1 < name_3) {
}
else {
    console.log('names are equal'.toLowerCase());
}
// **NUMERICAL TEST**
let age_1 = 16;
let age_2 = 20;
if (age_1 == 16) {
    console.log("eligible for vote");
}
if (age_1 < 20) {
    console.log("eligible for vot in older categari");
}
// ** LESS THAN TEST ** 
if (age_1 <= age_2) {
    console.log("younger");
}
// **GREATER THAN **
if (age_2 > age_1) {
    console.log("older");
}
// **AND** AND **OR** OPERATOR
// AND OPERITOR
if ('age_1 = 16 && age_2 = 20') {
    console.log("person is eligible for vote");
}
// OR OPERITOR
if ('age_1 == 16 || age_2 == 20') {
    console.log("person is not eligible for vote");
}
// ** TEST ARRAY AND NOT ARRAY **
let country = ["pakistan", "japan", "india"];
if ('country.includes("pakistan")') {
    console.log("pakistan is include is an array");
}
if ('country.includes("canada")') {
    console.log("canada is not include is an array");
}
