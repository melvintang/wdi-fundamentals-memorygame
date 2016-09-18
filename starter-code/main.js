


//var cardOne = 'queen';
//var cardTwo = 'queen';
//var cardThree = 'king';
//var cardFour = 'king';

//if (cardOne === cardTwo) {
//	alert('You found a match!');
//} else {
//  alert('Sorry, try again.');
//}


// Get an element with the id of game-board and set it to a variable.
var board = document.getElementById('game-board');

// represents the cards of the game as a list. Each card is a data string.
var cards = ['queen', 'queen', 'king', 'king'];

// represents the cards in play
var cardsInPlay = [];

function createBoard() {
  // loop through your cards array to create card elements for your board
  for (var i=0; i<cards.length; i++) {
    // create a div element which will be used as a card
    var cardElement = document.createElement('div');
    // add a class to the card element which will help link styling
    cardElement.className = 'card';
		// this will set the card's 'data-card' to be the element of the array
    // data- attributes are meant to store data about an element that is not tied to a style.
    // i.e. "king"
    // Inputs = : 'data-card' attribute for the tag, attribute content = eg. 'queen'.
    cardElement.setAttribute('data-card', cards[i]);
		// Event-handling: when a card is clicked the function isTwoCards will be executed
    cardElement.addEventListener('click', isTwoCards);

    // Set the parent-child relionship to show where cards lie: append the card to the board
    board.appendChild(cardElement);
    board.appendChild(cardElement);
  }

}

//checks to see if there are cards in play
function isTwoCards() {
  // add card to array of cards being viewed
  // 'this' is not covered in the pre-work but
  // for now, just know it gives you access to the **cardElement** you click on
  // this.getAttribute('data-card') == data string
  cardsInPlay.push(this.getAttribute('data-card'));
	// show the card's image
	console.log(this.getAttribute('data-card'));
	if (this.getAttribute('data-card') === 'king') {
		this.innerHTML = "<img src='http://i.imgur.com/bnuv5Im.png'>"; // king
	} else {
		this.innerHTML = "<img src='http://i.imgur.com/v6buNt2.png'>"; //queen
	}
  // if you have two cards in play check for a match
  if (cardsInPlay.length === 2) {
    // pass the cardsInPlay as an argument to isMatch function
    isMatch(cardsInPlay);
    // clear cards in play array for next try
    cardsInPlay = [];
  }
}

function isMatch(cardsInPlay) {
  // alert winning message
  if (cardsInPlay[0] === cardsInPlay[1]) {
    alert("You found a match!");
  }

  else {
    alert("Sorry, try again.");

  }
}

createBoard();
