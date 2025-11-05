const removeFromArray = function (arr) {
  removeArr = Array.from(arguments).splice(1);
  return arr.filter((item) => !removeArr.includes(item));
};

// Do not edit below this line
module.exports = removeFromArray;
