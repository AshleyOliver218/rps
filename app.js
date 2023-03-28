//Rules for rps in conditions statement and make it a function
//R<S
//S>P
//P>R
//click picture to select choices

//add event listener playerChoice: rock
let setPlayerChoiceAsRock = document.querySelector(".playersChoiceRock")
setPlayerChoiceAsRock.addEventListener('click', ()=>{
let playerChoice = "Rock"
gameLogic(playerChoice)
})
//add event listener playerChoice: scissors
let setPlayerChoiceAsScissors = document.querySelector(".playersChoiceScissors")
setPlayerChoiceAsScissors.addEventListener('click', ()=>{
let playerChoice = "Scissors"
gameLogic(playerChoice)
})
//add event listener playerChoice: paper
let setPlayerChoiceAsPaper = document.querySelector(".playersChoicePaper")
setPlayerChoiceAsPaper.addEventListener('click', ()=>{
let playerChoice = "Paper"
gameLogic(playerChoice)
})

let gameLogic = (playerChoiceParam)=> {
//fucntion to generate computer choice
let playerScore = 0
let compScore = 0
let playerChoice = playerChoiceParam
   
let choiceBank = ["Rock", "Paper", "Scissors"]
let setCompChoice = choiceBank[ Math.floor(Math.random()*3)]
        
        

let compChoice = setCompChoice

if(playerChoice === "Rock" && compChoice === "Scissors"){
console.log("player one Wins")
playerScore++
}
if(playerChoice==="Scissors" && compChoice ==="Paper"){
    console.log("player one Wins")
    playerScore++
    }
if(playerChoice==="Paper" && compChoice ==="Rock"){
        console.log("player one Wins")
        playerScore++
        }

      
        
     //lose conditions   
        
if(playerChoice==="Rock" && compChoice ==="Paper"){
            console.log("computer wins")
            compScore++
            }
if(playerChoice==="Scissors" && compChoice ==="Rock"){
                console.log("computer Wins")
                compScore++
                }
if(playerChoice==="Paper" && compChoice ==="Scissors"){
                    console.log("computer Wins")
                    compScore++
                    }
    

//tie conditions
if(playerChoice==="Rock" && compChoice ==="Rock"){
    console.log("tie game")
    }
if(playerChoice==="Scissor" && compChoice === "Scissors"){
        console.log("tie game")
        }
if(playerChoice==="Paper" && compChoice ==="Paper"){
            console.log("tie game")
            }
    console.log(`Players choice is ${playerChoice}`)
    console.log(`Computers choice is ${compChoice}`)
}

// gameLogic()