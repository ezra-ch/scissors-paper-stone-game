const getRandomChoice = () =>{
    RandomChoice = Math.floor(Math.random()*3+1);
    return RandomChoice;
}    

const getComputerChoice = () =>{
  switch (getRandomChoice()){
  case 1:
    return ('scissors');
  case 2:
    return ('rock');

  case 3:
    return ('paper');

  default:
    console.error('something is wrong');
    break;
  }
};  


const gethumanChoice = () => {
    const getPrompt = prompt('choose paper, scissors or rock');

    if (typeof getPrompt === 'string'){
        const lowercasechoice = getPrompt.toLowerCase();
        if (lowercasechoice === 'paper'||lowercasechoice === 'scissors'||lowercasechoice === 'rock'){
            return (lowercasechoice);
        }else{
            console.error ('Invalid choice');
            return 'falseinput';
        }
    }else console.log('user doesnt want to play');
}

let setRound;
let currentRound;
let playerPoints;
let computerPoints;

const gameStart = ()=>{
    setRound = 5;
    currentRound = 1;
    playerPoints = 0;
    computerPoints =0;
    roundStart();
}

const eventWon = () => {
    console.log(`you won this round!`);
    playerPoints++;
    checkRound();
}
const eventLost = () => {
    console.log('you lost this round!');
    computerPoints++
    checkRound();
}
const eventDraw = () => {
    console.log('it was a draw try again');
    setRound++;
    checkRound();
}
const checkResults = () =>{
    if (playerPoints > computerPoints){
        console.log(`You won ${playerPoints} out of ${setRound} rounds, YOU ARE THE WINNER!!`);
        return;
    }
    else{ 
        console.log(`You lost ${computerPoints} out of ${setRound} rounds, YOU LOST TO THE COMPUTER LOL!!`);
        return;
    }      
}

function checkRound(){
    if (currentRound === setRound){
        console.log(`the battle is now over`);
        checkResults();
    }else {
        console.log(`that concludes round ${currentRound}, we have ${setRound-currentRound} more rounds to go!`);
        currentRound++;
        roundStart();
    }
}



const roundStart = () => {
    let humanChoice = gethumanChoice();
    let computerChoice = getComputerChoice();
    const battleMsg = () => console.log(`you chose ${humanChoice} and your opponent chose ${computerChoice}`);
    switch(humanChoice){
        case 'paper':
            if (computerChoice === 'rock'){
                battleMsg();
                eventWon();
            }
            else if (computerChoice === 'paper'){
                battleMsg();
                eventDraw();
            }
            else if(computerChoice ==='scissors'){
                battleMsg();
                eventLost();
            }                   
             break;

        case 'rock':
            if (computerChoice === 'rock'){
                battleMsg();
                eventDraw();
            }
            else if (computerChoice === 'paper'){
                battleMsg();
                eventLost();
            }
            else if(computerChoice ==='scissors'){
                battleMsg();
                eventWon();
            }                   
             break;
        
        case 'scissors':
            if (computerChoice === 'rock'){
                battleMsg();
                eventLost();
            }
            else if (computerChoice === 'paper'){
                battleMsg();
                eventWon();
            }
            else if(computerChoice ==='scissors'){
                battleMsg();
                eventDraw();
            }                   
             break;
        
        default:
            if (humanChoice === 'falseinput'){
                console.log(`make sure you input the correct choices`);
                roundStart();
            }else break;
    }
}

gameStart();