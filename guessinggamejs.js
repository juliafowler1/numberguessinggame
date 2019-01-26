"use strict";
//function that assigns random number to variable

//function randomNum
let randomNum = Math.floor((Math.random() * 10) + 1);
console.log(randomNum);


let guess = prompt("Guess a number between 1-10")


while (guess !== randomNum) {
    
    if (guess < randomNum)
    {
        guess = prompt("Nope, guess higher!"); 
    }
    else if (guess > randomNum) {
        guess = prompt("Wrong, guess lower.")
    }
    else if (guess == randomNum) {
        console.log("Nailed it!")
        break;
    }
}



