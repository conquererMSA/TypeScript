interface Person {
  name: string;
  email: string;
  money: number;
  isMarried: boolean;
}
//Pick generic duiti param ney. Pick type diye object toire kora hoy.
type PersonsPick = Pick<Person, "email" | "money">; //email and money type niye kaj korbe
const msa: PersonsPick = {
  email: "rtrt",
  money: 57,
};
//Omit generic duite param ney. Omit param guluke bad diye object toiree kore
type PersonsOmit = Omit<Person, "email" | "money">; //email and money bad diye dibe shudu name type niye kaj korbe
const msaName: PersonsOmit = {
  name: "MSA",
  isMarried: false,
};
//Partial ektu param ney. sob gulu type props ke optional kore object toiree kore
type Optional = Partial<Person>;
const optionalMSA: Optional = {
  name: "MSA",
  money: 4565,
};
//Required generic. Ekti param ney. Param er sob gulu pro niye object toiree kore
type AllProps = Required<Person>;
const msaFull: AllProps = {
  email: "ef",
  money: 3455,
  name: "MSA",
  isMarried: false,
};
//ReadOnly ekti param ney.Param er props niye object toiree kore zar props gulu change kora zay na
type OnlyRead = Readonly<Person>;
const readMSA: OnlyRead = {
  email: "rgr",
  money: 565,
  name: "dsfdf",
  isMarried: false,
};
//cant change or re-assign any property
// readMSA.email='466' //error

// type OBJ={
//     a:string
//     b:number
//     c:boolean
// }
//ekhane OBJ er key string and valu guluo string.
//index signature type IndexSignature={  [index/key:string] : string  } //{a:'rwe',b:46,c:true}
//kintu ekahen aro better type declare korar jonno Record type use kora zay
// type BetterType = Record<"a" | "b"|'c', string|number>;
type ForRecordKey = "name" | "role" | "monye" | "city";
type ForRecordValue = number | string;
type BetterType = Record<ForRecordKey, ForRecordValue>;
const mySelf: BetterType = {
  name: "MSA",
  role: "CEO",
  city: "Sylhet",
  monye: 1,
};
