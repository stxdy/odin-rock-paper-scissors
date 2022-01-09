console.log('test')
let playerscore = 0
let computerScore = 0



//function computerPlay() {
//    const choicesArray = ['Rock', 'Paper', 'Scissors']
//    return choicesArray[Math.floor(Math.random() * choicesArray.length)]
//}


// Function to return R, P, or S. 
function computerPlay() {
    const rpsArray = ['Rock', 'Paper', 'Scissors']
    return rpsArray[Math.floor(Math.random() * rpsArray.length)]
        // Math.floor() is needed to return a whole number (integer). 
        // Math.random() selects a number 0-1 at random. 
        //.length ???? counts the length of the array (3)
}

console.log(computerPlay()) // output result to console.

// Some kind of function that compares two parameters 'playerSelection' and 'computerSelection'


//todo: create buttons. buttons for each type of input (r,p,s).
// link buttons from .html to .js (or buttons in .js file?)
//selecting each button type results in comparison to the computerSelection. 

// create a text box and allow user to submit their selection.

function playRound() {
    let computerSelection = computerPlay()
    result = ""
    
    //let playerSelection = text input htmlfile

// 3 results. Win, Lose, Draw.
//Make conditions for Win




    //Win
    if ((playerSelection == 'Rock' && computerSelection == 'Scissors') ||
        (playerSelection == 'Paper' && playerSelection =='Rock') ||
        (playerSelection == 'Scissors' && computerSelection == 'Paper')) {

    //add score
        playerScore = + 1 
    //update the result
        result = // a string that shows both competitors selections and updates their scores
    }
    //Draw
    else if  (playerSelection == computerSelection ||) {
    
    //update with the results and show score
        result =     
    }

    else {
        computerScore //+= 1
    }
        
    //


}

