let deck = [];
const cardSuits = ["c", "s", "d", "h"];
const cardFaces = ["A", "2", "3", "4", "5", "6", "7", "8", "9", "T", "J", "Q", "K"];

function hidePopup() {
    let popup = document.getElementById("play-popup");
    popup.style.visibility = "hidden";
}

function deal() {
    hidePopup();
}