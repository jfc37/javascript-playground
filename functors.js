function characterFunctor(word, fn) {
  return word.split('')
    .map(char => char.charCodeAt())
    .map(code => fn(code))
    .map(code => String.fromCharCode(code))
    .join('');
}

function arrayFunctor(array, fn) {
  array;
  return array.map(i => fn(i));
}

function plusOne(value) {
  return value + 1;
}

const num = plusOne(20);
num;

const array = arrayFunctor([1, 3, 5], plusOne);
array;

const string = characterFunctor('hello', plusOne);
string;