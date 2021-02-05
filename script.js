import Deck from './deck.js'


const CARD_VALUE_MAP = {
    "2":2,
    "3":3,
    "4":4,
    "5":5,
    "6":6,
    "7":7,
    "8":8,
    "9":9,
    "10":10,
    "J":11,
    "Q":12,
    "K":13,
    "A":14
}


const computerCardSlot = document.querySelector('.computer-card-slot')
const playerCardSlot = document.querySelector('.player-card-slot')
const compterDeckElement = document.querySelector('.computer-deck')
const playerDeckElement = document.querySelector('.player-deck')
const text = document.querySelector('.text')

let playerDeck, computerDeck,stop;
let inRound = false
document.addEventListener('click',()=>{
    if(stop){
        startGame()
        return
    }
if (inRound) {
    cleanBeforeRound()
}else{
    flipCards()
}
})


startGame()
function startGame(){

const deck = new Deck()
deck.shuffle()
const deckMidPoint = Math.ceil(deck.numberOfCards / 2)
playerDeck = new Deck (deck.cards.slice(0,deckMidPoint))
computerDeck = new Deck (deck.cards.slice(deckMidPoint, deck.numberOfCards))
inRound = false;
stop = false;
cleanBeforeRound()
}

function cleanBeforeRound(){
computerCardSlot.innerHTML = ''
playerCardSlot.innerHTML = ''
inRound = false;
text.innerHTML = ''

updateDeckCount()
}

function flipCards(){
    inRound = true;
    const playerCard = playerDeck.pop()
    const computerCard = computerDeck.pop()

    playerCardSlot.appendChild(playerCard.getHTML())
    computerCardSlot.appendChild(computerCard.getHTML())
    updateDeckCount()
    if (isRoundWinner(playerCard, computerCard)){
        text.innerText='WIN'
        playerDeck.push(playerCard)
        playerDeck.push(computerCard)
    }else if (isRoundWinner(computerCard, playerCard)){
        text.innerText='LOSE'
        computerDeck.push(playerCard)
        computerDeck.push(computerCard)
    } else{
        text.innerText='DRAW'
        playerDeck.push(playerCard)
        computerDeck.push(computerCard)
    }

    if(isGameOver(playerDeck)){
        text.innerText = 'YOU LOSE!!!'
        stop = true;
    } else if(isGameOver(computerrDeck)) {
        text.innerText = 'YOU WIN!!!'
        stop = true;
    }

}

function updateDeckCount(){
    compterDeckElement.innerHTML = computerDeck.numberOfCards
    playerDeckElement.innerHTML = playerDeck.numberOfCards
}

function isRoundWinner(cardOne,cardTwo){
    return CARD_VALUE_MAP[cardOne.value] > CARD_VALUE_MAP[cardTwo.value]
}


function isGameOver(deck){
    return deck.numberOfCards  === 0 
}

