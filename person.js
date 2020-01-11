
//EXPORTING OBJECTS INTO ANOTHER FILE EXAMPLE:
/* const person = {
    name: 'John Doe',
    age: 30
}

**** module.exports = person;

** IN index.js write : const person = require('./person.js');

*/

//MODULE WRAPPER FUNCTION
/*(function (exports, require, module, __filename, __dirname) {
    
});*/

// Gives access to variables: exports, require, module, __filename, __dirname


console.log(__dirname, __filename);

class Person{
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    greeting() {
        console.log(`My name is ${this.name} and I am ${this.age}`);
    }
}

module.exports = Person; 