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

let playerPoints = 0, computerPoints = 0;
const screenPoints = document.querySelectorAll('strong'); 
const hitButton = document.querySelector('#hit');
let screenPlayerPoints = document.querySelector('#player-cards');
let screenComputerPoints = document.querySelector('#computer-cards');
let cardImage = document.querySelector('img');

let stayButton = document.querySelector('#stay');


//computer logic
const computerPlays = (minimumPoints) => {
    do{
        //card hitted
        const card = hitCard();
        //add card to screen
        const screenCard = document.createElement('img');
        screenCard.src = `assets/cartas/${card}.png`;
        screenCard.classList.add('card');
        screenComputerPoints.append(screenCard);
        //sum points to player
        computerPoints += cardValue(card);
        screenPoints[1].innerText = computerPoints;
        if(minimumPoints > 21){
            break;
        }
    }while((computerPoints < minimumPoints) && (minimumPoints <= 21));
    setTimeout(() => {
        if(computerPoints === minimumPoints){
            alert("Empate!");
        }else if(minimumPoints > 21){
            alert("La computadora gana!");
        }else if(computerPoints > 21){
            alert("Has ganado!");
        }else{
            alert("Computadora gana!");
        }
    }, 100)


}

stayButton.addEventListener('click', () => {
    //block buttons
    hitButton.disabled = true;
    stayButton.disabled = true;
    computerPlays(playerPoints);
});


//events
hitButton.addEventListener('click', () => {
    //card hitted
    const card = hitCard();
    //add card to screen
    const screenCard = document.createElement('img');
    screenCard.src = `assets/cartas/${card}.png`;
    screenCard.classList.add('card');
    screenPlayerPoints.append(screenCard);
    //sum points to player
    playerPoints += cardValue(card);
    screenPoints[0].innerText = playerPoints;

    if(playerPoints > 21){
        hitButton.disabled = true;
        stayButton.disabled = true;
        console.warn('Demasiadas!');
        console.warn('La computadora gano!')
        hitButton.disabled = true;
        computerPlays();
    }else if(playerPoints === 21){
        hitButton.disabled = true;
        stayButton.disabled = true;
        console.assert('Conseguiste 21!');
        hitButton.disabled = true;
        computerPlays();
    }

});

const newGameButton = document.querySelector('#new-game');
newGameButton.addEventListener('click', () => {
    deck = [];
    createDeck();

    playerPoints = 0;
    computerPoints = 0;

    screenPlayerPoints.innerHTML = '';
    screenComputerPoints.innerHTML = '';
    screenPoints[0].innerText = playerPoints;
    screenPoints[1].innerText = computerPoints;

    hitButton.disabled = false;
    stayButton.disabled = false;
});



