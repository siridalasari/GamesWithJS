function areCardsEqual(userGuessedCards) {

  userGuessedCards = stringIntoArray(userGuessedCards);
  //console.log(userGuessedCards === cardsToBeDisplay)
  //console.log(userGuessedCards.length,cardsToBeDisplay.length)
  //console.log(userGuessedCards, userGuessedCards.length, userGuessedCards[0], userGuessedCards[1], userGuessedCards[2], userGuessedCards[3]);
  if (cardsToBeDisplay.length !== userGuessedCards.length) {
   // console.log("hi")
    return false;
  }
  for (let index = 0; index < cardsToBeDisplay.length; index++) {
   // console.log(cardsToBeDisplay[index],userGuessedCards[index], cardsToBeDisplay[index] !== userGuessedCards[index])
    if (cardsToBeDisplay[index] !== userGuessedCards[index]) {
      return false;
    }
  }

  return true;
}