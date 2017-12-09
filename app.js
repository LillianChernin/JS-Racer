console.log("JS working!");

const blueCar = document.getElementById('blue-car');

const redCar = document.getElementById('red-car');

let blueCarPos = 0;
let redCarPos = 0;

const mobilizeCars = () => {
  document.addEventListener('keypress', (event) => {
    if (event.key = "k") {
      blueCarPos = blueCarPos + 25;
      blueCar.setAttribute("style", "position: relative; left: " + blueCarPos + "px");
    } else if (event.key = "s") {
      redCarPos = redCarPos + 25;
      redCar.setAttribute("style", "position: relative; left: " + redCarPos + "px");
    }
  });
}

mobilizeCars();
