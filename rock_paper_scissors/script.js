const TotalScore = {computerScore:0, playerScore: 0}
function getComputerChoice() {
  const rpsChoice = ['Rock', 'Paper', 'Scissors'];
  const randomNumber = Math.floor(Math.random() * rpsChoice.length);
  return rpsChoice[randomNumber];
}


function getResult(playerChoice, computerChoice) {
  let score;
  if(playerChoice == computerChoice){
    score = 0;
  }else if (playerChoice == 'Rock' && computerChoice == 'Scissors' ||playerChoice == 'Paper' && computerChoice == 'Rock'||playerChoice == 'Scissors' && computerChoice == 'Paper'){
    score = 1;
  }else{
    score = -1;
  }
  return score;
}

function getComputerResult(playerChoice, computerChoice) {
  let scoreComp;
  if(playerChoice == computerChoice){
    scoreComp = 0;
  }else if (playerChoice == 'Rock' && computerChoice == 'Scissors' ||playerChoice == 'Paper' && computerChoice == 'Rock'||playerChoice == 'Scissors' && computerChoice == 'Paper'){
    scoreComp = -1;
  }else{
    scoreComp = 1;
  }
  return scoreComp;
}



function showResult(score, scoreComp,playerChoice, computerChoice) {
  const resultDiv = document.getElementById('result');
  const handsDiv = document.getElementById('hands');
  const playerScoreDiv = document.getElementById('player-score');
  const computerScoreDiv = document.getElementById('computer-score');


  if(score ==-1){
    resultDiv.innerText ='😔You Lose!';
  }else if( score == 0){
    resultDiv.innerText ="🙄It's tie!"
  }else{
    resultDiv.innerText ='😀You won!'
  }
  handsDiv.innerText = `🙍‍♂️${playerChoice} vs 🤖${computerChoice}`;
  playerScoreDiv.innerText = `Your Score: ${TotalScore['playerScore']}`;
  computerScoreDiv.innerText =`Computer Score ${TotalScore['computerScore']}`;
}

function onClickRPS(playerChoice) {
  const computerChoice = getComputerChoice();
  const score = getResult(playerChoice, computerChoice);
  const scoreComp = getComputerResult(playerChoice, computerChoice);
  TotalScore['playerScore'] += score;
  TotalScore['computerScore'] += scoreComp;
  showResult(score,scoreComp ,playerChoice, computerChoice);
}



function playGame() {
const rpsButtons = document.querySelectorAll('.rpsButton');
rpsButtons.forEach(rpsButton => {
  rpsButton.onclick = () => onClickRPS(rpsButton.value);
});
const endGameButton = document.getElementById('endGameButton');
endGameButton.onclick =() => endGame(TotalScore);

}

function endGame(TotalScore) {
  TotalScore['playerScore'] = 0;
  TotalScore['computerScore'] = 0;
  const resultDiv = document.getElementById('result');
  const handsDiv = document.getElementById('hands');
  const playerScoreDiv = document.getElementById('player-score');
  const computerScoreDiv = document.getElementById('computer-score');
  resultDiv.innerText ='';
  handsDiv.innerText ='';
  playerScoreDiv.innerText ='';
  computerScoreDiv.innerHTML ='';
}

playGame()

