/* 
Larger or Smaller?
Usage: Use simple conditional statements
*/

let num1 = parseInt(prompt('Enter first Number'));
let num2 = parseInt(prompt('Enter second Number'));
console.log(`First number : ${num1}\nSecond number : ${num2}`);

if (isNaN(num1) || isNaN(num2)) {
    document.write('You need to enter a valid value. Hit refresh and try again!');
} else if (num1 === num2) {
    document.write(`Number is : ${num1}<br>Both numbers are equal.`);
} else if (num1 > num2) {
    document.write(`Largest number is : ${num1}.`);
} else {
    document.write(`Largest number is : ${num2}.`);
}