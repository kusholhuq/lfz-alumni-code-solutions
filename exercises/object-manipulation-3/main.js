console.log('Lodash is loaded:', typeof _ !== 'undefined');

const players = [
  {
    name: "Cloud",
    hand: []
  },
  {
    name: "Tifa",
    hand: []
  },
  {
    name: "Aeris",
    hand: []
  },
  {
    name: "Jessie",
    hand: []
  }
];

const valueKey = {
  2: 2,
  3: 3,
  4: 4,
  5: 5,
  6: 6,
  7: 7,
  8: 8,
  9: 9,
  10: 10,
  Jack: 10,
  Queen: 10,
  King: 5,
  Ace: 11
}


function createDeck(){
  const suits = ["clubs", "spades", "hearts", "diamonds"];
  const ranks = ['Ace', '2','3','4','5', '6', '7', '8', '9', '10', 'Jack', 'Queen', 'King'];
  const createdDeck = [];
  for(let i=0; i<ranks.length; i++){
    for(let b=0; b<suits.length; b++){
      const card = {
        rank: ranks[i],
        suit: suits[b]
      }
      createdDeck.push(card);
    }
  }
  return createdDeck;
}


function shuffle(){
  const shuffledDeck =[];
  const workingDeck = createDeck();
  while(workingDeck.length){
    let number = Math.floor(Math.random()*(workingDeck.length-1));
    let card = workingDeck.splice(number,1);
    shuffledDeck.push(card[0]);
  }

  return shuffledDeck;
}

function deal(deck, players, cardsPerHand){
  const workingPile = deck;

  for(let i=0; i<cardsPerHand; i++){
    for (let b = 0; b < players.length; b++) {
      let card = workingPile.splice(0, 1)
      players[b].hand.push(card[0]);
    }
  }
  console.log("Players: ", players);
}

function findWinner(players){
  let maxPoints = 0;
  let maxName = '';
  let maxIndex = 0;
  for(let i=0; i<players.length; i++){
    let card1 = players[i].hand[0].rank;
    let card2 = players[i].hand[1].rank;
    let playerPoints = valueKey[card1] + valueKey[card2];
    if(playerPoints > maxPoints){
      maxPoints = playerPoints;
      maxName = players[i].name;
      maxIndex = i;
    }
  }

  const winnersArray =[];
  for(let k=0; k<players.length; k++){
    let card1 = players[k].hand[0].rank;
    let card2 = players[k].hand[1].rank;
    let playerPoints = valueKey[card1] + valueKey[card2];
    if(playerPoints === maxPoints){
      winnersArray.push({
        name: players[k].name,
        hand: []
      })
    }
  }

  if(winnersArray.length>1){
    let winnersString = "";
    for(let i=0; i< winnersArray.length; i++){
      if(i===winnersArray.length-1){
        winnersString = winnersString + " and " + winnersArray[i].name;
        continue;
      }
      winnersString = winnersString+ " " + winnersArray[i].name +",";
    }
    console.log("It's a tie! Time for a tie breaker between:" +winnersString);
    runGame(winnersArray, 2);
  }
  if(winnersArray.length === 1){
    console.log(`${winnersArray[0].name} is the winner`)
  }
  return winnersArray;
}

function runGame(playerArray, cardsPerHand){

  const workingDeck = shuffle();
  deal(workingDeck, playerArray, cardsPerHand);
  const winners = findWinner(playerArray)
  return winners;
}

runGame(players, 2);
