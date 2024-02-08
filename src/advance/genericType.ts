//normal type alias
// const rollNumber:number[]=[1,23,4]
// const stringNumber:string[]=['1','4']

const rollNumber: Array<number> = [1, 23, 4];
const stringNumber: Array<string> = ["1", "4"];

//generic type normal
type GenericArray = Array<number>;
const classes: GenericArray = [1, 2, 3, 4, 5];
//  const stringClasses:GenericArray=['1','2'] error, GenericArray only accept number value in array
//generic type
type GenericArray2<T> = Array<T>;
const persons: GenericArray2<number> = [1, 2, 3, 4];
const stringPersons: GenericArray2<string> = ["1", "2", "3"];

type Student = {
  name: string;
  roll: number;
};
// const students:Array<{name:string, roll:number}>=[{name:'MSA',roll:103237},{name:'KSA',roll:99865}]
const students: GenericArray2<Student> = [
  { name: "MSA", roll: 103237 },
  { name: "KSA", roll: 99865 },
];

type GenericTuple<X, Y> = [X, Y];
type Husband = {
  name: string;
  age: number;
  wife: string;
};
type Wife = {
  name: string;
  age: number;
  husband: string;
};
const couples: GenericTuple<Husband, Wife> = [
  { name: "MSA", age: 25, wife: "Gulbahar" },
  { name: "Gulbahar", age: 29, husband: "MSA" },
];
//advance tuple
interface IMen {
  name: string;
  age: number;
  wife: string;
  company: string;
  salary: number;
  role: "CEO" | "COO";
}
interface IWomen {
  name: string;
  age: number;
  husband: string;
  company?: string;
  salary: number;
  role: "CEO" | "Manager";
}
type Couple<X, Y> = [X, Y];

const personsInfo: Couple<IMen, IWomen> = [
  {
    name: "MSA",
    age: 25,
    company: "Tarmat Inc",
    salary: 3645,
    wife: "Gulbahar",
    role: "CEO",
  },
  { name: "Gulbahar", age: 29, husband: "MSA", salary: 54435, role: "Manager" },
];

type Men = {
  name: string;
  age: number;
};
type Women = {
  school: string;
  adult: boolean;
};

const couple2: GenericTuple<Men, Women> = [
  { name: "MSA", age: 35 },
  { school: "MSA", adult: true },
];
