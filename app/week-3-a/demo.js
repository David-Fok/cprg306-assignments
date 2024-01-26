//JavaScript PROPERTIES
let person = {
  name: "Jane",
  age: 30,
  hobbies: ["reading", "swimming", "cooking"],
};
person.name = "John";

console.log(person.name); // John
console.log(person); // John

let { name, age } = person2;
console.log(name); // John
console.log(age); // 30
