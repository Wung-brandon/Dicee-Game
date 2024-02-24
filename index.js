let rollBtn = document.getElementById("roll")


function rollDice(){
    let randomNumber1 = Math.floor(Math.random() * 6) + 1;
// console.log("player 1: ", randomNumber1);

let diceNumber1 = "dice" + randomNumber1 + ".png";
// console.log("player 1: ", diceNumber1);

let randomImageSource1 = "images/" + diceNumber1;
// console.log("player 1: ", randomImageSource1);

let diceImage1 = document.querySelectorAll("img")[0].setAttribute("src", randomImageSource1);


let randomNumber2 = Math.floor(Math.random() * 6) + 1;
// console.log("player 2: ", randomNumber2);

let diceNumber2 = "dice" + randomNumber2 + ".png";
// console.log("player 2: ", diceNumber2);

let randomImageSource2 = "images/" + diceNumber2;
// console.log("player 2: ", randomImageSource2);

let diceImage2 = document.querySelectorAll("img")[1].setAttribute("src", randomImageSource2);


let whoWins = document.querySelector("h1")
if (randomNumber1 > randomNumber2){
    whoWins.textContent = "Player 1 Wins!"
}
else if (randomNumber1 < randomNumber2){
    whoWins.textContent = "Player 2 Wins!"
}
else{
    whoWins.textContent = "Draw!"
}

}


rollBtn.addEventListener("click", rollDice)