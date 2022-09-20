// Nickname Generator
// Event Listeners
document.getElementById('randNick').addEventListener("click", randomNick);
document.getElementById('allNick').addEventListener("click", allNick);

// Global Variables
let firstInput = document.getElementById("firstName")
let lastInput = document.getElementById("lastName")
let containerEl = document.getElementById("container")

// Array
let myNicks = ["the Coolest", "the Great", "the Gamer", "the Student"];

// Grab a random nickname from array
function randomNick() {
    containerEl.innerHTML =`<div>${firstInput} ${myNicks[randomInt(0, 4)]} ${lastInput}</div>`
}

// Grab all nicknames and format them correctly
