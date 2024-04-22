const add = function(a, b) {
	return a + b;
};

const subtract = function(a,b) {
	return a - b;
};

const sum = function(arr) {
	return arr.reduce(
    (ergebnis,number) =>  ergebnis + number
    , 0);
};

const multiply = function(arr) {
  return arr.reduce(
    (ergebnis,number) =>  ergebnis * number);
};

const power = function(a,p) {
	let pow = 1;
  for(let i = 0; i < p; i++){
    pow = pow * a;
  }
  return pow;
};

const factorial = function(a) {
	let fac = 1;
  for(let i = a; i > 0; i--){
    fac = fac * i;
  }
  return fac;
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
