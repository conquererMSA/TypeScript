//abstraction diye ekti class er structure toiree kora hoy. dui vabe class er abstraction declare kora zay. interface toire ebong abstract class declare kore.
//interface diye class structure toire kora zay
interface IVehicle {
  name: string;
  brand: string;
  price: number;
  isNew: boolean;
  startEngine(speed: number): string;
  stopEngine(speed: number, status: string): string;
  repairing(cost: number): string;
}
class Vehicle implements IVehicle {
  constructor(
    public name: string,
    public brand: string,
    public price: number,
    public isNew: boolean
  ) {}
  startEngine(speed: number): string {
    const spid = `${this.name} s speed is ${speed}`;
    return spid;
  }
  stopEngine(speed: number, status: string): string {
    const stopStatus = `${this.name} is high speed was ${speed} and now it is ${status}`;
    return stopStatus;
  }
  repairing(cost: number): string {
    const repairCost = this.price + cost;
    return `The repair cost is ${repairCost}`;
  }
}

const bike = new Vehicle("Thunderbolt", "RE", 35777, true);
const startInfo = bike.startEngine(230);
const stopInfo = bike.stopEngine(245, "stop");
const costInfo = bike.repairing(4567);

// abstract class structure
abstract class Animal {
  constructor(public name: string, public species: string) {}
  abstract makeSound(sound: string): string;
  abstract calculateAge(old: number): string;
  fooding(): string {
    return "";
  }
  info(): { name: string; age: string; species: string } {
    return {
      age: this.calculateAge(65),
      name: this.name,
      species: this.species,
    };
  }
}

class Dog extends Animal {
  constructor(name: string, species: string) {
    super(name, species);
  }
  makeSound(sound: string): string {
    return "";
  }
  calculateAge(old: number): string {
    return "";
  }
  info(): { name: string; age: string; species: string } {
    return {
      name: "EF",
      age: "75",
      species: "geff",
    };
  }
  running(): string {
    return "";
  }
}

// const animal=new Animal() Cannot create an instance of an abstract class.
const dog1 = new Dog("Shepared", "German");
console.log(dog1.info());
