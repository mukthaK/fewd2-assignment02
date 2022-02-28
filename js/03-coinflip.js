/*
The “Coin Flip” Game
Usage: Use nested conditional statements
*/

let coinFlip = Math.round(Math.random()); 
let choice = prompt('Heads or Tails ??');
let headOrTail;
console.log(coinFlip, choice);

if (coinFlip < 1)
    headOrTail = 'heads';
else
    headOrTail = 'tails';

if (headOrTail === 'heads') {
    if (choice === 'heads') {
        alert('The flip was heads and you chose heads...you win!');
    } else {
        alert('The flip was heads but you chose tails...you lose!');
    }
} else if (headOrTail === 'tails') {
    if (choice === 'heads') {
        alert('The flip was tails but you chose heads...you lose!');
    } else {
        alert('The flip was tails and you chose tails...you win!');
    } 
}
