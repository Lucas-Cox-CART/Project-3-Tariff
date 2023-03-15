let difficultySliderSettings = false;
document.getElementById('event1').style.display = 'none';
document.getElementById('event2').style.display = 'none';

/* This function causes main page and footer to disappear, and causes Settings 
menu to appear. Also calls other Settings functions. */
function SettingsMenu() {
    difficultySliderSettings = true;
    document.getElementById('event0').style.display = 'none';
    document.getElementById('event1').style.display = 'inline';
    document.getElementById('footer').style.display = 'none';
}

let difficulty = document.getElementById("difficultySelect");  
// Handles options for difficultySelect menu popup
difficulty.addEventListener("change", (e) => {
    difficulty = document.getElementById('difficultySelect').value;
});

document.getElementById("startingBudgetSelect").value = 600000; 
let startingBudget = document.getElementById("startingBudgetSelect");  

// Handles options for startingBudgetSelect menu popup
startingBudget.addEventListener("change", (e) => {
    startingBudget = document.getElementById("startingBudgetSelect").value;
});


// Default Settings for Easy, Normal, and Hard Difficulties.
difficulty.addEventListener("change", (e) => {
        if (difficulty == NaN || difficulty == 1) {
            document.getElementById("startingBudgetSelect").value = 600000;
            startingBudget = 600000;
            document.getElementById("generalTaxSelect").value = 9;
            generalTax = 0.09;
        } else if (difficulty == 2) {
            document.getElementById("startingBudgetSelect").value = 400000;
            startingBudget = 400000;
            document.getElementById("generalTaxSelect").value = 12;
            generalTax = 0.12;
        } else if (difficulty == 3) {
            document.getElementById("startingBudgetSelect").value = 200000;
            startingBudget = 200000;
            document.getElementById("generalTaxSelect").value = 16;
            generalTax = 0.16;
        } else if (difficulty == 4) {
            document.getElementById("startingBudgetSelect").value = "";
            startingBudget = "";
            document.getElementById("generalTaxSelect").value = "";
            generalTax = "";
        }
});

let playerBudget;
startingBudgetSelect.addEventListener('click', (e) => {
    document.getElementById('startingBudgetSelect').value = playerBudget;
});

let shareScreen = document.getElementById("shareScreenSelect"); 
// Handles options for shareScreenSelect menu popup
shareScreen.addEventListener("change", (e) => {
    shareScreen = document.getElementById("shareScreenSelect").value;
});

let generalTax = document.getElementById("generalTaxSelect");  
// Handles options for startingBudgetSelect menu popup
generalTax.addEventListener("change", (e) =>generalTaxFunction());

// Default Tax Value
document.getElementById("generalTaxSelect").value = 9; 
generalTax = 0.09;


shareScreen = 1;
let AI = false;
let playerAmount = "";
let players = [];
let turnCycle = 0;

function playerCreation(a) {
    playerAmount = playerCountSelect.value;
    for (let i = 0; i < playerAmount; i++) {
        players.push(player = {
            budget: a,
            property: 'none',
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