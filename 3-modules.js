// Modules encaspulate the code 
// Every file in node is a module by default
// Uses CommonJS over ES6 modules
const { john, peter } = require('./4-names');
const { sayHi } = require('./5-utils');
const { singlePerson, items } = require('./6-alt-flavor');
require('./7-mind-grenade');

sayHi('susan');
sayHi(john);
sayHi(peter);
sayHi(singlePerson.name);
