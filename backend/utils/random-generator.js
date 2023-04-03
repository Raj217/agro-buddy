class RandomGenerator {
  static _getRandomCharacter(useCharacter = false) {
    let nums = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
    let chars = [
      "A",
      "B",
      "C",
      "D",
      "E",
      "F",
      "G",
      "H",
      "I",
      "J",
      "K",
      "L",
      "M",
      "N",
      "O",
      "P",
      "Q",
      "R",
      "S",
      "T",
      "U",
      "V",
      "W",
      "X",
      "Y",
      "Z",
      "a",
      "b",
      "c",
      "d",
      "e",
      "f",
      "g",
      "h",
      "i",
      "j",
      "k",
      "l",
      "m",
      "n",
      "o",
      "p",
      "q",
      "r",
      "s",
      "t",
      "u",
      "v",
      "w",
      "x",
      "y",
      "z",
    ];
    let netArr = nums;
    if (useCharacter) {
      netArr = [...netArr, ...chars];
    }
    return netArr[Math.floor(Math.random() * netArr.length)];
  }
  static generate(len, useChar = false) {
    let otp = "";
    for (let i = 0; i < len; i++) {
      otp += RandomGenerator._getRandomCharacter(useChar);
    }
    return otp;
  }
}

export default RandomGenerator;
