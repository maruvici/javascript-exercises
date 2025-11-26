const add = function (a, b) {
  return a + b;
};

const subtract = function (a, b) {
  return a - b;
};

const sum = function (a) {
  return a.reduce((total, item) => total + item, 0);
};

const multiply = function (a) {
  return a.reduce((total, item) => total * item, 1);
};

const power = function (a, b) {
  let result = a;
  for (let i = 0; i < b - 1; i++) {
    result *= a;
  }
  return result;
};

const factorial = function (a) {
  if (a == 0) {
    return 1;
  }
  let result = a;
  while (a > 1) {
    a -= 1;
    result *= a;
  }
  return result;
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial,
};
