const sumAll = function (a, b) {
  if (
    !(
      typeof a === "number" &&
      typeof b === "number" &&
      a >= 0 &&
      b >= 0 &&
      Number.isInteger(a) &&
      Number.isInteger(b)
    )
  ) {
    return "ERROR";
  }
  let upper;
  let lower;
  let sum = 0;
  if (a > b) {
    upper = a;
    lower = b;
  } else {
    upper = b;
    lower = a;
  }

  for (let i = lower; i < upper + 1; i++) {
    sum += i;
  }

  return sum;
};

// Do not edit below this line
module.exports = sumAll;
