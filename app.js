console.log("JS working!");

const blueCar = document.getElementById('blue-car');

const redCar = document.getElementById('red-car');

let blueCarPos = 0;
let redCarPos = 0;
let finishLinePos = 1150;

const checkAndAnnounceWinner = () => {
  if (redCarPos >= finishLinePos && blueCarPos >= finishLinePos) {
    if (redCarPos === blueCarPos) {
      alert("We have a tie!!!");
    } else if (redCarPos > blueCarPos) {
      alert("Red car won!! What a nail-biting finish!!");
    } else if (blueCarPos > redCarPos) {
      alert("Blue car won!! What a nail-biting finish!!");
    }
  } else if (redCarPos >= finishLinePos) {
    alert("Red car is the WINNNER!!!");
  } else if (blueCarPos >= finishLinePos) {
    alert("Blue car is the WINNER!!!");
  }
}

const mobilizeCars = () => {
  document.addEventListener('keypress', (event) => {
    if (event.key === "k") {
      blueCarPos = blueCarPos + 25;
      blueCar.setAttribute("style", "position: relative; left: " + blueCarPos + "px");
      checkAndAnnounceWinner();
    } else if (event.key === "s") {
      redCarPos = redCarPos + 25;
      redCar.setAttribute("style", "position: relative; left: " + redCarPos + "px");
      checkAndAnnounceWinner();
    }
  });

}

mobilizeCars();
