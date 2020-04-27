
// var Deck 

// var kingOfHearts = [{point: 13, sutit 'hearts'}];
//     points: 13; 
//     suit: 'heart'


// var Deck = [
//     "spades",[
//         "points":
//     ], 
//     "hearts" [

//     ], 
//     "clubs" [

//     ], 
//     "diamonds"[

//     ]

// ]

//loop to create the cards

const spades = document.querySelector

function getDeck() {
    var suits = ['spades', 'diamonds', 'clubs', 'hearts'];
    var values = ['A', '2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K'];
    var deck = new Array();

    for (var i = 0; i < suits.length; i++) {
        for (var x = 0; x < values.length; x++) {
            var card = { Value: values[x], Suit: suits[i] };
            deck.push(card);
        }
    }
    return deck;
}
// var print = getDeck();
// console.log(print);


function shuffle() {

    var deck = getDeck();

    let m = deck.length, i;

    while (m) {
        i = Math.floor(Math.random() * m--);

        [deck[m], deck[i]] = [deck[i], deck[m]];
    }

    return deck;
}

// function drawTwoCard() {

//     var shuffledDeck = shuffle();
//     return shuffledDeck.pop();
// }

// var shuffledDeck = shuffle(print);
function drawACard() {

    var shuffledDeck = shuffle();
    return shuffledDeck.pop();
}
function drawACard2() {

    var shuffledDeck = shuffle();
    return shuffledDeck.pop();
}
function getCardPic(card) {
    var cardName = card.Value;
    var cardSuit;
    if (card.Suit === 'spades') {
        cardSuit = 'S';
    } else if (card.Suit === 'diamonds') {
        cardSuit = 'D';
    } else if (card.Suit === 'clubs') {
        cardSuit = 'C';
    } else if (card.Suit === 'hearts') {
        cardSuit = 'H';
    }
    return './image/' + cardName + cardSuit + '.jpg';

}


function calculatePoints() { 
    const dealerHandPoints = (drawACard[values]+drawACard2[values]);

    console.log(dealerHandPoints);
}

// function calculatePoints {

// }
// function getRandomCardFromDeck(print) {
//     for(var i = 0; i < print.length; i++) {
//         var pickedCard = print[Math.floor(Math.random()*print.length)]; //synthax to select random element in the array and return the element

//     }
// }

// var randomCard = getRandomCardFromDeck(print);
// console.log(randomCard);




// var aceOfSpades = { point: 1, suit: 'Spades' };
// var twoOfSpades = { point: 2, suit: 'Spades' };
// var threeOfSpades = { point: 3, suit: 'Spades' };
// var fourOfSpades = { point: 4, suit: 'Spades' };
// var fivOfSpades = { point: 5, suit: 'Spades' };
// var sixOfSpades = { point: 6, suit: 'Spades' };
// var sevenOfSpades = { point: 7, suit: 'Spades' };
// var eightOfSpades = { point: 8, suit: 'Spades' };
// var noneOfSpades = { point: 9, suit: 'Spades' };
// var tenOfSpades = { point: 10, suit: 'Spades' };
// var jackOfSpades = { point: 11, suit: 'Spades' };
// var queenOfSpades = { point: 12, suit: 'Spades' };
// var kingOfSpades = { point: 13, suit: 'Spades' };

// var aceOfHearts = { point: 1, suit: 'hearts' };
// var twoOfHearts = { point: 2, suit: 'hearts' };
// var threeOfHearts = { point: 3, suit: 'hearts' };
// var fourOfHearts = { point: 4, suit: 'hearts' };
// var fivOfHearts = { point: 5, suit: 'hearts' };
// var sixOfHearts = { point: 6, suit: 'hearts' };
// var sevenOfHearts = { point: 7, suit: 'hearts' };
// var eightOfHearts = { point: 8, suit: 'hearts' };
// var noneOfHearts = { point: 9, suit: 'hearts' };
// var tenOfHearts = { point: 10, suit: 'hearts' };
// var jackOfHearts = { point: 11, suit: 'hearts' };
// var queenOfHearts = { point: 12, suit: 'hearts' };
// var kingOfHearts = { point: 13, suit: 'hearts' };

// var aceOfClubs = { point: 1, suit: 'Clubs' };
// var twoOfClubs = { point: 2, suit: 'Clubs' };
// var threeOfClubs = { point: 3, suit: 'Clubs' };
// var fourOfClubs = { point: 4, suit: 'Clubs' };
// var fivOfClubs = { point: 5, suit: 'Clubs' };
// var sixOfClubs = { point: 6, suit: 'Clubs' };
// var sevenOfClubs = { point: 7, suit: 'Clubs' };
// var eightOfClubs = { point: 8, suit: 'Clubs' };
// var noneOfClubs = { point: 9, suit: 'Clubs' };
// var tenOfClubs = { point: 10, suit: 'Clubs' };
// var jackOfClubs = { point: 11, suit: 'Clubs' };
// var queenOfClubs = { point: 12, suit: 'Clubs' };
// var kingOfClubs = { point: 13, suit: 'Clubs' };

// var aceOfDiamonds = { point: 1, suit: 'Diamonds' };
// var twoOfDiamonds = { point: 2, suit: 'Diamonds' };
// var threeOfDiamonds = { point: 3, suit: 'Diamonds' };
// var fourOfDiamonds = { point: 4, suit: 'Diamonds' };
// var fivOfDiamonds = { point: 5, suit: 'Diamonds' };
// var sixOfDiamonds = { point: 6, suit: 'Diamonds' };
// var sevenOfDiamonds = { point: 7, suit: 'Diamonds' };
// var eightOfDiamonds = { point: 8, suit: 'Diamonds' };
// var noneOfDiamonds = { point: 9, suit: 'Diamonds' };
// var tenOfDiamonds = { point: 10, suit: 'Diamonds' };
// var jackOfDiamonds = { point: 11, suit: 'Diamonds' };
// var queenOfDiamonds = { point: 12, suit: 'Diamonds' };
// var kingOfDiamonds = { point: 13, suit: 'Diamonds' };






const dealBtn = document.querySelector("#deal-button"); //links the deal button
const dealerHand = document.querySelector("#dealer-hand"); //links the dealer hand 
const hitBtn = document.querySelector("#hit-button"); //links the hit button
const playerHand = document.querySelector("#player-hand"); //links the player hand

dealBtn.addEventListener('click', function () {

    var playerCard = drawACard();
    var playerCardUrl = getCardPic(playerCard);
    const playerNewCard = document.createElement('img'); //created the holder
    playerNewCard.setAttribute('src', playerCardUrl);
    playerHand.append(playerNewCard);

    var playerCard2 = drawACard2();
    var playerCardUrl2 = getCardPic(playerCard2);
    const playerNewCard2 = document.createElement('img'); //created the holder
    playerNewCard2.setAttribute('src', playerCardUrl2);
    playerHand.append(playerNewCard2);


    var dealCard = drawACard();
    const dealerNewCardUrl = getCardPic(dealCard);
    const dealerNewCard = document.createElement('img'); //holder for dealer card
    dealerNewCard.setAttribute('src', dealerNewCardUrl);
    dealerHand.append(dealerNewCard);
    var dealCard2 = drawACard2();
    //dealer 2nd card always back side up
    const dealerNewCardUrl2 = getCardPic(dealCard2);
    const dealerNewCard2 = document.createElement('img'); //holder for dealer card
    dealerNewCard2.setAttribute('src', dealerNewCardUrl2);
    dealerHand.append(dealerNewCard2);

})

hitBtn.addEventListener('click', function () {
    const cardHit = document.createElement('img'); //created the holder
    cardHit.setAttribute('src', './image/3C.jpg'); //set the card image to from the location
    playerHand.append(cardHit);

})

// const dealBtn = document.querySelector("#hit-button");

// dealBtn.addEventListener('click', function(){

//     alert('hit!!')
// })


// const dealBtn = document.querySelector("#stand-button");

// dealBtn.addEventListener('click', function(){

//     alert('I will Stand!')
// })


