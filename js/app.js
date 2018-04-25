// declare variables for board of cards
const board = document.querySelector(".deck");

// list of all cards
let allCards = document.getElementsByClassName("card");

// array initialized to allCards
let cards = [...allCards];

// moves 
let moves = 0;

// access the class
let count = document.querySelector(".moves");

// add stars to array for stars
let starCount = document.querySelectorAll(".fa-star");

// counts number of cards matched
let matchedCards = 0;

// access the timer
let timer = document.querySelector(".timer");
// declare variables for timer
let second = 0;
let minute = 0;
let hour = 0;
let time;

// open cards array
let openCards = [];

// allow card clicks to be disabled during animations
let isAnimating = true;

// stars list
let stars = document.querySelectorAll(".stars li");

// stats for final time
let finalTime = document.querySelector(".final-time");

// stats for moves
let finalMoves = document.querySelector(".total-moves");

// stats for stars 
let finalStars = document.querySelector(".final-stars");

// access the congratulation popup/ succes box
let successBox = document.getElementById("myModal");

// close the congratulation popup/ succes box
let closeBox = document.querySelector(".close");

// shuffle and display cards when game is loaded
document.body.onload = startGame();

// Shuffle function from http://stackoverflow.com/a/2450976
function shuffle(array) {
    var currentIndex = array.length, temporaryValue, randomIndex;

    while (currentIndex !== 0) {
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex -= 1;
        temporaryValue = array[currentIndex];
        array[currentIndex] = array[randomIndex];
        array[randomIndex] = temporaryValue;
    }

    return array;
}

// memory game description
function myFunction() {
	alert('This is Memory Game. Flip over two hidden cards at a time to locate the ones that match! GOOD LUCK!')
}

// calls the shuffle function and displays cards in the board
function startGame() {
	
	myFunction();
	cards = shuffle(cards);
	let tempHolder = [];
	for (let i = 0; i < cards.length; i++) {
		board.innerHTML = "";
		tempHolder.forEach.call(cards, function(item) {
			board.appendChild(item);
			});
			cards[i].classList.remove("show", "open", "match", "unmatched", "disabled");
			}
			moves = 0;
			matchedCards = 0;
			count.innerHTML = 0;
			
			for (let i = 0; i < starCount.length; i++) {
				starCount[i].style.visibility = "visible";
				}
				
				// timer
				clearInterval(time);
				hour = 0;
				minute= 0;
				second = 0;
				timer.innerHTML = hour + " hours " + minute + " mins " + second + " secs";
				finalTime.innerHTML = "";
				finalMoves.innerHTML = "";
				finalStars.innerHTML = "";
				openCards = [];
				isAnimating = false;
				successBox.classList.remove("show");
}

// add to open and match cards
let openCard = function() {
	if (isAnimating)
		return;
	this.classList.toggle("open");
	this.classList.toggle("show");
	this.classList.toggle("disabled");
	openCards.push(this);
	let cardCount = openCards.length;
	if (cardCount === 2) {
		movesCounter();
		if (openCards[0].firstElementChild.className === openCards[1].firstElementChild.className) {
			matchedCards++;
			for (let i = 0; i < 2; i++) {
				openCards[i].classList.add("match");
				openCards[i].classList.remove("show", "open");
				}
				openCards = [];
				} else {
					unmatched();
					}
				}
				finishedGame();				
}

// when cards are unmatched
function unmatched() {
	isAnimating = true;
	for (let i = 0; i < 2; i++) {
		openCards[i].classList.add("unmatched");
		}
		setTimeout(function() {
			isAnimating = false;
			for (let i = 0; i < openCards.length; i++) {
				openCards[i].classList.remove("show", "open", "unmatched", "disabled");
				}
				openCards = [];
				}, 1000);				
}

// counts moves and changes stars counter
function movesCounter() {
	moves ++;
	count.innerHTML = moves;
	
	// starts timer on the first move
	if (moves == 1) {
		hour = 0;
		minute = 0;
		second = 0;
		gameTimer();
	}
	
	// stars counter
	if (moves > 8 && moves < 13) {
		for (i = 0; i < 3; i++) {
			if (i > 1) {
				starCount[i].style.visibility = "collapse";
			}
		}
	}
	if (moves > 14) {
		for (i = 0; i < 3; i++) {
			if (i > 0) {
				starCount[i].style.visibility = "collapse";
			}
		}
	}	
}
	
// add timer
function gameTimer() {
	time = setInterval(function() {
		timer.innerHTML = hour + " hours " + minute + " mins " + second + " secs";
		second ++;
		
		if (second == 60) {
			minute ++;
			second =0;
			}
			if (minute == 60) {
				hour++;
				minute = 0;
				}
			}, 1000);		
}

// success box is displayed when all cards are uncovered/ game is finished
function finishedGame() {
	if (matchedCards === 8) {
		clearInterval(time);
		var starRating = document.querySelector(".stars").innerHTML;
		finalTime.innerHTML = timer.innerHTML;
		finalMoves.innerHTML = count.innerHTML;
		finalStars.innerHTML = starRating;
		successBox.classList.add("show");
		// closing success dialogue box 
		closeSuccessBox();
		}
}

// close success box when clicking on icon
function closeSuccessBox() {
	closeBox.addEventListener("click", function() {
		successBox.classList.remove("show");
		startGame();
	});
}

// click play-again button to play the game again
function playAgain() {
	successBox.classList.remove("show");
		startGame();
}

// loop through the cards and add event listeners
for (let i = 0; i < cards.length; i++) {
	allCards = cards[i];
	allCards.addEventListener("click", openCard);	
}

