"use strict";
// Name Cases: Store a person’s name in a variable, and then print that person’s name in lowercase, Uppercase, and titlecase.
let personName = "Maham";
//lower case
console.log("tolowerCase:", personName.toLowerCase());
//uper case
console.log("toUpperCase:", personName.toUpperCase());
//title case
console.log("titleCase:", personName.replace(/\b\w/g, c => c.toUpperCase()));
