interface PersonProps {
  firstName: string;
  lastName: string;
  age: number;
  isMarried: boolean;
}

interface PersonMethods {
  fullName(): string;
  details(): PersonProps;
}

interface PersonMethodsAndType<Props, Methods> {
  data: Props;
  methods: Methods;
}
// type PersonModel=PersonMethodsAndType<PersonProps, PersonMethods> //User class e ei type implements kora zeto
class User implements PersonMethodsAndType<PersonProps, PersonMethods> {
  data: PersonProps;
  methods: PersonMethods;
  constructor(
    firstName: string,
    lastName: string,
    age: number,
    isMarried: boolean
  ) {
    (this.data = {
      firstName: firstName,
      lastName: lastName,
      age: age,
      isMarried: isMarried,
    }),
      (this.methods = {
        fullName() {
          return `The person is ${firstName + " " + lastName}`;
        },
        details() {
          return {
            firstName: firstName,
            lastName: lastName,
            age: age,
            isMarried: isMarried,
          };
        },
      });
  }
}

const kingMSA = new User("M", "SA", 25, false);
console.log(kingMSA.methods.details()); // full object pabo
console.log(kingMSA.methods.fullName()); //The person is M SA
