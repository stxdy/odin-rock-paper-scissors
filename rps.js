//create function for computer's play (he chooses rock, paper, scissors)


function computerPlay() {
    let array = ['rock', 'paper', 'scissors']
    
    return array[Math.floor(Math.random() * array.length)]
}







function playRound(playerSelection, computerSelection) {
    if ((playerSelection == 'rock' && computerSelection == 'scissors') ||
        (playerSelection == 'paper' && computerSelection == 'rock') ||
        (playerSelection == 'scissors' && computerSelection == 'paper')) {
//!!!!!FIGURE OUT HOW TO RETURN THE RESULT PROPERLY
// set the result then change the result to something each time or something
            result = ('You win! ' + playerSelection + ' beats ' + computerSelection + "!")
            return result
        }
    
    else if (playerSelection == computerSelection) {
            result = ('Tie game! Both players chose ' + playerSelection + ".")
            return result
    }

    else {
        result = ('You lose! The computer chose ' + computerSelection + ".")
        return result
    }
  }







  const playerSelection = "rock";
  const computerSelection = computerPlay();
  console.log(playRound(playerSelection, computerSelection));
 