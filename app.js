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

    const container = document.querySelector("#contain");
    const rock = document.getElementById("rock");
    const paper = document.getElementById("paper");
    const scissors = document.getElementById("scissors");
    const scoreDisplay = document.getElementById("scoreDisplay");
    const roundLog = document.getElementById("roundLog");
    const huCho = document.getElementById("huCho");
    const coCho = document.getElementById("coCho");
    const roundResult = document.getElementById("roundResult");


    rock.addEventListener("click", () => playRound("Rock"));
    paper.addEventListener("click", () => playRound("Paper"));
    scissors.addEventListener("click", () => playRound("Scissors"));

    function playRound(humanChoice) {                            // create function called playRound, define 2 params, humanChoice and computerChoice
        let compChoice = getComputerChoice();   // initialize computerChoice with getComputerChoice result

        roundLog.textContent = `Round ${roundNum}`;
        huCho.textContent = `You: ${humanChoice}`; 
        coCho.textContent = `CPU: ${compChoice}`;
        ++roundNum;
        console.log("You: " + humanChoice);     // printing human choice for now (will remove later)
        console.log("CPU: " + compChoice);

        if (humanChoice == "Rock" && compChoice == "Paper") {                  //      create conditional statement to determine the roundResult
            roundResult.textContent = "You Lose..."
            ++compScore;                                   //              if human Rock, comp Paper, set roundResult to comp
        } else if (humanChoice == "Rock" && compChoice == "Scissors") {
            roundResult.textContent = "You Win!" 
            ++humanScore;                                       //              if human Rock, comp Scissors, set roundResult to human
        } else if (humanChoice == "Rock" && compChoice == "Rock") {
            roundResult.textContent = "It's a Tie"                                        //              if human Rock, comp Rock, set roundResult to tie
        } else if (humanChoice == "Paper" && compChoice == "Paper") {
            roundResult.textContent = "It's a Tie"                                       //              if human Paper, comp Paper, set roundResult to tie
        } else if (humanChoice == "Paper" && compChoice == "Scissors") {
            roundResult.textContent = "You Lose..."
            ++compScore;                                        //              if human Paper, comp Scissors, set roundResult to comp
        } else if (humanChoice == "Paper" && compChoice == "Rock") {
            roundResult.textContent = "You Win!" 
            ++humanScore;                                           //              if human Paper, comp Rock, set roundResult to human
        } else if (humanChoice == "Scissors" && compChoice == "Paper") {
            roundResult.textContent = "You Win!" 
            ++humanScore;                                          //              if human Scissors, comp Paper, set roundResult to human
        } else if (humanChoice == "Scissors" && compChoice == "Scissors") {
            roundResult.textContent = "It's a Tie"                                           //              if human Scissors, comp Scissors, set roundResult to tie
        } else {
            roundResult.textContent = "You Lose..."
            ++compScore;                                      //              if human Scissors, comp Rock, set roundResult to comp
        }
       
        scoreDisplay.textContent = `You: ${humanScore} CPU: ${compScore}`

        if (roundNum > 5) {
            scoreDisplay.textContent += displayWinner();   // declare winner of game
         }
         
     
         function displayWinner() {  // create function to display winner
             if (humanScore > compScore) {
                 return "You Win the Game!";
             } else if (humanScore == compScore) {
                 return "The Game is a Tie";
             } else {
                 return "You Lose the Game..."
             }
         }
        
    }

   
}

playGame();

