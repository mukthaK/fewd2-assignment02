/*
The “Grade Assigner” Application
Usage: Use else if statements
*/

let score = prompt('Enter a number between 0 ans 100');

if (isNaN(score))
    alert('Enter a valid number. Hit refresh and try again');
else {
    score = parseInt(score);
    if (score < 0 || score > 100) {
        alert('Enter a valid number. Hit refresh and try again');
    } else {
        if (score >= 90 && score <= 100) {
            console.log('You received A');
        } else if (score >= 80 && score <= 89) {
            console.log('You received B');
        } else if (score >= 70 && score <= 79) {
            console.log('You received C');
        } else if (score >= 60 && score <= 69) {
            console.log('You received D');
        } else {
            console.log('You received F');
        }
    }
}

