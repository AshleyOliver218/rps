//Rules for rps in conditions statement and make it a function
//R<S
//S>P
//P>R
let playerScore = 0  //declaring player score variable
let compScore = 0   //declaring the computer score variable
let humanScore = document.querySelector("#human-score") //declaring variable to apear as playerScore in the DOM
let computerScore = document.querySelector("#computer-score")   //declaring variable to apear as the compScore in the DOM
let background = document.querySelector("body") //creating background element in the DOM
let messages = document.querySelector("#message")   //creating dialogue element in the DOM
let choose = document.querySelector("#choose")  //creating "choose" div in the DOM
let openPopupButton = document.querySelector("[data-popup-target]")   //creating button to open popup in DOM
let closePopupButton = document.querySelector("[data-close-button]")  //creating button to close popup in DOM
let popupOverlay = document.getElementById("overlay")   //creating overlay for popup in DOM
humanScore.textContent = playerScore    //setting the text of the human score variable = to playerScore
computerScore.textContent = compScore   //setting the text of the human score variable = to compScore

//adding event listener for popup buttons
openPopupButton.addEventListener('click', () => {
    let popup = document.querySelector(openPopupButton.dataset.popupTarget) //grabs html popup
    openPopup(popup)    //runs function to open popup

})
closePopupButton.addEventListener('click', () => {
    let popup = document.querySelector(openPopupButton.dataset.popupTarget)
    closePopup(popup)    //runs  function to close popup

})

function openPopup(popup){
    if(popup == null) return
    popup.classList.add("active")
    popupOverlay.classList.add("active")
}

function closePopup(popup){
    if(popup == null) return
    popup.classList.remove("active")
    popupOverlay.classList.remove("active")
}
//click picture to select choices
//add event listener playerChoice: rock
let setPlayerChoiceAsRock = document.querySelector(".playersChoiceRock")    //setting rock picture as a DOM object
setPlayerChoiceAsRock.addEventListener('click', () => {   //making it clickable
    let playerChoice = "Rock"  //when clicked the player chooses rock
    background.style.backgroundImage = "url('images/rock-pattern.png')" //setting the choice as my rock image
    setPlayerChoiceAsRock.style.border = "4px dotted blue"  //setting the style for it being "selected"
    setPlayerChoiceAsScissors.style.border = "0"    //insures that all other choices are unstyled while rock is selected
    setPlayerChoiceAsScissors.style.zoom = ""
    setPlayerChoiceAsScissors.style.transition = ""
    setPlayerChoiceAsPaper.style.border = "0"
    setPlayerChoiceAsPaper.style.zoom = ""
    setPlayerChoiceAsPaper.style.transition = ""
    gameLogic(playerChoice) //calls my game logic function with "rock parameter" when clicked

})
//add event listener playerChoice: scissors
let setPlayerChoiceAsScissors = document.querySelector(".playersChoiceScissors")    //setting scissors picture as a DOM object
setPlayerChoiceAsScissors.addEventListener('click', () => { //making it clickable
    let playerChoice = "Scissors"   //when clicked the player chooses scissors
    background.style.backgroundImage = "url('images/scissors-background.png')"  //setting the choice as my scissors image
    setPlayerChoiceAsScissors.style.border = "4px dotted blue"  //setting the style for it being "selected"
    setPlayerChoiceAsRock.style.border = "0"    //insures that all other choices are unstyled while rock is selected
    setPlayerChoiceAsRock.style.zoom = ""
    setPlayerChoiceAsRock.style.transition = ""
    setPlayerChoiceAsPaper.style.border = "0"
    setPlayerChoiceAsPaper.style.zoom = ""
    setPlayerChoiceAsPaper.style.transition = ""
   gameLogic(playerChoice)  //calls my game logic function with "scissors parameter" when clicked
})

//add event listener playerChoice: paper
let setPlayerChoiceAsPaper = document.querySelector(".playersChoicePaper")  //setting paper picture as a DOM object
setPlayerChoiceAsPaper.addEventListener('click', () => {    //making it clickable
    let playerChoice = "Paper"  //when clicked the player chooses paper
    background.style.backgroundImage = "url('images/paper-background (1).png')" //setting the choice as my paper image
    setPlayerChoiceAsPaper.style.border = "4px dotted blue" //setting the style for it being "selected"
    setPlayerChoiceAsRock.style.border = "0"    //insures that all other choices are unstyled while rock is selected
    setPlayerChoiceAsRock.style.zoom = ""
    setPlayerChoiceAsRock.style.transition = ""
    setPlayerChoiceAsScissors.style.border = "0"
    setPlayerChoiceAsScissors.style.zoom = ""
    setPlayerChoiceAsScissors.style.transition = ""
    gameLogic(playerChoice)  //calls my game logic function with "paper parameter" when clicked
})
 
//fucntion to run game
let gameLogic = (playerChoiceParam) => {
    let playerChoice = playerChoiceParam    //setting playerChoice variable as the parameter
//creating computers random choice
    let choiceBank = ["Rock", "Paper", "Scissors"]  //creating array of choices
    let setCompChoice = choiceBank[Math.floor(Math.random() * 3)]   //formula for random picks
    let compChoice = setCompChoice  //setting compChoice variable to random choice from array

//player win conditions
    if (playerChoice === "Rock" && compChoice === "Scissors") {     //in rock vs scissors scenario...
        choose.style.display = "none"   //hides the word "choose" from view
        messages.textContent = "You win this round!"    //message displayed in DOM
        console.log("You Win Round")
        setPlayerChoiceAsPaper.style.border = "0"   //ensures paper is not selected
        setPlayerChoiceAsScissors.style.border = "4px dotted red" //displays a red selctor to show compChoice
        setPlayerChoiceAsRock.style.zoom = "150%"   //makes the winning "rock" larger
        setPlayerChoiceAsRock.style.transition = "500ms"    //smoothes the animation
        playerScore++   //Incraments the player's score by one 
        humanScore.textContent = playerScore    //displays that score in the score board
        computerScore.textContent = compScore   //displays computer score on the score board.
    }
    if (playerChoice === "Scissors" && compChoice === "Paper") {    //in scissors vs paper scenario...
        choose.style.display = "none"   //hides the word "choose" from view
        messages.textContent = "You win this round!"    //message displayed in DOM
        console.log("You Win Round")
        setPlayerChoiceAsPaper.style.border = "4px dotted red"  //displays a red selctor to show compChoice
        setPlayerChoiceAsRock.style.border = "0"    //ensures rock is not selected
        setPlayerChoiceAsScissors.style.zoom = "150%"   //makes the winning "scissors" larger
        setPlayerChoiceAsScissors.style.transition = "500ms"    //smoothes the animation
        playerScore++   //Incraments the player's score by one
        humanScore.textContent = playerScore    //displays that score in the score board.
        computerScore.textContent = compScore   //displays computer score on the score board.
    }
    if (playerChoice === "Paper" && compChoice === "Rock") {    //in paper vs rock scenario...
        choose.style.display = "none"   //hides the word "choose" from view
        messages.textContent = "You win this round!"    //message displayed in DOM
        console.log("You Win Round")
        setPlayerChoiceAsRock.style.border = "4px dotted red"   //displays a red selctor to show compChoice
        setPlayerChoiceAsScissors.style.border = "0"     //ensures scissors is not selected
        setPlayerChoiceAsPaper.style.zoom = "150%"  //makes the winning "paper" larger
        setPlayerChoiceAsPaper.style.transition = "500ms"   //smoothes the animation
        playerScore++   //Incraments the player's score by one
        humanScore.textContent = playerScore    //displays that score in the score board.
        computerScore.textContent = compScore   //displays computer score on the score board.
    }



    //player lose conditions   
    if (playerChoice === "Rock" && compChoice === "Paper") {    //in rock vs paper scenario...
        choose.style.display = "none"   //hides the word "choose" from view
        messages.textContent = "The computer wins this round!"  //message displayed in DOM
        console.log("The Computer Wins Round")
        setPlayerChoiceAsPaper.style.border = "4px dotted red"  //displays a red selctor to show compChoice
        setPlayerChoiceAsScissors.style.border = "0"    //ensures scissors is not selected
        setPlayerChoiceAsPaper.style.zoom = "150%"  //makes the winning "paper" larger
        setPlayerChoiceAsPaper.style.transition = "500ms"   //smoothes the animation
        compScore++     //Incraments the computer score by one
        humanScore.textContent = playerScore    //displays that score in the score board.
        computerScore.textContent = compScore   //displays computer score on the score board
        
    }
    if (playerChoice === "Scissors" && compChoice === "Rock") {    //in scissors vs rock scenario...
        choose.style.display = "none"   //hides the word "choose" from view
        messages.textContent = "The computer wins this round!"  //message displayed in DOM
        console.log("The Computer Wins Round")
        setPlayerChoiceAsPaper.style.border = "0"   //ensures paper is not selected
        setPlayerChoiceAsRock.style.border = "4px dotted red"   //displays a red selctor to show compChoice
        setPlayerChoiceAsRock.style.zoom = "150%"   //makes the winning "rock" larger
        setPlayerChoiceAsRock.style.transition = "500ms"    //smoothes the animation
        compScore++     //Incraments the computere score by one
        humanScore.textContent = playerScore    //displays that score in the score board.
        computerScore.textContent = compScore   //displays computer score on the score board
    }
    if (playerChoice === "Paper" && compChoice === "Scissors") {    //in paper vs scissors scenario...
        choose.style.display = "none"   //hides the word "choose" from view
        messages.textContent = "The computer wins this round!"  //message displayed in DOM
        console.log("The Computer Wins Round")
        setPlayerChoiceAsRock.style.border = "0"    //ensures rock is not selected
        setPlayerChoiceAsScissors.style.border = "4px dotted red"   //displays a red selctor to show compChoice
        setPlayerChoiceAsScissors.style.zoom = "150%"   //makes the winning "scissors" larger
        setPlayerChoiceAsScissors.style.transition = "500ms"    //smoothes the animation
        compScore++     //Incraments the computere score by one
        humanScore.textContent = playerScore    //displays that score in the score board.
        computerScore.textContent = compScore   //displays computer score on the score board
    }


    //tie conditions
    if (playerChoice === "Rock" && compChoice === "Rock") {     //in rock vs rock scenario...
        choose.style.display = "none"   //hides the word "choose" from view
        messages.textContent = "You and the computer tied this round"   //message displayed in the Dom
        console.log("Tie round")
        setPlayerChoiceAsRock.style.border = "4px dotted purple"    //displays a purple selector for rock
        setPlayerChoiceAsRock.style.zoom = "150%"   //makes the tied "rock" larger
        setPlayerChoiceAsRock.style.transition = "500ms"    //smoothes the animation
    }
    if (playerChoice === "Scissors" && compChoice === "Scissors") {
        choose.style.display = "none"   //hides the word "choose" from view
        messages.textContent = "You and the computer tied this round"   //message displayed in DOM
        console.log("Tie round")
        setPlayerChoiceAsScissors.style.border = "4px dotted purple"    //displays a purple selector for scissors
        setPlayerChoiceAsScissors.style.zoom = "150%"   //makes the tied "scissors" larger
        setPlayerChoiceAsScissors.style.transition = "500ms"    //smoothes the animation
    }
    if (playerChoice === "Paper" && compChoice === "Paper") {
        choose.style.display = "none"   //hides the word "choose" from view
        messages.textContent = "You and the computer tied this round"   //message displayed in DOM
        console.log("Tie round")
        setPlayerChoiceAsPaper.style.border = "4px dotted purple"   //displays a purple selector for paper
        setPlayerChoiceAsPaper.style.zoom = "150%"  //makes the tied "papper" larger
        setPlayerChoiceAsPaper.style.transition = "500ms"   //smoothes the animation
    }
    console.log(`You chose ${playerChoice}`)
    console.log(`The Computers chose ${compChoice}`)
    
    
    //Score Conditions to make "Game Over"
     if(playerScore >= 2){      //when the player score reaches 2
        humanScore.textContent = playerScore    //displays that score in the score board.
        computerScore.textContent = compScore   //displays computer score on the score board
        console.log(playerScore)
        console.log(compScore)
    setTimeout(()=>{    //slows down reset code
        alert("You win! Game Over. click okay to restart")  //Game Over and reset
        //everything below sets all styling back to default
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
    if(compScore >= 2){     //when computer the score reaches 2
        humanScore.textContent = playerScore    //displays that score in the score board.
        computerScore.textContent = compScore   //displays computer score on the score board
        console.log(playerScore)
        console.log(compScore)
    setTimeout(()=>{    //slows down reset code
         alert("The Computer Wins! Game Over. click okay to restart")   //Game Over and reset
         //everything below sets all styling, score, and messages back to default
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




