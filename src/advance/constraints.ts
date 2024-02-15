//constraints shobder ortho jur kora
type Purush = {
  name: string;
  age: number;
  isMarried: boolean;
};
type Adult = keyof Purush;
type Beta = "name" | "age" | "isMarried";

const getPro = <X, Y extends keyof X>(obj: X, key: Y) => {
  return obj[key];
};

const user5: Purush = {
  name: "MSA",
  age: 25,
  isMarried: false,
};
//name, age , isMarried chara onno kuno pro diye call korte parbo na
const resultAge = getPro(user5, "age"); //25
const resultName = getPro(user5, "name"); //MSA
