const  SUITS = ["♠","♣","♥","♦"]
const VALUES =["A", "2","3","4","5","6","7","8","9","10","J","Q","K" ]

export default class Deck{
    constructor(cards = freshDeck()){
        this.cards = cards
    }

    get numberOfCards() {
        return this.cards.length
    }

    pop(){
    return this.cards.shift()
    }

    push(card){
        this.cards.push(card)
    } 

    shuffle() {
    for (let i = this.numberOfCards - 1; i > 0; i -- ){
       const newIndex = Math.floor(Math.random() * (i + 1 ))
        const oldValue = this.cards[newIndex]
        this.cards[newIndex] = this.cards[i]
        this.cards[i] = oldValue
    }}
}



class Card{
    constructor(suit, vaule) {
        this.suit = suit 
        this.value = vaule
    }
    get color() {
        return this.suit === '♣' || this.suit === '♠' ? 'black' : 'red'
    }
    
    
    //no need to say function because its inside of a class so it knows its a function
     getHTML(){
     const cardDiv = document.createElement('div')
     cardDiv.innerHTML = this.suit
     cardDiv.classList.add('card' , this.color)
     cardDiv.dataset.value=`${this.value} ${this.suit}`
        return cardDiv
    }
    
}

  //the html below is the same as the javascript above.
{/* <div class="card red" data-value="9 ♥">
                ♥
            </div> */}

function freshDeck() {
    return SUITS.flatMap(suit =>{
        return VALUES.map(vaule =>{
            return new Card(suit, vaule)
        })

    })
}