
let player = 200;
let cards =[]
let sum = 0
let hasBlackJack = false
let isAlive = false
let message = ""
let messageEl = document.getElementById("message-el")
let sumEl = document.getElementById("sum-el")
let cardsEl = document.getElementById("cards-el")
document.getElementById('player-el').innerHTML = `$${player}`;

function getRandomCard(){
    let randomNumber = Math.floor(Math.random()*13) + 1
    if(randomNumber > 10){
        return 10
    } else if( randomNumber === 1){
        return 11
    }else {
        return randomNumber
    }
}
function startGame(){
    
    document.getElementById('player-el').innerHTML = `$${player}`;
    isAlive = true
    let firstCard = getRandomCard()
    let secondCard = getRandomCard()
    cards = [firstCard, secondCard]
    sum = firstCard + secondCard
    renderGame()
}
function renderGame(){
    cardsEl.textContent ="Cards: "
    
    for(let i=0; i<cards.length; i++){
    cardsEl.textContent += cards[i] + " "
    }
    sumEl.textContent ="Sum: "+ sum
    if (sum <= 20) {
    message = "Do you want to draw a new card?";
} else if (sum === 21) {
    message = "You've got Blackjack!, You win. Congratulations!";
    startNewRound();
    setTimeout(startNewRound,1000);
    player +=200;
    document.getElementById('player-el').innerHTML = `$${player}`;
    hasBlackJack = true;
} else {
    message = "You're out of the game!, Game finished.";
    function startNewRound(){
        message ='Refresh the page to start a new round!';
        messageEl.textContent = message;
    }
    setTimeout(startNewRound,1000);
    player -=200;
    document.getElementById('player-el').innerHTML =`$${player}`;
    isAlive = false
}
    messageEl.textContent = message
}   

function newCard() {
    if( isAlive === true && hasBlackJack === false){
   let card = getRandomCard()
   sum += card
   cards.push(card)
   console.log(card)
   renderGame()
    }
}

function startNewRound(){
    message ='Refresh the page to start a new round';
    messageEl.textContent = message;
}
