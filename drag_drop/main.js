//aquí el código JS

(function () {
  let idDrag = "drag";
  let idDrop = "div";
  let numDrag = 12;
  let numDrop = 9;

  for (let i = 4; i <= numDrag; i++) {
    let div = idDrag + i;
    let elementsDiv = document.getElementById(div);
    elementsDiv.setAttribute("draggable", true);
    elementsDiv.setAttribute("ondragstart", "drag(event)");
    console.log(elementsDiv);
  }

  for (let i = 1; i <= numDrop; i++) {
    let div = idDrop + i;
    let elementsDiv = document.getElementById(div);
    elementsDiv.setAttribute("ondrop", "drop(event)");
    elementsDiv.setAttribute("ondragover", "allowDrop(event)");
    console.log(elementsDiv);
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
  e.target.appendChild(document.getElementById(data));
}
