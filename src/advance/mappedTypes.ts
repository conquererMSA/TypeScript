type Volume = {
  height: number;
  width: string;
  depth: number;
};
type Bottle = {
  [index in keyof Volume]: number;
};
type Cattle = {
  [index in keyof Volume]: Volume[index];
};

type GenericProfile<T> = {
  [index in keyof T]: T[index];
};
type GenericProperty = {
  name: string;
  age: number;
  dateOfBirth: string;
};

const user3: GenericProfile<GenericProperty> = {
  name: "MSA",
  age: 25,
  dateOfBirth: "2Jan1999",
};
