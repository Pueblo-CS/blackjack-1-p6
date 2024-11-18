let deck = [];
const cardSuits = ["c", "s", "d", "h"];
const cardFaces = ["A", "2", "3", "4", "5", "6", "7", "8", "9", "T", "J", "Q", "K"];

function hidePopup() {
    let popup = document.getElementById("play-popup");
    popup.style.visibility = "hidden";
}

function deal() {
    hidePopup();
    fillDeck();
    shuffle();
}

function fillDeck() {
    for (let i = 0; i < cardSuits.length; i++){
        let suit = cardSuits[i];
        for (let j = 0; j < cardFaces.length; j++) {
            let face = cardFaces[j];
            let card = face + suit;
            deck.push(card);
        }
    }
}

function shuffle() {
    for (let i = 0; i < deck.length; i++){
        let randNum = Math.floor(Math.random() * deck.length);
        alert(randNum);
    }
}