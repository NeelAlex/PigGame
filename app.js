/*
GAME RULES
==========
1. there are two players.
2. Each turn a player can roll the dice as many times as he wants and the sum gets accumulated to his 'round score'.
3. note that if a player rolls 1, then his 'round score' will be lost. and the other player gets the next chance.
4. the player can also chose to 'hold' in which case, his 'round score' gets added to his 'global score' and its the other players turn.
5. the first player to obtain 100 'global score' wins.
*/

var scores, roundScore, activePlayer;
scores =[0, 0];
bestScore = [0, 0];
roundScore = 0;
activePlayer = 0;

function rollDice(){
    var dice = Math.ceil(Math.random()*6);
    roundScore+= dice;
    document.getElementById('current-' + activePlayer).textContent = roundScore;
    document.getElementById('dice').src = 'dice-'+ dice +'.png';
    // update best score
    if(roundScore > bestScore[activePlayer] && dice !== 1 ){
        bestScore[activePlayer] = roundScore;
        document.getElementById('best-' + activePlayer).textContent = roundScore;
    }
    var decidingScore = roundScore + scores[activePlayer];
    if( decidingScore == 100){
        updateScore();
    }
    if(decidingScore > 98){
      roundScore = roundScore - dice;
      updateScore();
    }
    if(dice === 1){
        document.getElementById('current-' + activePlayer).textContent = 0;
        togglePlayer();
        return;
    }


}

updateScore = ()=>{ // arrow function
    scores[activePlayer] +=roundScore;
    document.getElementById('score-' + activePlayer).textContent = scores[activePlayer];
    // player wins
    if(scores[activePlayer] == 100){
        document.getElementById('name-' + activePlayer).textContent = 'WINNER !';
        document.getElementById('dice').style.display = 'none';
        document.getElementById('player-' + activePlayer).classList.add('winner');
        return;
    }
    togglePlayer();
}

document.getElementById('btn-roll').addEventListener('click', rollDice); // callback function
document.getElementById('btn-hold').addEventListener('click', updateScore); // callback function

// toggle player on hold or on rolling 1.
function togglePlayer(){
    activePlayer = (activePlayer === 1) ? 0 : 1;
    roundScore = 0;
    document.getElementById('current-' + activePlayer).textContent = roundScore;
    document.getElementById('player-1').classList.toggle('active');
    document.getElementById('player-0').classList.toggle('active');
}

function newGame(){
  console.log(1);
  scores =[0, 0];
  bestScore = [0, 0];
  roundScore = 0;

  document.getElementById('score-0').textContent = scores[0];
  document.getElementById('score-1').textContent = scores[1];
  document.getElementById('current-0').textContent = 0;
  document.getElementById('current-1').textContent = 0;
  document.getElementById('best-0').textContent = 0;
  document.getElementById('best-1').textContent = 0;
  if(activePlayer == 1){
    togglePlayer();
  }

}
document.getElementById('btn-new').addEventListener('click', newGame);
// https://developer.mozilla.org/en-US/docs/Web/Events
