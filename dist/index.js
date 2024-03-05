"use strict";
let id = 11;
let me = "Lopes";
let food = "rice";
console.log(id, me, food);
if (typeof me === "number") {
    console.log(`${me} is a number`);
}
else {
    console.log(`${me} is a string`);
}
const fruits = ["orange", "apple", "pawpaw"];
const colors = ["red", 1, 2, "blue", true];
console.log(fruits);
console.log(colors);
//! TUPLE
//* With a tuple, u can specify the types to be contained in an array
const person = [1, "Ben", true];
console.log(person);
//! TUPLE ARRAY
//* A tuple array shows types that should be contained in an array, and it must be in the order of its declaration or placement
const people = [
    [1, "Ben"],
    [2, "Betty"],
    [3, "Benny"],
];
console.log(people);
//! UNION
//* When you are not so sure of what a variable should hold or, when a variable is expected to have either one type or another, we use union to specify.
const tag = "Lopes"; //* THe tag variable, can either contain a number or a string and norhing more than both types specified, unless we want to add another type.
const tag2 = 23; //* THe tag2 variable, can either contain a number, a string and/or a boolean and nothing more than the types specified,
console.log(tag, tag2);
//! ENUMERATORS OR ENUMS
//* Enums in typescript help us defined a set of named constants that are typically mapped to a numerical value.
var days;
(function (days) {
    days[days["Sunday"] = 1] = "Sunday";
    days[days["Monday"] = 2] = "Monday";
    days[days["Tuesday"] = 3] = "Tuesday";
    days[days["Wednesday"] = 4] = "Wednesday";
    days[days["Thursday"] = 5] = "Thursday";
    days[days["Friday"] = 6] = "Friday";
    days[days["Saturday"] = 7] = "Saturday";
})(days || (days = {}));
let today = days[5];
console.log(today);
//* So, enumerators in TypeScript help us give names to numbers, making our code easier to read and understand.
//* We can also assign stings in place of numbers.
var days2;
(function (days2) {
    days2["Sunday"] = "Sunday";
    days2["Monday"] = "Monday";
    days2["Tuesday"] = "Tuesday";
    days2["Wednesday"] = "Wednesday";
    days2["Thursday"] = "Thursday";
    days2["Friday"] = "Friday";
    days2["Saturday"] = "Saturday";
})(days2 || (days2 = {}));
let day = days2.Sunday;
console.log(day);
const Lopes = {
    id: 1,
    name: "Louis Peace",
    age: 45,
    job: "software engineer",
    post: 2,
};
console.log(Lopes);
//! TYPE ASSERTION
//* Type assertion in JavaScript is a way to tell the TypeScript compiler that you know more about the type of a value than TypeScript does. It's like a way of casting or converting a variable from one type to another, but without actually performing any runtime checks or conversions.
/*
Type assertion is helpful when you're working with values that TypeScript cannot infer the type of accurately,
such as when dealing with dynamic data, data from external sources,
or when migrating code from JavaScript to TypeScript. However,
it's important to use type assertion carefully and only when you're certain about the type of the variable,
as incorrect type assertions can lead to runtime errors. */
// T
const value = "This is a value";
//* Type assertion can be done in 2 ways. One is by using the "as" keyword and the other is by using the angle-brackets
let strLength = value.length; //* USing the "as" keyword
let strLength1 = value.length; //* Using the angle bracket <.....>
console.log(value);
console.log(strLength);
console.log(strLength1);
//! FUNCTIONS
function addNum(x, y) {
    return x + y;
}
console.log(addNum(2, 4));
//! The VOID type
/** The void type returns In TypeScript, the void type represents the absence of any type.
It is commonly used to indicate that a function does not return any value.
Functions declared with a return type of void explicitly specify that they do not return a value, or they return undefined. */
function greeting(greet) {
    console.log(greet);
}
greeting("hello");
