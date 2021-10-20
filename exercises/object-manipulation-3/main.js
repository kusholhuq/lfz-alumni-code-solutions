console.log('Lodash is loaded:', typeof _ !== 'undefined');

//players

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

//deck

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


const newPile = [];

function shuffle(){
  const workingDeck = [...deck]
  while(workingDeck.length){
    let number = Math.floor(Math.random()*(workingDeck.length-1));
    let card = workingDeck.splice(number,1);
    newPile.push(card[0]);
  }
}

shuffle();
console.log("newPile: ", newPile);


function deal(){
  const workingPile = [...newPile]
  for(let b=0; b<players.length; b++){
    let card = workingPile.splice(0,1)
    players[b].hand.push(card[0]);
  }
  for (let c = 0; c < players.length; c++) {
    let card = workingPile.splice(0, 1)
    players[c].hand.push(card[0]);
  }
}
deal();
console.log("players:" ,players)

//deal two cards to each player
//draw from the top of the new pile
//(loop through the player array giving each 1 card)
//repeat the loop
