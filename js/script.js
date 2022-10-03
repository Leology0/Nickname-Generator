// Nickname Generator
// Event Listeners
document.getElementById('randNick').addEventListener("click", randomNick);
document.getElementById('allNick').addEventListener("click", allNicks);

// Global Variables
let containerEl = document.getElementById("container");
// Array
let myNicks = ["the Brother", "the Son", "the Gamer", "the Student"];

// Grab a random nickname from array
function randomNick() {
    let firstInput = document.getElementById("firstName").value;
    let lastInput = document.getElementById("lastName").value;
    containerEl.innerHTML = firstInput + ` ${myNicks[randomInt(0, myNicks.length)]} ` + lastInput;
}
// Grab all nicknames and format them correctly

function allNicks() {
    let firstInput = document.getElementById("firstName").value;
    let lastInput = document.getElementById("lastName").value;
    let divStr = ""
    for (let i = 0; i < myNicks.length; i++) {
        divStr += `<div>${firstInput} ${myNicks[i]} ${lastInput}</div>`
    }
    containerEl.innerHTML = divStr;
}

