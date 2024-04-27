'use strict';

//score default
const score0 = document.querySelector('#score--0');
const score1 = document.querySelector('#score--1');
const dice = document.querySelector('.dice');
const btnNew = document.querySelector('.btn--new');
const btnRoll = document.querySelector('.btn--roll');
const btnHold = document.querySelector('.btn--hold');
const current0 = document.querySelector('#current--0');
const current1 = document.querySelector('#current--1');
const player0 = document.querySelector('.player--0');
const player1 = document.querySelector('.player--1');

//starting elements
let currentScore,activePlayer,playing,scores;
const init =  function() {
    score0.textContent=0;
    score1.textContent=0;
    current0.textContent=0;
    current1.textContent=0;
    player0.classList.remove('player--winner');
    player1.classList.remove('player-winner');
    player0.classList.add('player-active');
    player1.classList.remove('player-active');
    score0.textContent = 0;
    score1.textContent = 0;
     currentScore = 0;
     activePlayer = 0;
     playing =true;
     scores = [0,0];
    dice.classList.add('hidden');
    
}
    init();

const switchPlayer = function() {
    document.getElementById(`current--${activePlayer}`).textContent =0;
    currentScore = 0;
    activePlayer =  activePlayer === 0 ? 1 :0;
    player0.classList.toggle('player--active');
    player1.classList.toggle('player--active');

}

//dice throw
btnRoll.addEventListener('click',function() {
    if(playing) {
    //random dice
    const diceNum = Math.trunc(Math.random()*6)+1;
    //display dice
    dice.classList.remove('hidden');
    dice.src =`dice-${diceNum}.png`;

    //check condition
    if(diceNum !== 1) {
    //add dice to current score
    currentScore += diceNum; 
    document.getElementById(`current--${activePlayer}`).textContent = currentScore;
    
    }
    else {
    //switch to next player
    switchPlayer();
    }     }
})

btnHold.addEventListener('click', function() {
    if (playing) {
    //add current active player's score
    scores[activePlayer] += currentScore;
    document.getElementById(`score--${activePlayer}`).textContent = scores[activePlayer];
    //check condition of score
    if(scores[activePlayer] >=20 ) {
        dice.classList.add('hidden');
        playing = false;
        document.querySelector(`.player--${activePlayer}`).classList.add('player--winner');
        document.querySelector(`.player--${activePlayer}`).classList.remove('player--active');
    }
    else {
        switchPlayer();
    }
}
})

btnNew.addEventListener('click', init);