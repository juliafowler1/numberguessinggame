"use strict";
//function that assigns random number to variable

//function randomNum
let randomNum = Math.floor((Math.random() * 10) + 1);
console.log(randomNum);


let guess = prompt("Guess a number between 1-10")


do {
//if guess is not equal to randomNum, this will keep running
//do while runs code before checking condition
//once guess is equal to randomNum and condition is false
//you break out of loop and console.log    
    if (guess < randomNum)
    {
        guess = prompt("Nope, guess higher!"); 
    }
    else if (guess > randomNum) {
        guess = prompt("Wrong, guess lower.")
    }

} while (guess != randomNum)
console.log("Nailed it!");



