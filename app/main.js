//main.js 
const greeter = require('./Greeter.js');
$ = require('jquery');

document.querySelector("#root").appendChild(greeter());

console.log($)