//conditional types, a type depends on another types
type a1 = number;
type a2 = null;
type a3 = a1 extends number ? boolean : string; //type a3=boolean
type a4 = a3 extends string
  ? number
  : a1 extends null
  ? null
  : a2 extends string
  ? string
  : undefined; //un

type Sheikh = {
  wife1: string;
  wife2: number;
};
type CheckProperty<T> = T extends "wife2:string" ? true : false;
type CheckWife2 = CheckProperty<Sheikh>; //false
type CheckProperty2<T> = T extends { wife1: string } ? true : false;
type CheckWife1 = CheckProperty2<Sheikh>; //true

type CheckProperty3<X, Y> = X extends keyof Y ? true : false;
type CheckWifeGeneric = CheckProperty3<"wife1", Sheikh>; //true
//remove a type value
type Friends = "A" | "B" | "C";
type RemoveFreind<T> = T extends "B" ? never : T;
type AfterRomove = RemoveFreind<Friends>;

type Numbers = 1 | 2 | 3 | 4;
type RemoveNumber<X, Y> = X extends Y ? never : X;
type AfterNumber = RemoveNumber<Numbers, 2>;
