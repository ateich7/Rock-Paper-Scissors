function getComputerChoice() {                     //create function to get computer choice, no params
    let rando = Math.random();                     // create variable named rando, initialize it with result of random number generator from 0 to 1
    if (rando < .33) {                             // create conditional statement
        return "Rock"                              //   if rando is less than .33 return Rock
    } else if (rando > .33 && rando < .66) {
        return "Paper"                             //   if rando is above .33 AND less than .66 return Paper
    } else {
        return "Scissors"                          //   if rando isn't either Rock or Paper, return Scissors
    }
}

function getHumanChoice() {                                // create function named getHumanChoice
    return prompt("Enter Rock, Paper or Scissors", "")    //  return the result of a prompt where we ask user their choice
}



function playGame() {   // create function named playGame

    let humanScore = 0;  // create non-pconstant variable named humanScore, initialize it with 0
    let compScore = 0;   // create non-constant variable named computerScore, initialize it with 0
    let roundNum = 1;

    function playRound() {                            // create function called playRound, define 2 params, humanChoice and computerChoice

        let huChoPre = getHumanChoice();                                                              // initialize humanChoice with getHumanChoice result, make sure the variable is case-insensitive
        let humanChoice = huChoPre.charAt(0).toUpperCase() + huChoPre.slice(1).toLowerCase();
        let compChoice = getComputerChoice();   // initialize computerChoice with getComputerChoice result
        
        console.log("");
        console.log("Round " + roundNum);
        ++roundNum;
        console.log("You: " + humanChoice);     // printing human choice for now (will remove later)
        console.log("CPU: " + compChoice);

        if (humanChoice == "Rock" && compChoice == "Paper") {                  //      create conditional statement to determine the roundResult
            console.log("You Lose...")
            ++compScore;                                   //              if human Rock, comp Paper, set roundResult to comp
        } else if (humanChoice == "Rock" && compChoice == "Scissors") {
            console.log("You Win!")
            ++humanScore;                                       //              if human Rock, comp Scissors, set roundResult to human
        } else if (humanChoice == "Rock" && compChoice == "Rock") {
            console.log("It's a Tie")                                          //              if human Rock, comp Rock, set roundResult to tie
        } else if (humanChoice == "Paper" && compChoice == "Paper") {
            console.log("It's a Tie")                                       //              if human Paper, comp Paper, set roundResult to tie
        } else if (humanChoice == "Paper" && compChoice == "Scissors") {
            console.log("You Lose...")
            ++compScore;                                        //              if human Paper, comp Scissors, set roundResult to comp
        } else if (humanChoice == "Paper" && compChoice == "Rock") {
            console.log("You Win!")
            ++humanScore;                                           //              if human Paper, comp Rock, set roundResult to human
        } else if (humanChoice == "Scissors" && compChoice == "Paper") {
            console.log("You Win!")
            ++humanScore;                                          //              if human Scissors, comp Paper, set roundResult to human
        } else if (humanChoice == "Scissors" && compChoice == "Scissors") {
            console.log("It's a Tie")                                           //              if human Scissors, comp Scissors, set roundResult to tie
        } else {
            console.log("You Lose...")
            ++compScore;                                      //              if human Scissors, comp Rock, set roundResult to comp
        }

        console.log("You: " + humanScore);
        console.log("CPU: " + compScore);
    }

    playRound();   //      call playGame 5 times
    playRound();
    playRound();
    playRound();
    playRound();
    console.log("");
    console.log("");
    displayWinner();   // declare winner of game

    function displayWinner() {  // create function to display winner
        if (humanScore > compScore) {
            console.log("You Win the Game!")
        } else if (humanScore == compScore){
            console.log("The Game is a Tie")
        } else (
            console.log("You Lose the Game...")
        )
    }
}

playGame();