
const blueCar = document.getElementById('blue-car');

const redCar = document.getElementById('red-car');

const startButton = document.getElementById('start-button');

const count = document.getElementById('count-down');

let blueCarPos = 0;
let redCarPos = 0;
let finishLinePos = window.screen.width - 100;
let blueCarScore = 0;
let redCarScore = 0;

const updateScore = () => {
  document.getElementById('score').innerHTML = "Blue score: " + blueCarScore + "  /  Red score: " + redCarScore;
}

const resetRace = () => {
  blueCarPos = 0;
  redCarPos = 0;
  blueCar.setAttribute("style", "position: relative; left: " + blueCarPos + "px");
  redCar.setAttribute("style", "position: relative; left: " + redCarPos + "px");
  count.innerHTML = "3";
  updateScore();
}

const checkAndAnnounceWinner = () => {
  if (redCarPos >= finishLinePos && blueCarPos >= finishLinePos) {
    if (redCarPos === blueCarPos) {
      alert("We have a tie!!!");
      document.getElementById("start-button").innerHTML = "Play Again";
    } else if (redCarPos > blueCarPos) {
      alert("Red car won!! What a nail-biting finish!!");
      redCarScore++;
      document.getElementById("start-button").innerHTML = "Play Again";
    } else if (blueCarPos > redCarPos) {
      alert("Blue car won!! What a nail-biting finish!!");
      blueCarScore++;
      document.getElementById("start-button").innerHTML = "Play Again";
    }
  } else if (redCarPos >= finishLinePos) {
    alert("Red car is the WINNNER!!!");
    redCarScore++;
    document.getElementById("start-button").innerHTML = "Play Again";
  } else if (blueCarPos >= finishLinePos) {
    alert("Blue car is the WINNER!!!");
    blueCarScore++;
    document.getElementById("start-button").innerHTML = "Play Again";
  }
}

const mobilizeCars = () => {
  document.addEventListener('keypress', (event) => {
    if (event.key === "k") {
      blueCarPos = blueCarPos + 25;
      blueCar.setAttribute("style", "position: relative; left: " + blueCarPos + "px");
      count.setAttribute("style", "color: transparent");
      checkAndAnnounceWinner();
    } else if (event.key === "s") {
      redCarPos = redCarPos + 25;
      redCar.setAttribute("style", "position: relative; left: " + redCarPos + "px");
      checkAndAnnounceWinner();
    }
  });

}

const countDown = () => {
  setTimeout(() => {
    count.setAttribute("style", "left: " + (window.screen.width / 2) + "px; color: yellow");
  }, 1000);
  setTimeout(() => {
    count.innerHTML = "2";
  }, 2000);
  setTimeout(() => {
    count.innerHTML = "1";
  }, 3000);
  setTimeout(() => {
    count.innerHTML = "GO!!!";
  }, 4000);
  count.setAttribute("style", "color: transparent");
}

const adjustRaceTrack = () => {
  document.getElementById('road').setAttribute("style", "width: " + window.screen.width + "px");
  document.getElementById('finish-line').setAttribute("style", "left: " + finishLinePos + "px");
}

adjustRaceTrack();

startButton.addEventListener('click', (event) => {
  resetRace();
  countDown();
  mobilizeCars();
});
