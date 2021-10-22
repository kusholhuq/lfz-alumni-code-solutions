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
const deck = [
  {
    rank: 'Ace',
    suit: 'clubs'
  },
  {
    rank: '2',
    suit: 'clubs'
  },
  {
    rank: '3',
    suit: 'clubs'
  },
  {
    rank: '4',
    suit: 'clubs'
  },
  {
    rank: '5',
    suit: 'clubs'
  },
  {
    rank: '6',
    suit: 'clubs'
  },
  {
    rank: '7',
    suit: 'clubs'
  },
  {
    rank: '8',
    suit: 'clubs'
  },
  {
    rank: '9',
    suit: 'clubs'
  },
  {
    rank: '10',
    suit: 'clubs'
  },
  {
    rank: 'Jack',
    suit: 'clubs'
  },
  {
    rank: 'Queen',
    suit: 'clubs'
  },
  {
    rank: 'King',
    suit: 'clubs'
  },
  {
    rank: 'Ace',
    suit: 'spades'
  },
  {
    rank: '2',
    suit: 'spades'
  },
  {
    rank: '3',
    suit: 'spades'
  },
  {
    rank: '4',
    suit: 'spades'
  },
  {
    rank: '5',
    suit: 'spades'
  },
  {
    rank: '6',
    suit: 'spades'
  },
  {
    rank: '7',
    suit: 'spades'
  },
  {
    rank: '8',
    suit: 'spades'
  },
  {
    rank: '9',
    suit: 'spades'
  },
  {
    rank: '10',
    suit: 'spades'
  },
  {
    rank: 'Jack',
    suit: 'spades'
  },
  {
    rank: 'Queen',
    suit: 'spades'
  },
  {
    rank: 'King',
    suit: 'spades'
  },
  {
    rank: 'Ace',
    suit: 'hearts'
  },
  {
    rank: '2',
    suit: 'hearts'
  },
  {
    rank: '3',
    suit: 'hearts'
  },
  {
    rank: '4',
    suit: 'hearts'
  },
  {
    rank: '5',
    suit: 'hearts'
  },
  {
    rank: '6',
    suit: 'hearts'
  },
  {
    rank: '7',
    suit: 'hearts'
  },
  {
    rank: '8',
    suit: 'hearts'
  },
  {
    rank: '9',
    suit: 'hearts'
  },
  {
    rank: '10',
    suit: 'hearts'
  },
  {
    rank: 'Jack',
    suit: 'hearts'
  },
  {
    rank: 'Queen',
    suit: 'hearts'
  },
  {
    rank: 'King',
    suit: 'hearts'
  },
  {
    rank: 'Ace',
    suit: 'diamonds'
  },
  {
    rank: '2',
    suit: 'diamonds'
  },
  {
    rank: '3',
    suit: 'diamonds'
  },
  {
    rank: '4',
    suit: 'diamonds'
  },
  {
    rank: '5',
    suit: 'diamonds'
  },
  {
    rank: '6',
    suit: 'diamonds'
  },
  {
    rank: '7',
    suit: 'diamonds'
  },
  {
    rank: '8',
    suit: 'diamonds'
  },
  {
    rank: '9',
    suit: 'diamonds'
  },
  {
    rank: '10',
    suit: 'diamonds'
  },
  {
    rank: 'Jack',
    suit: 'diamonds'
  },
  {
    rank: 'Queen',
    suit: 'diamonds'
  },
  {
    rank: 'King',
    suit: 'diamonds'
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

const newPile = [];

function shuffle(){
  const shuffledDeck =[];
  const workingDeck = [...deck]
  while(workingDeck.length){
    let number = Math.floor(Math.random()*(workingDeck.length-1));
    let card = workingDeck.splice(number,1);
    // newPile.push(card[0]);
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
