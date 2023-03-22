function game(){ 
    function playRound(getPlayerChoice, getComputerChoice){
    if (getPlayerChoice===getComputerChoice){
        return "It's a Draw!";
    } else if (getPlayerChoice== "rock" && getComputerChoice=="scissor"){
        return "You Won! Rock breaks scissor";
    } else if (getPlayerChoice== "scissor" && getComputerChoice=="paper"){
        return "You Won! Scissor cuts Paper";
    } else if (getPlayerChoice== "paper" && getComputerChoice=="rock"){
        return "You Won! Paper covers Rock";
    } else{
        return "You lost";
    }
}
function computerPlay(){
    const randomNumber = (Math.floor(Math.random() *3))
        if (randomNumber === 0){
            return "rock";
        } else if (randomNumber === 1){
            return "paper";
        } else if (randomNumber === 2){
            return "scissor";
        }
       
}
function replay(choice){
    if (choice=="y"){
        const playerSelection = prompt("Pick rock, paper or scissor").toLowerCase();
        const computerSelection = computerPlay();
        console.log(playRound(playerSelection, computerSelection));
        const play = prompt("Do you want to play again? (y/n)")
    } else if (choice=="n"){
        console.log("Thank you for playing");
    }
}

const playerSelection = prompt("Pick rock, paper or scissor").toLowerCase();
const computerSelection = computerPlay();
console.log(playRound(playerSelection, computerSelection));
const play = prompt("Do you want to play again? (y/n)")
replay(play);
}
game();

