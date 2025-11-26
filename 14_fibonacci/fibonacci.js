const fibonacci = function (num) {
  if (num == 0) {
    return 0;
  } else if (num < 0) {
    return "OOPS";
  } else if (num < 3) {
    return 1;
  }

  let prev = (cur = 1);
  let ans;
  for (let i = 0; i < num - 2; i++) {
    ans = prev + cur;
    prev = cur;
    cur = ans;
  }
  return ans;
};

// Do not edit below this line
module.exports = fibonacci;
