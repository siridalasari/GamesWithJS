let cards = ["❤️", "😍", "🤬", "🎀", "⭐️", "🤮", "🤡", "🥶", "❤️", "😍", "🤬", "🎀", "⭐️", "🤮", "🤡", "🥶"];
let hideCards = ["⬜️", "⬜️", "⬜️", "⬜️", "⬜️", "⬜️", "⬜️", "⬜️", "⬜️", "⬜️", "⬜️", "⬜️", "⬜️", "⬜️", "⬜️", "⬜️"];
let cardNumbers = [" 1", " 2", " 3", " 4", " 5", " 6", " 7", " 8", " 9", "10", "11", "12", "13", "14", "15", "16"]

function delayTime(seconds) {

  for (let secCount = 0; secCount < seconds; secCount++) {
    let timeCount = [];
    for (let count = 0; count < 5000000; count++) {
      timeCount.push(count);
    }
  }
}

function leftPadding(message, column = 127) {
  const emptyColunms = column - message.length;
  const leftPad = Math.floor(emptyColunms / 2) + message.length;

  return message.padStart(leftPad)
}

function alignCenterHorizontally(message, column = 127) {

  const leftPaddedMsg = leftPadding(message, column)
  //console.log(column,message, message.length, emptyColunms, leftPad)
  return leftPaddedMsg.padEnd(column);
}

function random() {
  return Math.floor(Math.random() * 10);
}

function swapCards(card1Index, card2Index) {
  let container = cards[card1Index];
  cards[card1Index] = cards[card2Index];
  cards[card2Index] = container;
}

function areSame(card1, card2) {

  console.log("\n".repeat(15));
  if (hideCards[card1] !== hideCards[card2]) {
    hideCards[card1] = "⬜️";
    hideCards[card2] = "⬜️";
  }
  console.clear();
  console.log("\n".repeat(15));
  console.log(alignCenterHorizontally(hideCards.join("  ")));
  console.log(alignCenterHorizontally(cardNumbers.join("  ")));
  console.log("\n\n\n")
  revealCards();
}


function revealCards() {
  console.log("\n\n\n");
  const card1 = (prompt(leftPadding("Card1_No: "))) - 1;
  const card2 = (prompt(leftPadding("Card2_No: "))) - 1;
  console.clear();
  hideCards[card1] = cards[card1];
  hideCards[card2] = cards[card2];
  console.log("\n".repeat(15));
  console.log(alignCenterHorizontally(hideCards.join("  ")));
  console.log(alignCenterHorizontally(cardNumbers.join("  ")));
  delayTime(5);
  areSame(card1, card2);
}

function displayCards() {
  console.clear();
  console.log("\n".repeat(15));
  console.log(alignCenterHorizontally(hideCards.join("  ")));
  console.log(alignCenterHorizontally(cardNumbers.join("  ")));
  revealCards();
}

function suffelCards() {

  for (let suffelCount = 0; suffelCount < 1000; suffelCount++) {
    let suffelCard = random();
    swapCards(suffelCard, Math.abs(15 - suffelCard));
  }
  displayCards();
}

suffelCards();
