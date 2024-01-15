let provinces = document.getElementById("provinces");
let divImages = provinces.children;
let mapAreas = document.querySelectorAll("area");
let correctAreas = 0;
let correctAnwers = 4;
let espMap = document.getElementById("map");

(function () {
  for (let i = 0; i < divImages.length; i++) {
    divImages[i].setAttribute("draggable", true);
    divImages[i].setAttribute("ondragstart", "drag(event)");
  }
  //console.log(divImages[i]);
  for (let i = 0; i < mapAreas.length; i++) {
    mapAreas[i].setAttribute("ondrop", "drop(event)");
    mapAreas[i].setAttribute("ondragover", "allowDrop(event)");
    //console.log(mapAreas[i]);
  }
})();

function allowDrop(e) {
  e.preventDefault();
}

function drag(e) {
  e.dataTransfer.setData("text", e.target.id);
}

function drop(e) {
  e.preventDefault();
  let data = e.dataTransfer.getData("text");

  let draggedImage = document.getElementById(data);

  let arealt = e.target.getAttribute("alt");

  console.log("Area name:", arealt);
  console.log("Image name:", data);

  if (arealt === data) {
    e.target.appendChild(draggedImage);
    correctAreas++;
    document.getElementById("result").innerHTML =
      "Correct Areas: " + correctAreas;
  } else {
    console.log("Wrong drop!");
  }

  if (correctAreas === correctAnwers) {
    espMap.src = "./img/espana.gif";
    let gameOver = document.createElement("h1");
    gameOver.innerHTML = "Puzzle complete, congratulations!!!";
    document.body.appendChild(gameOver);
  }
}
