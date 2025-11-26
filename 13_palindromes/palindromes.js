const palindromes = function (text) {
  const regexedText = text.replace(/[^0-9a-z]/gi, "").toLowerCase();
  return regexedText === regexedText.split("").reverse().join("")
    ? true
    : false;
};

// Do not edit below this line
module.exports = palindromes;
