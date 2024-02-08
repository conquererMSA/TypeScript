//Basic Generic interface
interface GenericPerson<C, CO> {
  name: string;
  age: number;
  address: C;
  company: CO;
}
const person4: GenericPerson<string, string> = {
  name: "MSA",
  age: 25,
  address: "Dhaka",
  company: "Tarmat Inc",
};

interface IAddress {
  name: string;
  road: string;
  latitude: number;
  coOrdinate: number;
}

interface ICompany {
  name: string;
  numOfEmplyee: number;
  ceo: string;
  revenue: string;
}

const fullInfo: GenericPerson<IAddress, ICompany> = {
  name: "MSA",
  age: 25,
  address: {
    name: "Tarmat Square",
    coOrdinate: 232346,
    latitude: 3447,
    road: "Tarmat Street",
  },
  company: {
    name: "Tarmat Inc",
    ceo: "MSA",
    numOfEmplyee: 434,
    revenue: "10.00M",
  },
};

interface IPerson<C, S, W = null, U = null> {
  name: string;
  age: number;
  wife?: W;
  college: C;
  school: S;
  university?: U;
}

interface IWife {
  name: string;
  age: number;
}
interface ISchool {
  name: string;
}
interface ICollege {
  name: string;
}
interface IUniversity {
  name: string;
}

const iAM: IPerson<ICollege, ISchool> = {
  name: "MSA",
  age: 25,
  // wife:{
  //   name:'Gulbahar',
  //   age:29
  // },
  college: {
    name: "MC",
  },
  school: {
    name: "BMSC",
  },
  // university:{
  // name:'JnU'
  // }
};
