/**
 * To run this file in Gitpod, use the 
 * command node destructuring.js in the terminal
 */

// Destructuring arrays
let ages = [30, 26, 27];
// let john = ages[0];
// let mary = ages[1];
// let joe = ages[2];

// This is without destructuring. Each index needs to be
// assigned seperately to access them.

// With destructuring this is easier:
let [john, mary, joe] = ages;
console.log(john, mary, joe);
// ES6 automatically assigns each index of ages to the corresponding new array I made


// Destructuring objects
let jobs = {
    mike: "designer",
    jill: "developer",
    alicia: "accountant"
};

let {mike, jill, alicia} = jobs;
console.log(mike, jill, alicia)

// By having the '[] or {}' on the left side of the expression, ES6 understands that
// I'm trying to create variables from the related object or array.
// In the above example, the values of each key are logged to the console.


// Destructuring subsets
let languages = ['english', 'french', 'spanish', 'german', 'japanese'];
let [johnNative, johnSecondary] = languages;
console.log(johnNative, johnSecondary)
// Here I'm just taking the first two values. If I want to skip a value, I can add a comma in place
// of it like so:
let [, , maryNative, , marySecondary] = languages
console.log(maryNative, marySecondary)
// The ', ,' skips the first 2 values, making maryNative = spanish
// The ', ' after tha skips german, leaving marySecondary = japanese

// Here I've used destructuring to just get the data I need, it doesn't have to be sequential.
let languages2 = {
    firstLanguage: 'english',
    secondLanguage: 'french',
    thirdLanguage: 'german',
    fourthLanguage: 'japanese'
};

let {firstLanguage, thirdLanguage} = languages2
console.log(firstLanguage, thirdLanguage)

 
// Using rest parameter syntax
let fruits = ['apple', 'orange', 'banana', 'peach', 'cherry'];
let [favourite, secondFavourite, ...others] = fruits;
console.log(favourite, secondFavourite, others)

let favouriteFoods = {
    brian: 'pizza',
    anna: 'pasta',
    sarah: 'vegetarian',
    andrea: 'steak'
};

let {brian, anna, ...rest} = favouriteFoods;
console.log(brian, anna, rest)
// IMPORTANT - Make sure the brackets match the array/object. I just tried using [] with
// and object, and it threw an error as it isn't iterable.