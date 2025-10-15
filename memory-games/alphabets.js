function leftPadding(message, column = 127) {
  const emptyColunms = column - message.length;
  const leftPad = Math.floor(emptyColunms / 2) + message.length;

  return message.padStart(leftPad)
}

function alignCenterHorizontally(message, column = 127) {
  const leftPaddedMsg = leftPadding(message, column)
  return leftPaddedMsg.padEnd(column);
}

function delayTime(seconds) {

  for (let secCount = 0; secCount < seconds; secCount++) {
    let timeCount = [];
    for (let count = 0; count < 5000000; count++) {
      timeCount.push(count);
    }
  }

}

const letterA = [
  ["     **     "],
  ["    *  *    "],
  ["   ******   "],
  ["  *      *  "],
  [" *        * "]
]
const letterB = [
  ["  * * * **  "],
  ["  *       * "],
  ["  * * ****  "],
  ["  *       * "],
  ["  * * * **  "]
]
const letterC = [
  ["   ** * * * "],
  ["  *         "],
  ["  *         "],
  ["  *         "],
  ["   ** * * * "]
]

const word = [
  [letterA[0] + letterB[0] + letterC[0]],
  [letterA[1] + letterB[1] + letterC[1]],
  [letterA[2] + letterB[2] + letterC[2]],
  [letterA[3] + letterB[3] + letterC[3]],
  [letterA[4] + letterB[4] + letterC[4]],
]

function showWord() {
  console.clear();
  console.log("\n".repeat(8));
  for (let index = 0; index < word.length; index++) {
    console.log("" + word[index]);
    delayTime(5);
  }
}

function showWordFast(length) {
  console.log("\n".repeat(8));
  for (let index = 0; index < length; index++) {
    console.log("" + word[index]);
  }
  delayTime(5);

}

const petals = ["☼", ".", "○", "`", "•", "✦", "▪", "☘︎", "`", "`", ".",]
const scatterStore = [];
function removeBottomLine() {

  console.log("\n".repeat(8));
  for (let index = word.length - 1; index >= 0; index--) {
    console.clear();
    showWordFast(index);
    scatterStore.push(scatter());
    console.log(scatterStore.join("\n"));
    delayTime(5);
  }

}

showWord();
showWordFast();
removeBottomLine();



function random() {
  return ((Math.floor(Math.random() * 10)));
}

function scatter() {
  const line = [];
  for (let count = 0; count <= 5; count++) {
    line.push(petals[random()]);
  line.push(" ".repeat(random()))}
  console.log(line.join(" "))
}