//Rules for rps in conditions statement and make it a function
//R<S
//S>P
//P>R
let playerScore = 0
let compScore = 0
let humanScore = document.querySelector("#human-score")
let computerScore = document.querySelector("#computer-score")
let background = document.querySelector("body")
let messages = document.querySelector("#message")
let choose = document.querySelector("#choose")
humanScore.textContent = playerScore
computerScore.textContent = compScore
//click picture to select choices
//add event listener playerChoice: rock
let setPlayerChoiceAsRock = document.querySelector(".playersChoiceRock")
setPlayerChoiceAsRock.addEventListener('click', () => {
    let playerChoice = "Rock"
    background.style.backgroundImage = "url('images/rock-pattern.png')"
    setPlayerChoiceAsRock.style.border = "4px dotted blue"
    setPlayerChoiceAsScissors.style.border = "0"
    setPlayerChoiceAsScissors.style.zoom = ""
    setPlayerChoiceAsScissors.style.transition = ""
    setPlayerChoiceAsPaper.style.border = "0"
    setPlayerChoiceAsPaper.style.zoom = ""
    setPlayerChoiceAsPaper.style.transition = ""
    gameLogic(playerChoice)

})
//add event listener playerChoice: scissors
let setPlayerChoiceAsScissors = document.querySelector(".playersChoiceScissors")
setPlayerChoiceAsScissors.addEventListener('click', () => {
    let playerChoice = "Scissors"
    background.style.backgroundImage = "url('images/scissors-background.png')"
    setPlayerChoiceAsScissors.style.border = "4px dotted blue"
    setPlayerChoiceAsRock.style.border = "0"
    setPlayerChoiceAsRock.style.zoom = ""
    setPlayerChoiceAsRock.style.transition = ""
    setPlayerChoiceAsPaper.style.border = "0"
    setPlayerChoiceAsPaper.style.zoom = ""
    setPlayerChoiceAsPaper.style.transition = ""
   gameLogic(playerChoice)
})

//add event listener playerChoice: paper
let setPlayerChoiceAsPaper = document.querySelector(".playersChoicePaper")
setPlayerChoiceAsPaper.addEventListener('click', () => {
    let playerChoice = "Paper"
    background.style.backgroundImage = "url('images/paper-background (1).png')"
    setPlayerChoiceAsPaper.style.border = "4px dotted blue"
    setPlayerChoiceAsRock.style.border = "0"
    setPlayerChoiceAsRock.style.zoom = ""
    setPlayerChoiceAsRock.style.transition = ""
    setPlayerChoiceAsScissors.style.border = "0"
    setPlayerChoiceAsScissors.style.zoom = ""
    setPlayerChoiceAsScissors.style.transition = ""
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
        choose.style.display = "none"
        messages.textContent = "You win this round!"
        console.log("You Win Round")
        setPlayerChoiceAsPaper.style.border = "0"
        setPlayerChoiceAsScissors.style.border = "4px dotted red"
        setPlayerChoiceAsRock.style.zoom = "150%"
        setPlayerChoiceAsRock.style.transition = "500ms"
        playerScore++
        humanScore.textContent = playerScore
        computerScore.textContent = compScore
    }
    if (playerChoice === "Scissors" && compChoice === "Paper") {
        choose.style.display = "none"
        messages.textContent = "You win this round!"
        console.log("You Win Round")
        setPlayerChoiceAsPaper.style.border = "4px dotted red"
        setPlayerChoiceAsRock.style.border = "0"
        setPlayerChoiceAsScissors.style.zoom = "150%"
        setPlayerChoiceAsScissors.style.transition = "500ms"
        playerScore++
        humanScore.textContent = playerScore
        computerScore.textContent = compScore
    }
    if (playerChoice === "Paper" && compChoice === "Rock") {
        choose.style.display = "none"
        messages.textContent = "You win this round!"
        console.log("You Win Round")
        setPlayerChoiceAsRock.style.border = "4px dotted red"
        setPlayerChoiceAsScissors.style.border = "0"
        setPlayerChoiceAsPaper.style.zoom = "150%"
        setPlayerChoiceAsPaper.style.transition = "500ms"
        playerScore++
        humanScore.textContent = playerScore
        computerScore.textContent = compScore
    }



    //player lose conditions   

    if (playerChoice === "Rock" && compChoice === "Paper") {
        choose.style.display = "none"
        messages.textContent = "The computer wins round!"
        console.log("The Computer Wins Round")
        setPlayerChoiceAsPaper.style.border = "4px dotted red"
        setPlayerChoiceAsScissors.style.border = "0"
        setPlayerChoiceAsPaper.style.zoom = "150%"
        setPlayerChoiceAsPaper.style.transition = "500ms"
        compScore++
        humanScore.textContent = playerScore
        computerScore.textContent = compScore
        
    }
    if (playerChoice === "Scissors" && compChoice === "Rock") {
        choose.style.display = "none"
        messages.textContent = "The computer wins round!"
        console.log("The Computer Wins Round")
        setPlayerChoiceAsPaper.style.border = "0"
        setPlayerChoiceAsRock.style.border = "4px dotted red"
        setPlayerChoiceAsRock.style.zoom = "150%"
        setPlayerChoiceAsRock.style.transition = "500ms"
        compScore++
        humanScore.textContent = playerScore
        computerScore.textContent = compScore
    }
    if (playerChoice === "Paper" && compChoice === "Scissors") {
        choose.style.display = "none"
        messages.textContent = "The computer wins round!"
        console.log("The Computer Wins Round")
        setPlayerChoiceAsRock.style.border = "0"
        setPlayerChoiceAsScissors.style.border = "4px dotted red"
        setPlayerChoiceAsScissors.style.zoom = "150%"
        setPlayerChoiceAsScissors.style.transition = "500ms"
        compScore++
        humanScore.textContent = playerScore
        computerScore.textContent = compScore
    }


    //tie conditions
    if (playerChoice === "Rock" && compChoice === "Rock") {
        choose.style.display = "none"
        messages.textContent = "You and the computer tied this round"
        console.log("Tie round")
        setPlayerChoiceAsRock.style.border = "4px dotted purple"
        setPlayerChoiceAsRock.style.zoom = "150%"
        setPlayerChoiceAsRock.style.transition = "500ms"
    }
    if (playerChoice === "Scissors" && compChoice === "Scissors") {
        choose.style.display = "none"
        messages.textContent = "You and the computer tied this round"
        console.log("Tie round")
        setPlayerChoiceAsScissors.style.border = "4px dotted purple"
        setPlayerChoiceAsScissors.style.zoom = "150%"
        setPlayerChoiceAsScissors.style.transition = "500ms"
    }
    if (playerChoice === "Paper" && compChoice === "Paper") {
        choose.style.display = "none"
        messages.textContent = "You and the computer tied this round"
        console.log("Tie round")
        setPlayerChoiceAsPaper.style.border = "4px dotted purple"
        setPlayerChoiceAsPaper.style.zoom = "150%"
        setPlayerChoiceAsPaper.style.transition = "500ms"
    }
    console.log(`You chose ${playerChoice}`)
    console.log(`The Computers chose ${compChoice}`)
    //Score Conditions to make "Game Over"
    
    if(playerScore >= 2){
        humanScore.textContent = playerScore
        computerScore.textContent = compScore
        console.log(playerScore)
        console.log(compScore)
    setTimeout(()=>{
        alert("You win! Game Over. click okay to restart")
        playerScore = 0
        compScore = 0
        humanScore.textContent = playerScore
        computerScore.textContent = compScore
        background.style.backgroundImage = ""
        setPlayerChoiceAsScissors.style.border = "0"
        setPlayerChoiceAsScissors.style.zoom = ""
        setPlayerChoiceAsScissors.style.transition = ""
        setPlayerChoiceAsPaper.style.border = "0"
        setPlayerChoiceAsPaper.style.zoom = ""
        setPlayerChoiceAsPaper.style.transition = ""
        setPlayerChoiceAsRock.style.border = "0"
        setPlayerChoiceAsRock.style.zoom = ""
        setPlayerChoiceAsRock.style.transition = ""
        choose.style.display = ""
        messages.textContent = "Rock, Paper, or Scissors"
    },500)}
    if(compScore >= 2){
        humanScore.textContent = playerScore
        computerScore.textContent = compScore
        console.log(playerScore)
        console.log(compScore)
    setTimeout(()=>{
         alert("The Computer Wins! Game Over. click okay to restart")
        playerScore = 0
        compScore = 0
        humanScore.textContent = playerScore
        computerScore.textContent = compScore
        setPlayerChoiceAsScissors.style.border = "0"
        background.style.backgroundImage = ""
        setPlayerChoiceAsScissors.style.zoom = ""
        setPlayerChoiceAsScissors.style.transition = ""
        setPlayerChoiceAsPaper.style.border = "0"
        setPlayerChoiceAsPaper.style.zoom = ""
        setPlayerChoiceAsPaper.style.transition = ""
        setPlayerChoiceAsRock.style.border = "0"
        setPlayerChoiceAsRock.style.zoom = ""
        setPlayerChoiceAsRock.style.transition = ""
        choose.style.display = ""
        messages.textContent = "Rock, Paper, or Scissors"
        },500)
        
    }
}




