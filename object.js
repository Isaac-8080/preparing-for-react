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


// 4 ) Array of Objects
// Create an array named students that contains at least three objects. Each object should represent a student with the following properties:
// name: a string representing the student's name
// age: a number representing the student's age
// grade: a string representing the student's grade (e.g., "A", "B", "C", etc.)
// isEnrolled: a boolean indicating whether the student is currently enrolled (true or false)

const students = [
  {
    name: 'John',
    age: 16,
    grade: 'C',
    isEnrolled: true
  },

  {
    name: 'Doe',
    age: 21,
    grade: 'B',
    isEnrolled: true
  },

  {
    name: 'Felix',
    age: 23,
    grade: 'D',
    isEnrolled: false
  },
  
  {
    name: 'Gifty',
    age: 10,
    grade: 'A',
    isEnrolled: true
  },
]

// Accessing Properties: Log the name and grade of each student in the array to the console.
students.forEach(student => {
  
  console.log(`${student.name} : ${student.grade}`);

});


// Objective:
// The goal of this assignment is to reinforce your understanding of JavaScript basics, including object, data types, loops, conditionals.
// Instructions:
// 1. Write a JavaScript program to display the reading status (i.e. display book name, author name and reading status) of the following books.
let library = [ 
  {
    author: 'Bill Gates',
    title: 'The Road Ahead',
    readingStatus: true
  },
  {
    author: 'Steve Jobs',
    title: 'Walter Isaacson',
    readingStatus: true
  },
  {
    author: 'Suzanne Collins',
    title:  'Mockingjay: The Final Book of The Hunger Games', 
    readingStatus: false
  }
];

for (let i = 0; i < library.length; i++) {
  const book = library[i];
  
  if (book.readingStatus === true) {
    book.readingStatus = 'read';
  } else {
    book.readingStatus = 'not read';
  }

  console.log(`Title: ${book.title} \nAuthor: ${book.author} \nReading Status: ${book.readingStatus}`);
}