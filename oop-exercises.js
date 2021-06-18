// Part 1

class Vehicle{
  constructor(make, model, year) {
    this.make = make;
    this.model = model;
    this.year = year;
  }

  honk() {
    return 'Beep!'
  }
  toString() {
    return `The vehicle is a ${this.make} ${this.model} from ${this.year}`;
  }
}

let myFirstVehicle = new Vehicle('Honda', 'Monster Truck', 1999)
// console.log(myFirstVehicle)
// console.log(myFirstVehicle.honk())
// console.log(myFirstVehicle.toString())

// Part 2

class Car extends Vehicle {
  constructor(make, model, year) {
    super(make, model, year);
    this.numWheels = 4
  }
}

let myFirstCar = new Car('Toyota', 'Corolla', 2005)
// console.log(myFirstCar)
// console.log(myFirstCar.honk())
// console.log(myFirstCar.toString())
// console.log(myFirstCar.numWheels)

// Part 3