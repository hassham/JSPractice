// random number between 0 and 1
let randomNumber = Math.random(); 
// multiply by 10 to obtain a number between 0 and 10
randomNumber = randomNumber * 5;
// removes digits past decimal place to provide a whole number
randomNumber = Math.floor(randomNumber);

console.log(randomNumber);