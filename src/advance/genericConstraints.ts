// interface MendatoryInfo{
//     name:string
//     age:number
//     salary:number
// }
// const addCouples = <T extends MendatoryInfo>(myInfo: T) => {
//   const crush = "Gul";
//   const newData = { ...myInfo, crush };
//   return newData
// };

// interface IMyInfo{
//     name:string
//     age:number
//     salary:number
//     other1:string
//     other2:boolean
// }
// const myInfo:IMyInfo={
//     name:'MSA',
//     age:25,
//     salary:234,
//     other1:'uyt',
//     other2:false
// }
// const value6=addCouples<IMyInfo>(myInfo)

//keyof constraints

interface IMen3 {
  name: string;
  age: number;
}
// type manuallyKeyOf='age'|'name'|'school'
type NewMen = keyof IMen3;
const men3: NewMen = "name";

const getProperty = <X, Y extends keyof X>(obj: X, key: Y) => {
  //X={name:string, age:number}
  obj[key];
};

const value = getProperty<IMen3, NewMen>({ name: "MSA", age: 25 }, "age");
