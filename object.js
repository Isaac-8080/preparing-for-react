// 1 ) Create a Simple Object
// Create an object named car with the following properties:
// make: a string representing the car's manufacturer (e.g., "Toyota")
// model: a string representing the car's model (e.g., "Camry")
// year: a number representing the year of manufacture (e.g., 2020)

const car = {
  make: 'Toyota',
  model: 'Camry',
  year: '2020'
}

// 2 ) Accessing Object Properties
// Using the car object from quesion 1:
// Access and log the make and year properties to the console.
console.log(`${car.make} | ${car.year}`);


// 3 ) Nested Objects
// Create an object named person with the following properties:
// name: a string representing the person's name
// age: a number representing the person's age
// address: an object with properties street, city, and zip (each should be a string)

const person = {
  name: 'Isaac',
  age: 20,
  address: {
    street: '15 Parship street',
    city: 'Accra',
    zip: '00233'
  }
}
console.log(person);