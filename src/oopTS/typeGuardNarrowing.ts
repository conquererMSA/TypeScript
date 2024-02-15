//keyof guard
const calculate5 = (
  par1: string | number,
  par2: string | number
): string | number => {
  if (typeof par1 === "number" && typeof par2 === "number") {
    return par1 + par2;
  } else {
    return par1.toString() + par2.toString();
  }
};
const result7 = <number>calculate5(2, 4);
const result8 = <string>calculate5("2", "5");

type NumberCalculate<X extends number> = (a: X, b: X) => X;
type StringConcat<Y extends string> = (a: Y, b: Y) => Y;
const calculate6 = <X, Y>(par1: X, par2: Y) => {
  if (typeof par1 === "number" && typeof par2 === "number") {
    return par1 + par2;
  } else if (typeof par1 === "string" && typeof par2 === "string") {
    return par1.toString() + par2.toString();
  }
};

type NumberORString = number | string;
const result9 = calculate6<number, number>(3, 5);
const result10 = calculate6<string, number>("3", 5); //calculate6 function er vitor aro duita typeof checking bosate hobe

//in guard: object er kkhetre beshi use hoy
type Normal = {
  name: string;
};
type Admin = {
  name: string;
  role: string;
};
const user4: Normal | Admin = {
  name: "MSA",
};

const bringProp = (user: Normal | Admin): string => {
  // in guard
  if ("role" in user) {
    return user.role;
  } else {
    return user.name;
  }
};
const resw = bringProp(user4);
