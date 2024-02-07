function add(num1: number, num2: number): number {
  return num1 + num2;
}

const arrowAdd = (num1: number, num2: number): number => num1 + num2;
// console.log(arrowAdd(2,4));

const numbers = [1, 2, 3, 4, 5];
const person: {
  name: string;
  age: number;
  balance: number;
  addBalance(money: number): string;
} = {
  name: "MSA",
  age: 25,
  balance: 10,
  addBalance: function (taka: number): string {
    return `${this.name} balance is ${this.balance + taka}`;
  },
};
// console.log(person.addBalance(5));

const myFreinds = ["A", "B", "C"];
const newFriends = ["D", "E", "F"];
myFreinds.push(...newFriends); //['A','B','C','D','E','F']
// not like that myFreinds.push(newFriends)=['A','B','C',['D','E','F']]

const greetings = (...friends: string[]) =>
  friends.forEach((friend: string) => {
    //ekhane friends hocce ekti rest operator. Rest operator onek gulu alada alada value ke ekti array te convert kore. Tai friends property hocce string er array
    console.log(`Hi ${friend}`);
  });
greetings("A", "B", "C");

//Function type alias
type OperationType = (x: string, y: string) => string;
const calculate = (num1: number, num2: number, operation: OperationType) => {
  return operation("num1", "num2");
};

console.log(calculate(2, 5, (a, b) => a + b));
//duiti letter ke zu kora zay kintu onno kuno operation calanu zay na
// console.log(calculate(2, 5, (a, b) => a - b)); error,operation function string return korche. string er minus hoy na
// console.log(calculate(2, 5, (a, b) => a * b)); error, operation function string return korche. string er multiply hoy na
