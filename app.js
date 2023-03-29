//Rules for rps in conditions statement and make it a function
//R<S
//S>P
//P>R
let playerScore = 0
let compScore = 0
let humanScore = document.querySelector("#human-score")
let computerScore = document.querySelector("#computer-score")
humanScore.textContent = playerScore
computerScore.textContent = compScore
//click picture to select choices
//add event listener playerChoice: rock
let setPlayerChoiceAsRock = document.querySelector(".playersChoiceRock")
setPlayerChoiceAsRock.addEventListener('click', () => {
    let playerChoice = "Rock"
    setPlayerChoiceAsRock.style.border = "4px dotted blue"
    gameLogic(playerChoice)

})
//add event listener playerChoice: scissors
let setPlayerChoiceAsScissors = document.querySelector(".playersChoiceScissors")
setPlayerChoiceAsScissors.addEventListener('click', () => {
    let playerChoice = "Scissors"
    setPlayerChoiceAsScissors.style.border = "4px dotted blue"
    gameLogic(playerChoice)
})

//add event listener playerChoice: paper
let setPlayerChoiceAsPaper = document.querySelector(".playersChoicePaper")
setPlayerChoiceAsPaper.addEventListener('click', () => {
    let playerChoice = "Paper"
    setPlayerChoiceAsPaper.style.border = "4px dotted blue"
    gameLogic(playerChoice)  
})

// let setPlayerChoiceAsRockHover = document.querySelector(".playersChoiceRock")
// setPlayerChoiceAsRockHover.addEventListener('mouseover', () => {
//     let playerChoice = "Rock"
//     gameLogic(playerChoice)

// })  
//fucntion to run game
let gameLogic = (playerChoiceParam) => {


    let playerChoice = playerChoiceParam
//creating computers random choice
    let choiceBank = ["Rock", "Paper", "Scissors"]
    let setCompChoice = choiceBank[Math.floor(Math.random() * 3)]



    let compChoice = setCompChoice

//player win conditions
    if (playerChoice === "Rock" && compChoice === "Scissors") {
        console.log("You Win Round")
        setPlayerChoiceAsPaper.style.border = "0"
        setPlayerChoiceAsScissors.style.border = "0"
        playerScore++
        humanScore.textContent = playerScore
        computerScore.textContent = compScore
    }
    if (playerChoice === "Scissors" && compChoice === "Paper") {
        console.log("You Win Round")
        setPlayerChoiceAsPaper.style.border = "0"
        setPlayerChoiceAsRock.style.border = "0"
        playerScore++
        humanScore.textContent = playerScore
        computerScore.textContent = compScore
    }
    if (playerChoice === "Paper" && compChoice === "Rock") {
        console.log("You Win Round")
        setPlayerChoiceAsRock.style.border = "0"
        setPlayerChoiceAsScissors.style.border = "0"
        playerScore++
        humanScore.textContent = playerScore
        computerScore.textContent = compScore
    }



    //player lose conditions   

    if (playerChoice === "Rock" && compChoice === "Paper") {
        console.log("The Computer Wins Round")
        compScore++
        humanScore.textContent = playerScore
        computerScore.textContent = compScore
        
    }
    if (playerChoice === "Scissors" && compChoice === "Rock") {
        console.log("The Computer Wins Round")
        compScore++
        humanScore.textContent = playerScore
        computerScore.textContent = compScore
    }
    if (playerChoice === "Paper" && compChoice === "Scissors") {
        console.log("The Computer Wins Round")
        compScore++
        humanScore.textContent = playerScore
        computerScore.textContent = compScore
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
    //Score Conditions to make "Game Over"
    if(playerScore >= 2){
        humanScore.textContent = playerScore
        computerScore.textContent = compScore
        alert("You win! Game Over. click okay to restart")
        setPlayerChoiceAsRock.style.border = "0"
        setPlayerChoiceAsPaper.style.border = "0"
        setPlayerChoiceAsScissors.style.border = "0"
        playerScore = 0
        compScore = 0
        humanScore.textContent = playerScore
        computerScore.textContent = compScore
    } 
    if(compScore >= 2){
        humanScore.textContent = playerScore
        computerScore.textContent = compScore
        alert("The Computer Wins! Game Over. click okay to restart")
        setPlayerChoiceAsRock.style.border = "0"
        setPlayerChoiceAsPaper.style.border = "0"
        setPlayerChoiceAsScissors.style.border = "0"
        playerScore = 0
        compScore = 0
        humanScore.textContent = playerScore
        computerScore.textContent = compScore
        
    }
}




