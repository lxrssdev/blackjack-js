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
    if(deck.length === 0){
        throw 'No hay mas cartas en el zapato!';
    }
    return deck.pop();
    
}








