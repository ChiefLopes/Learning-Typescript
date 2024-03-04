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
