"use strict";
function add(num1, num2) {
    return num1 + num2;
}
const arrowAdd = (num1, num2) => num1 + num2;
// console.log(arrowAdd(2,4));
const numbers = [1, 2, 3, 4, 5];
const person = {
    name: "MSA",
    age: 25,
    balance: 10,
    addBalance: function (taka) {
        return `${this.name} balance is ${this.balance + taka}`;
    },
};
// console.log(person.addBalance(5));
const myFreinds = ["A", "B", "C"];
const newFriends = ["D", "E", "F"];
myFreinds.push(...newFriends); //['A','B','C','D','E','F']
// not like that myFreinds.push(newFriends)=['A','B','C',['D','E','F']]
const greetings = (...friends) => friends.forEach((friend) => {
    //ekhane friends hocce ekti rest operator. Rest operator onek gulu alada alada value ke ekti array te convert kore. Tai friends property hocce string er array
    console.log(`Hi ${friend}`);
});
greetings("A", "B", "C");
const calculate = (num1, num2, operation) => {
    return operation("num1", "num2");
};
console.log(calculate(2, 5, (a, b) => a + b));
//duiti letter ke zu kora zay kintu onno kuno operation calanu zay na
// console.log(calculate(2, 5, (a, b) => a - b)); error,operation function string return korche. string er minus hoy na
// console.log(calculate(2, 5, (a, b) => a * b)); error, operation function string return korche. string er multiply hoy na
