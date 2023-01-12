 /* Game Rules:
 -There are 2 players. Each player can roll the dice how many ever times they want. 
 -Each result will add up to their ROUND score.
 -BUT, if the player rolls a 1, all his ROUND score gets lost. After that, it's the next player's turn.AfterThe player can choose to 'Hold', which means that his ROUND score gets added to his GLBAL score. After that, it's the next player's turn
 -The player can choose to 'Hold', which means that his ROUND score gets added to his GLBAL score. After that, it's the next player's turn
 -The first player to reach 100 points on GLOBAL score wins the game.
 */
var scores, roundScore, activePlayer, gamePlaying;

scores = [0,0];
roundScore = 0;
activePlayer = 0;

document.querySelector('.dice').style.display = 'none';


document.querySelector('.btn-roll').addEventListener('click', function(){
    
    //1. Random number
    dice = Math.floor(Math.random() * 6) + 1;

    //2. Display the result
    var diceDOM = document.querySelector('.dice');
    document.querySelector('.dice').style.display = 'block';
    diceDOM.src = 'dice-' + dice + '.png';

    //3. Update the round score IF the rolled number was NOT a 1

});




//document.querySelector('#current-' + activePlayer).tectContent = dice;
// document.querySelector('#current-' + activePlayer).innerHTML = '<em>' + dice + '</em>';
//var x = document.querySelector('#score-0').textContent;