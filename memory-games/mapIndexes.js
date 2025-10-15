const letterA = [
  ["     *     "],
  ["    * *    "],
  ["   *****   "],
  ["  *     *  "],
  [" *       * "]
];
const letterB = [
  [" * * * **  "],
  [" *       * "],
  [" * * ****  "],
  [" *       * "],
  [" * * * **  "]
];
const letterC = [
  ["  ** * * * "],
  [" *         "],
  [" *         "],
  [" *         "],
  ["  ** * * * "]
];

const alphaArray = [letterA, letterB, letterC];

function mapIndex(letter) {
  const alphaStr = "ABC";
  const index = alphaStr.indexOf(letter)
  return index;
}

function createStarBlockName(letterIndexes) {
  let word = [];

  for (let rowIndex = 0; rowIndex <= 5; rowIndex++) {
    let line = [];
    for (let index = 0; index < letterIndexes.length; index++) {
      line.push(alphaArray[letterIndexes[index]][rowIndex]);
    }
    word.push(line.join(" "))
  }
  console.log(word.join("\n"))
}

function findIndices(name) {
  let letterIndexes = [];
  for (let index = 0; index < name.length; index++) {
    letterIndexes.push(mapIndex(name[index]));
  }

  createStarBlockName(letterIndexes);
}

function takeUserInput() {
  const givenName = prompt("Enter Name: ");
  const nameInUpperCase = givenName.toUpperCase()

  findIndices(nameInUpperCase);
}

takeUserInput();