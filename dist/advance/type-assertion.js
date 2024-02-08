"use strict";
let course;
course = "Next Level Web Dev";
course.length;
const courseLen = course.split(" ");
console.log(courseLen);
const kgToGram = (param) => {
    if (typeof param === "string") {
        const value = parseFloat(param) * 1000;
        return value;
    }
    else if (typeof param === "number") {
        const value = param * 1000;
        return value;
    }
    else {
        return undefined;
    }
};
const numberValue = kgToGram(1000);
// const numberValue=<number>kgToGram(1000)
const stringValue = kgToGram("1");
let bigNumber;
bigNumber = 3666;
bigNumber.split("");
