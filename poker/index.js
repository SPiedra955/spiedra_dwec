let deck = [
  "queen_of_diamonds2.png",
  "queen_of_hearts.png",
  "queen_of_hearts2.png",
  "queen_of_spades.png",
  "queen_of_spades2.png",
  "red_joker.png",
  "2_of_clubs.png",
  "2_of_diamonds.png",
  "2_of_hearts.png",
  "2_of_spades.png",
  "3_of_clubs.png",
  "3_of_diamonds.png",
  "3_of_hearts.png",
  "3_of_spades.png",
  "4_of_clubs.png",
  "4_of_diamonds.png",
  "4_of_hearts.png",
  "4_of_spades.png",
  "5_of_clubs.png",
  "5_of_diamonds.png",
  "5_of_hearts.png",
  "5_of_spades.png",
  "6_of_clubs.png",
  "6_of_diamonds.png",
  "6_of_hearts.png",
  "6_of_spades.png",
  "7_of_clubs.png",
  "7_of_diamonds.png",
  "7_of_hearts.png",
  "7_of_spades.png",
  "8_of_clubs.png",
  "8_of_diamonds.png",
  "8_of_hearts.png",
  "8_of_spades.png",
  "9_of_clubs.png",
  "9_of_diamonds.png",
  "9_of_hearts.png",
  "9_of_spades.png",
  "10_of_clubs.png",
  "10_of_diamonds.png",
  "10_of_hearts.png",
  "10_of_spades.png",
  "ace_of_clubs.png",
  "ace_of_diamonds.png",
  "ace_of_hearts.png",
  "ace_of_spades.png",
  "ace_of_spades2.png",
  "black_joker.png",
  "jack_of_clubs.png",
  "jack_of_clubs2.png",
  "jack_of_diamonds.png",
  "jack_of_diamonds2.png",
  "jack_of_hearts.png",
  "jack_of_hearts2.png",
  "jack_of_spades.png",
  "jack_of_spades2.png",
  "king_of_clubs.png",
  "king_of_clubs2.png",
  "king_of_diamonds.png",
  "king_of_diamonds2.png",
  "king_of_hearts.png",
  "king_of_hearts2.png",
  "king_of_spades.png",
  "king_of_spades2.png",
  "queen_of_clubs.png",
  "queen_of_clubs2.png",
  "queen_of_diamonds.png",
];

let newWin;

function createCombination(combination) {
  let cardImg = newWin.document.createElement("img");
  cardImg.src = combination;
  cardImg.style.width = "65px";
  cardImg.style.height = "100px";
  return cardImg;
}

function createCards() {
  let combinations = [];
  for (let i = 0; i < 5; i++) {
    let randCard = Math.floor(Math.random() * deck.length);
    let combination = "cards/" + deck[randCard];
    combinations.push(combination);

    let cardsArray = createCombination(combination);

    newWin.cardsContainer.appendChild(cardsArray);
  }
  return combinations;
}

function play() {
  newWin = window.open("", "Poker", "width=800px,height=300px");

  if (!newWin.document.querySelector("h1")) {
    newWin.document.write("<h3>Poker Game</h3>");
    /*
    * newWin.cardsContainer es una propiedad del objeto newWin, que está 
    * almacenando una referencia al elemento contenedor de las cartas (div). 
    * No es una variable independiente como let newWin y se accede a ella 
    * utilizando la notación de punto (objeto.propiedad)
    */
    newWin.cardsContainer = newWin.document.createElement("div");
    newWin.cardsContainer.style.textAlign = "left";
    newWin.document.body.appendChild(newWin.cardsContainer);

    createCards();

    let refreshButton = newWin.document.createElement("button");
    refreshButton.textContent = "Refresh";
    refreshButton.style.marginTop = "10px";
    refreshButton.onclick = refreshCards;
    newWin.document.body.appendChild(refreshButton);
  }
}



function refreshCards() {
  newWin.cardsContainer.innerHTML = "";
  let combinations = createCards();

  let result = checkPair(combinations);
  displayResult(result);
}

function checkPair(combination) {
  for (let i = 0; i < combination.length; i++) {
    let currentCard = getCardValue(combination[i]);
    for (let j = i + 1; j < combination.length; j++) {
      let nextCard = getCardValue(combination[j]);
      if (currentCard === nextCard) {
        return true;
      }
    }
  }
  return false;
}

function getCardValue(card) {
  let cardName = card.substring(
    card.lastIndexOf("/") + 1,
    card.lastIndexOf(".")
  );
  let value = cardName.split("_")[0];
  return value;
}

let resultElement;

function displayResult(result) {
  if (!resultElement) {
    resultElement = newWin.document.createElement("p");
    resultElement.style.fontSize = "12px";
    newWin.document.body.appendChild(resultElement);
  }

  if (result) {
    resultElement.innerHTML = "¡Tienes al menos un par!";
  } else {
    resultElement.innerHTML = "No tienes un par, inténtalo de nuevo";
  }
}

function closeWin() {
  newWin.close();
}

function closeCurrent() {
  window.close();
}
