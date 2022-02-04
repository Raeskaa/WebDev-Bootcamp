// CommonJS, every file is module (by default)
// Modules - Encapsulated Code (only share minimum)
const names = require('./4-module.js');
const sayHi = require('./5-utils.js');
// 
sayHi('susan');
sayHi(names.john);
sayHi(names.peter);
