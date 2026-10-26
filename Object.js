// extends1
function Phone(brand, model) {
  this.brand = brand;
  this.model = model;
}

Phone.prototype.details = function () {
  console.log(`Phone: ${this.brand} ${this.model}`);
};

const phone = new Phone("Samsung", "S22");
phone.details(); // Phone: Samsung S22
// exe2
function Rectangle(width, height) {
  this.width = width;
  this.height = height;
}

Rectangle.prototype.area = function () {
  return this.width * this.height;
};

const rect = new Rectangle(5, 4);
console.log(rect.area()); // 20
// exe3
function BankAccount(owner, balance) {
  this.owner = owner;
  this.balance = balance;
}

BankAccount.prototype.deposit = function (amount) {
  this.balance += amount;
};

BankAccount.prototype.withdraw = function (amount) {
  if (amount <= this.balance) {
    this.balance -= amount;
  } else {
    console.log("Insufficient funds");
  }
};

BankAccount.prototype.checkBalance = function () {
  console.log(`Balance: ${this.balance}`);
};

const account = new BankAccount("Dana", 1000);
account.deposit(500);    // balance = 1500
account.withdraw(200);   // balance = 1300
account.checkBalance();  // Balance: 1300
// exe4
function Animal(name) {
  this.name = name;
}

Animal.prototype.speak = function () {
  console.log(`${this.name} makes a sound`);
};

function Dog(name) {
  Animal.call(this, name); // inherit properties
}

Dog.prototype = Object.create(Animal.prototype); // inherit methods
Dog.prototype.constructor = Dog;

Dog.prototype.bark = function () {
  console.log(`${this.name} barks`);
};

const dog = new Dog("Rocky");
dog.speak(); // Rocky makes a sound
dog.bark();  // Rocky barks
// exe5
function Vehicle(type) {
  this.type = type;
}

Vehicle.prototype.describe = function () {
  console.log(`This is a ${this.type}`);
};

function Car(brand, type) {
  Vehicle.call(this, type);
  this.brand = brand;
}

Car.prototype = Object.create(Vehicle.prototype);
Car.prototype.constructor = Car;

Car.prototype.info = function () {
  console.log(`This is a ${this.brand} ${this.type}`);
};

const car = new Car("BMW", "car");
car.describe(); // This is a car
car.info();     // This is a BMW car
// wxe6
function Shape() {}

Shape.prototype.area = function () {
  return 0;
};

function Circle(radius) {
  Shape.call(this);
  this.radius = radius;
}
Circle.prototype = Object.create(Shape.prototype);
Circle.prototype.constructor = Circle;
Circle.prototype.area = function () {
  return Math.PI * this.radius ** 2;
};

function Square(side) {
  Shape.call(this);
  this.side = side;
}
Square.prototype = Object.create(Shape.prototype);
Square.prototype.constructor = Square;
Square.prototype.area = function () {
  return this.side ** 2;
};

const circle = new Circle(3);
console.log(circle.area()); // 28.274333882308138

const square = new Square(4);
console.log(square.area()); // 16
// exe7
class Book {
  constructor(title, author) {
    this.title = title;
    this.author = author;
  }

  info() {
    console.log(`${this.title} by ${this.author}`);
  }
}

const book = new Book("The Hobbit", "Tolkien");
book.info(); // The Hobbit by Tolkien
// exe8
class Person {
  constructor(name) {
    this.name = name;
  }

  greet() {
    console.log(`Hello, I'm ${this.name}`);
  }
}

class Student extends Person {
  constructor(name, school) {
    super(name);
    this.school = school;
  }

  study() {
    console.log(`${this.name} is studying at ${this.school}`);
  }
}

const student = new Student("Alice", "Oxford");
student.greet(); // Hello, I'm Alice
student.study(); // Alice is studying at Oxford