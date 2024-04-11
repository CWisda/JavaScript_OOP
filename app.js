console.log("Hello World!\n==========\n");

// Exercise 1 Section
console.log("EXERCISE 1:\n==========\n");

class Person {
    constructor(name, pets, residence, hobbies) {
    this.name = name;
    this.pets = pets;
    this.residence = residence;
    this.hobbies = hobbies;
    }
    addHobby(hobby) {  //question
        this.hobbies.push(hobby);
    }
    removeHobby(hobby) {   // question
        // 1. splice
        // array method remove exisiting elements
        //using findIndex (to locate index) could also use a for loop
         //const index = this.hobbies.findIndex((element) => {
            //return (element == hobby);
        // });
         //this.hobbies.splice(index, 1);


         //2. filter
         // should i keep the element or not -  so that is why we are using the != in the return -  it is returning true or false 
         this.hobbies = this.hobbies.filter((element) => {
            return (element != hobby);
         });
    }
    greeting() {
        (console.log("Hello fellow person!"))
    }
    info() {

    }
    soundOff() {

    }
}        


// exercise 2 
// create a subclass

class Coder extends Person {
    constructor(name, pets, residence, hobbies) {
    super(name, pets, residence, hobbies);
    this.occupation = "Full Stack Web Developer";
    }
    greeting() {
        console.log("let's get to coding");
    }
}


// exercise 3  
// adding varible with new keyword - plugging in the constructor info
const person1 = new Person("John Wick", 2, "house", ["dog walks"]);
console.log(person1);
const coder1 = new Coder("Charles", 1, "house", ["walks on the beach"], "web developer");
console.log(coder1);

person1.addHobby("Contract Killer");
// this is to remove a hobby
//person1.removeHobby("dog walks");
person1.info();

// need some help with adding and removing 


// exercise 4 
//didnt have to use constuctor because it did not have any parameters
class Calculator {
        constructor (){
            this.result = 0;
        }
  add(a, b) {
    this.result = a + b;
    return this.result
  }
  subtract(a, b) {
    this.result = a - b;
    return this.result;
    
  }
    multiply(a, b) {
    this.result = a * b;
    return this.result;
  }
  divide(a, b) {
    this.result = a / b;
    return this.result;
  }
  displayResult() {
    console.log(this.result);
  }
}


const calc = new Calculator();
calc.add(2, 3);
calc.displayResult();
calc.subtract(6, 3);
calc.displayResult();
calc.multiply(8, 3);
calc.displayResult();
calc.divide(6, 2);
calc.displayResult();