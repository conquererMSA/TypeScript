//object interface: object er kkhetre interface declare kora better. onno sob kkhetre type alias declare kora valo
interface IUser {
  name: string;
  age: number;
}
interface IExtendedUser extends IUser {
  isMarried: boolean;
  company: string;
  salary: number;
}

const user2: IExtendedUser = {
  name: "MSA",
  age: 25,
  isMarried: false,
  company: "Tarmat Inc",
  salary: 2,
};

//function interface:
// type addNumberType=(x:number, y:number)=>number
interface IAddNumber {
  (x: number, y: number): number;
}
//normal function type declaration
// const addNumber:IAddNumber=(num1:number, num2:number):number=>num1+num2
const addNumber: IAddNumber = (num1, num2) => num1 + num2;
//array interface: index signature
const rollNumbers: number[] = [1, 2, 3, 4, 5];
interface IRollNumbers {
  [index: number]: number;
}

const rollNumbers2: IRollNumbers = [1, 2, 3, 4, 5];
