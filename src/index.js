const MORSE_TABLE = {
  ".-": "a",
  "-...": "b",
  "-.-.": "c",
  "-..": "d",
  ".": "e",
  "..-.": "f",
  "--.": "g",
  "....": "h",
  "..": "i",
  ".---": "j",
  "-.-": "k",
  ".-..": "l",
  "--": "m",
  "-.": "n",
  "---": "o",
  ".--.": "p",
  "--.-": "q",
  ".-.": "r",
  "...": "s",
  "-": "t",
  "..-": "u",
  "...-": "v",
  ".--": "w",
  "-..-": "x",
  "-.--": "y",
  "--..": "z",
  ".----": "1",
  "..---": "2",
  "...--": "3",
  "....-": "4",
  ".....": "5",
  "-....": "6",
  "--...": "7",
  "---..": "8",
  "----.": "9",
  "-----": "0"
};

function decode(expr) {
  // write your solution here
  let result = "";
  const space = "**********";
  const encodedWords = expr.split(space);

  const morseToSymbol = str => {
    return MORSE_TABLE[str] !== str ? MORSE_TABLE[str] : undefined;
  };

  const numbersToMorse = str => {
    let checkedStr = str;
    const dot = "10";
    const dash = "11";

    if (checkedStr.length % 2 !== 0) checkedStr += "0";

    const arrayOfSymbols = checkedStr.match(/.{1,2}/g);
    let newStr = "";

    arrayOfSymbols.forEach(item => {
      if (item === dot) {
        newStr += ".";
      } else if (item === dash) {
        newStr += "-";
      }
    });

    return newStr;
  };

  const morsedWords = encodedWords.map(word => {
    const arrOfWords = word.match(/.{1,10}/g);

    return arrOfWords.map(str => numbersToMorse(str));
  });

  const latinWords = morsedWords.map(word =>
    word.map(symbol => morseToSymbol(symbol))
  );

  result = latinWords.map(word => word.join("")).join(" ");

  return result;
}

module.exports = {
  decode
};
