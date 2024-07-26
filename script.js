let userScore = 0;
let compScore =0 ;

const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("button");  //#msg

const userScorePara = document.querySelector("#user-score");
const compScorePara = document.querySelector("#comp-score");

const genComputerChoice =() => {
     const chOption = ["rock","paper","scissors"];
     const randIdx = Math.floor(Math.random() *3 );
     return chOption[randIdx];
};

const drawGame = () =>{
    
    msg.innerText= "Game Was draw !! Play Again";
    msg.style.backgroundColor = "rgb(10, 10, 45)";
};

const showWinner = (userWin ,userchoice, compChoice) => {
        if(userWin) {
           
            userScore++ ;
            userScorePara.innerText = userScore ;
            msg.innerText= `You Win !! your ${userchoice} beats ${compChoice}` ;
            msg.style.backgroundColor = "green";
        } else {
           
            compScore++ ;
            compScorePara.innerText = compScore ;
            msg.innerText= `You Loose !! ${compChoice} beats your ${userchoice} `;
            msg.style.backgroundColor = "red";
        }
};

const playGame = (userchoice) => {
    console.log("userchoice = ",userchoice);
  //generate computer choice
    const compChoice = genComputerChoice();
    console.log("Computerchoice = ", compChoice);

    if(userchoice === compChoice) {
        //draw condition 
        drawGame();
    } else {
        let userWin = true ;
        if ( userchoice === "rock") {
            //scissor,paper 
             userWin = compChoice === "paper"? false : true ;
        } else if ( userchoice === "paper") {
             //rock,scissor
             userWin = compChoice === "scissor" ? false : true ;
        } else {
            //rock,paper
             userWin = compChoice === "rock" ? false : true ;
        }
        showWinner (userWin,userchoice , compChoice);
    }
};

choices.forEach((choice) => {
    choice.addEventListener ("click", () => {
        const userchoice = choice.getAttribute("id");
        
        playGame(userchoice);
    });
});