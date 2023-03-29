//Rules for rps in conditions statement and make it a function
//R<S
//S>P
//P>R
let playerScore = 0
let compScore = 0
//click picture to select choices
//add event listener playerChoice: rock
let setPlayerChoiceAsRock = document.querySelector(".playersChoiceRock")
setPlayerChoiceAsRock.addEventListener('click', () => {
    let playerChoice = "Rock"
    gameLogic(playerChoice)

})
//add event listener playerChoice: scissors
let setPlayerChoiceAsScissors = document.querySelector(".playersChoiceScissors")
setPlayerChoiceAsScissors.addEventListener('click', () => {
    let playerChoice = "Scissors"
    gameLogic(playerChoice)
})

//add event listener playerChoice: paper
let setPlayerChoiceAsPaper = document.querySelector(".playersChoicePaper")
setPlayerChoiceAsPaper.addEventListener('click', () => {
    let playerChoice = "Paper"
    gameLogic(playerChoice)  
})

//fucntion to run game
let gameLogic = (playerChoiceParam) => {


    let playerChoice = playerChoiceParam

    let choiceBank = ["Rock", "Paper", "Scissors"]
    let setCompChoice = choiceBank[Math.floor(Math.random() * 3)]



    let compChoice = setCompChoice

    if (playerChoice === "Rock" && compChoice === "Scissors") {
        console.log("You Win Round")
        playerScore++
        console.log(playerScore)
        console.log(compScore)
        
    }
    if (playerChoice === "Scissors" && compChoice === "Paper") {
        console.log("You Win Round")
        playerScore++
        console.log(playerScore)
        console.log(compScore)
    }
    if (playerChoice === "Paper" && compChoice === "Rock") {
        console.log("You Win Round")
        playerScore++
        console.log(playerScore)
        console.log(compScore)
    }



    //lose conditions   

    if (playerChoice === "Rock" && compChoice === "Paper") {
        console.log("The Computer Wins Round")
        compScore++
        console.log(playerScore)
        console.log(compScore)
    }
    if (playerChoice === "Scissors" && compChoice === "Rock") {
        console.log("The Computer Wins Round")
        compScore++
        console.log(playerScore)
        console.log(compScore)
    }
    if (playerChoice === "Paper" && compChoice === "Scissors") {
        console.log("The Computer Wins Round")
        compScore++
        console.log(playerScore)
        console.log(compScore)
    }


    //tie conditions
    if (playerChoice === "Rock" && compChoice === "Rock") {
        console.log("Tie round")
    }
    if (playerChoice === "Scissor" && compChoice === "Scissors") {
        console.log("Tie round")
    }
    if (playerChoice === "Paper" && compChoice === "Paper") {
        console.log("Tie round")
    }
    console.log(`You chose ${playerChoice}`)
    console.log(`The Computers chose ${compChoice}`)

    if(playerScore >= 2){
        console.log("You win! Game Over")
        playerScore = 0
        compScore = 0
    } 
    if(compScore >= 2){
        console.log("The Computer Wins! Game Over")
        playerScore = 0
        compScore = 0
    }
}




