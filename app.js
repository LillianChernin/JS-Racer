
const playerOne = document.getElementById('player-one');
const playerTwo = document.getElementById('player-two');
const startButton = document.getElementById('start-button');
const count = document.getElementById('count-down');

let playerOnePos = 0;
let playerTwoPos = 0;
let finishLinePos = window.screen.width - 100;
let playerOneScore = 0;
let playerTwoScore = 0;

//Adjust race track and finish line position to fit current window screen size
document.getElementById('road').setAttribute("style", "width: " + window.screen.width + "px");
document.getElementById('finish-line').setAttribute("style", "left: " + finishLinePos + "px");
//

const updateScore = () => {
  document.getElementById('score').innerHTML = "Player 1: " + playerOneScore + "  /  Player 2: " + playerTwoScore;
}

const resetRace = () => {
  playerOnePos = 0;
  playerTwoPos = 0;
  playerOne.setAttribute("style", "position: relative; left: " + playerOnePos + "px");
  playerTwo.setAttribute("style", "position: relative; left: " + playerTwoPos + "px");
  count.innerHTML = "3";
  if (playerOneScore > 0 || playerTwoScore > 0) {
    document.removeEventListener('keypress');
    startButton.innerHTML = "Play Again";
  }
}

const checkAndAnnounceWinner = () => {
  if (playerOnePos >= finishLinePos && playerTwoPos >= finishLinePos && playerOnePos === playerTwoPos) {
    alert("We have a tie!!!");
  } else if (playerOnePos >= finishLinePos) {
    alert("Player 1 is the WINNNER!!!");
    playerOneScore++;
    updateScore();
    startButton.innerHTML = "Play Again";
  } else if (playerTwoPos >= finishLinePos) {
    alert("Player 2 is the WINNER!!!");
    playerTwoScore++;
    updateScore();
    startButton.innerHTML = "Play Again";
  }
}




const mobilizeCars = () => {
  document.addEventListener('keypress', (event) => {
    if (event.key === "k") {
      playerOnePos = playerOnePos + 25;
      playerOne.setAttribute("style", "position: relative; left: " + playerOnePos + "px");
      count.setAttribute("style", "color: transparent");
      checkAndAnnounceWinner();
    } else if (event.key === "a") {
      playerTwoPos = playerTwoPos + 25;
      playerTwo.setAttribute("style", "position: relative; left: " + playerTwoPos + "px");
      count.setAttribute("style", "color: transparent");
      checkAndAnnounceWinner();
    }
  });
}

const countDown = () => {
  setTimeout(() => {
    count.setAttribute("style", "left: " + ((window.screen.width / 2) - 100) + "px; color: yellow");
  }, 1000);
  setTimeout(() => {
    count.innerHTML = "2";
  }, 2000);
  setTimeout(() => {
    count.innerHTML = "1";
  }, 3000);
  setTimeout(() => {
    count.innerHTML = "GO!!!";
    mobilizeCars();
  }, 4000);
}


startButton.addEventListener('click', (event) => {
  resetRace();
  countDown();
});
