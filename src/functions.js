/** Basic function **/
function simpleFunction(name, age) {
  return name + ' ' + age;
}

simpleFunction('Adam', 32); /*?*/
simpleFunction.call(this, 'Adam', 32); /*?*/
simpleFunction.bind()('Adam', 32); /*?*/
simpleFunction.apply(this, ['Adam', 32]); /*?*/

/** Object literal **/
const person1 = {name: 'Kate', age: 29};
function greet(greeting) {
  return `${greeting} ${this.name}, ${this.age}`
}

greet.call(person1, 'Hello'); /*?*/
greet.bind(person1)('Hello'); /*?*/
greet.apply(person1, ['Hello']); /*?*/


/** Class **/
class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  greet(greeting) {
    return `${greeting} ${this.name}, ${this.age}`;
  }
}

const person2 = new Person('Kelly', 65);
const person3 = new Person('Rob', 33);
person2.greet('Hello'); /*?*/

person2.greet.call(person2, 'Hello'); /*?*/
person2.greet.bind(person2)('Hello'); /*?*/
person2.greet.apply(person2, ['Hello']); /*?*/

/** Messing with 'this'*/
person2.greet.call(person3, 'Hello'); /*?*/
person2.greet.bind(person1)('Hello'); /*?*/
person2.greet.apply(person3, ['Hello']); /*?*/