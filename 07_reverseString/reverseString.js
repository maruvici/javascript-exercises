const reverseString = function (word) {
  answer = "";
  for (let i = 0; i < word.length; i++) {
    answer += word[word.length - i - 1];
  }
  return answer;
};

// Do not edit below this line
module.exports = reverseString;
