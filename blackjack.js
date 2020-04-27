
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
    const sum = dealerHandPoints;
    console.log(sum);
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
    
    var playerCard = drawACard();
    var playerCardUrl = getCardPic(playerCard);
    const cardHit = document.createElement('img'); //created the holder
    cardHit.setAttribute('src', playerCardUrl);
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


