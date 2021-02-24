let playerScore=0;
let computerScore=0;


const computerPlay=()=>{
    let i = Math.floor(Math.random()*3)
    return ["rock","paper","scissors"][i];
};

const playRound=(playerSelection,computerSelection)=>{
    if (playerSelection===computerSelection){
        console.log("It is a tie!");
        return;
    } 
    if(playerSelection==="rock"){
        if(computerSelection=="scissors"){
            console.log("You win the round! Rock beats Scissors")
            playerScore++;
            return;
        } else {
            console.log("You lose the round! Paper beats Rock")
            computerScore++;
            return;
        }
    }
    if(playerSelection==="paper"){
        if(computerSelection=="rock"){
            console.log("You win the round! Paper beats Rock")
            playerScore++;
            return;
        } else {
            console.log("You lose the round! Scissors beats Paper")
            computerScore++;
            return;
        }
    }
    if(playerSelection==="scissors"){
        if(computerSelection=="paper"){
            console.log("You win the round! Scissors beats Paper")
            playerScore++;
            return;
        } else {
            console.log("You lose the round! Rock beats Scissors")
            computerScore++;
            return;
        }
    }


    return "Invalid string";
};

//const playerSelection = window.prompt("Write in your move!(rock/paper/scissors)","rock").toLowerCase();
//const computerSelection = computerPlay();

const game=()=>{
    while (computerScore+playerScore<5){
        playRound(window.prompt("Write in your move!(rock/paper/scissors)","rock").toLowerCase(), computerPlay())
    }
    
    if(computerScore>playerScore) {
        console.log("You lost the match!");
        return "You lost the match!";
    } else {
        console.log("You won the match!");
        return "You won the match!";
    }
}

game()
//console.log(computerPlay())