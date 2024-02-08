const createArray = (param: string): string[] => {
  return [param];
};

const createArray2 = <T>(param: T): T[] => {
  return [param];
};
interface IMen2 {
  name: string;
  age: number;
}
const men2: IMen2 = {
  name: "MSA",
  age: 25,
};
const result1 = createArray("BD");
const result2 = createArray2<boolean>(true);
const result3 = createArray2<IMen2>(men2); //object

const doubleParam = <X, Y>(p1: X, p2: Y): [X, Y] => {
  return [p1, p2];
};
const result = doubleParam<string, boolean>("MSA", false);
const result4 = doubleParam<IMen2, string>({ age: 25, name: "MSA" }, "MSA");

interface IMyCrush {
  name: string;
  age: number;
}
const myCrush: IMyCrush = {
  name: "Gulbahar",
  age: 29,
};

// const spreadCouple = (crush: IMyCrush) => {
//   const me = "Gulbahar";
//   const newData = { ...crush, me };
//   return newData;
// };

// const result5 = spreadCouple(myCrush);
// console.log(result5);
const spreadCouple = <T>(crush: T) => {
  const me = "Gulbahar";
  const newData = { ...crush, me };
  return newData;
};

const result5 = spreadCouple<IMyCrush>(myCrush);
console.log(result5);
