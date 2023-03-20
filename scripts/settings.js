let difficultySliderSettings = false;
document.getElementById('E1').style.display = 'none';
document.getElementById('E2').style.display = 'none';

/* This function causes main page and footer to disappear, and causes Settings 
menu to appear. Also calls other Settings functions. */
function SettingsMenu() {
    difficultySliderSettings = true;
    document.getElementById('E0').style.display = 'none';
    document.getElementById('E1').style.display = 'inline';
    document.getElementById('footer').style.display = 'none';
}

let difficulty = document.getElementById("diffSelect");  
// Handles options for difficultySelect menu popup
difficulty.addEventListener("change", (e) => {
    difficulty = document.getElementById('diffSelect').value;
});

document.getElementById("SBSelect").value = 600000; 
let startingBudgetDocument = document.getElementById("SBSelect");  
let startingBudget = 600000;

// Handles options for SBSelect menu popup
startingBudgetDocument.addEventListener("change", (e) => {
    startingBudget = document.getElementById("SBSelect").value;
    startingBudget = Math.floor(startingBudget);
});


// Default Settings for Easy, Normal, and Hard Difficulties.
difficulty.addEventListener("change", (e) => {
        if (difficulty == NaN || difficulty == 1) {
            document.getElementById("SBSelect").value = 600000;
            startingBudget = 600000;
            document.getElementById("GTSelect").value = 9;
            generalTax = 0.09;
        } else if (difficulty == 2) {
            document.getElementById("SBSelect").value = 400000;
            startingBudget = 400000;
            document.getElementById("GTSelect").value = 12;
            generalTax = 0.12;
        } else if (difficulty == 3) {
            document.getElementById("SBSelect").value = 200000;
            startingBudget = 200000;
            document.getElementById("GTSelect").value = 16;
            generalTax = 0.16;
        } else if (difficulty == 4) {
            document.getElementById("SBSelect").value = "";
            startingBudget = "";
            document.getElementById("GTSelect").value = "";
            generalTax = "";
        }
});

let playerBudget;
SBSelect.addEventListener('click', (e) => {
    document.getElementById('SBSelect').value = playerBudget;
});

let shareScreen = document.getElementById("SCSelect"); 
// Handles options for SCSelect menu popup
shareScreen.addEventListener("change", (e) => {
    shareScreen = document.getElementById("SCSelect").value;
});

let generalTax = document.getElementById("GTSelect");  
// Handles options for SBSelect menu popup
generalTax.addEventListener("change", (e) =>generalTaxFunction());

// Default Tax Value
document.getElementById("GTSelect").value = 9; 
generalTax = 0.09;


shareScreen = 1;
let AI = false;
let playerAmount = "";
let players = [];

function playerCreation(a) {
    playerAmount = PCSelect.value;
    for (let i = 0; i < playerAmount; i++) {
        players.push(player = {
            budget: a,
            property: [],
            doubles: 0,
            jailed: false,
            goCounter: 0,
            playerPosition: 0,
        });
    }
    console.log(players)
    // for(let player of players){
    //     player.goCounter = 3;
    //     console.log(player.goCounter);
    // }
}

function pcLogo() {
    var players = document.querySelectorAll('.player');
    for (var i = 0; i < playerAmount.length && i < players.length; i++) {
        players[i].classList.add('active');
        players[i].classList.remove('inactive');
    }
}