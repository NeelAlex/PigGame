var scores, roundScore, activePlayer;

scores = [0, 0];
roundScore = 0;
activePlayer = 0;


document.querySelector('.dice').style.display =  'none';

document.getElementById('score-0').textContent = '0';
document.getElementById('score-1').textContent = '0';
document.getElementById('current-0').textContent = '0';
document.getElementById('current-1').textContent = '0';

document.querySelector('.btn-roll').addEventListener('click', function (){
    // 1. Random number.
    var dice=Math.ceil(Math.random()*6);

    // 2. Display the result.
    var diceDom = document.querySelector('.dice');
    diceDom.style.display = 'block';
    diceDom.src = 'dice-' + dice + '.png';
    
    document.querySelector('#current-' + activePlayer).textContent = dice;
    
    // 3. Update the round score if (dice != 1).
    var x = Number(document.querySelector('#score-' + activePlayer).textContent);
    document.querySelector('#score-' + activePlayer).textContent =  x + dice;
});
// https://developer.mozilla.org/en-US/docs/Web/Events