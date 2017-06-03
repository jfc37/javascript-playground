const R = require('ramda');

R.add(1, 4); /*?*/


var greet = R.replace('{name}', R.__, 'Hello, {name}!');
greet('Alice'); /*?*/