/**
 * 2c = Two of Cubes
 * 2D = Two of Diamonds
 * 2H = Two of Hearts
 * 2S = Two of Spades
 */
let deck = []; 
const types = ['C', 'D', 'H', 'S'];
const letters = ['A', 'J', 'K', 'Q'];


const createDeck = () => {
    for(let i = 2; i <= 10; i++){
        for(let type of types){
            deck.push(i + type)            
        }
    }
    for(let letter of letters){
        for(let type of types){
            deck.push(letter + type);
        }
    }
    deck = _.shuffle(deck)
    console.log(deck);
}

createDeck();

const hitCard = () => {
    let card = deck.pop();
    if(deck.length === 0){
        throw 'No hay mas cartas en el zapato!';
    }
    return card;
    
}
const cardValue = (card) =>  {

    const value = card.substring(0, card.length-1);
    if(isNaN(value)){
        if(value === 'A'){
            return 11;
        }else{
            return 10;
        }
    }else{
        return value * 1;
    }
    
}

//events

const screenPoints = document.querySelectorAll('strong'); 
const hitButton = document.querySelector('#hit');
const screenPlayerPoints = document.querySelector('#player-cards');
let cardImage = document.querySelector('img');

let playerPoints = 0, computerPoints = 0;

hitButton.addEventListener('click', () => {
    //card hitted
    const card = hitCard();
    const screenCard = document.createElement('img');
    screenCard.src = `assets/cartas/${card}.png`;
    screenCard.classList.add('card');
    screenPlayerPoints.append(screenCard);
    // console.log(card);
    //new card to add to screen

    playerPoints += cardValue(card);
    screenPoints[0].innerText = playerPoints;

});







