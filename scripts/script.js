let tiles = [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]

/* Board Information */
//multi-dimensional array
let gridBoard = [
    [0,0,0,0,0,0,0,0,0,0], // y 0, x 0-9
    [0,0,0,0,0,0,0,0,0,0], // y 1, x 0-9
    [0,0,0,0,0,0,0,0,0,0], // y 2, x 0-9
    [0,0,0,0,0,0,0,0,0,0]  // y 3, x 0-9 
];

//more useful where x,y coordinates are used... battleship, tic-tac-toe... topleft space is gridBoard[0][0], bottom right is gridBoard[3][3] or think about it as gridBoard[y][x]
//numbers in your arrays may be used to represent the 'state' of that board space... which player is there, what kind of space it is etc...

// ----------------------------------------
// Event 0: Setting up the game & getting things ready
// ----------------------------------------
let difficultySliderSettings = false;
document.getElementById('event1').style.display = 'none';
document.getElementById('event2').style.display = 'none';

let main = document.getElementById('main'); 
function SettingsMenu() {
    difficultySliderSettings = true;
    document.getElementById('event0').style.display = 'none';
    document.getElementById('event1').style.display = 'inline';
    document.getElementById('footer').style.display = 'none';
    optionCreation();
    difficultyCreation();
    shareScreenCreation();
}

function difficultyCreation() {  // Displays clickable options inside "difficulty"
    let difficultyCountOption1 = document.createElement('option');
    difficultyCountOption1.setAttribute('value', 1);
    difficultyCountOption1.innerText = 'Easy';

    let difficultyCountOption2 = document.createElement('option');
    difficultyCountOption2.setAttribute('value', 2);
    difficultyCountOption2.innerText = 'Normal';

    let difficultyCountOption3 = document.createElement('option');
    difficultyCountOption3.setAttribute('value', 3);
    difficultyCountOption3.innerText = 'Hard';
    
    let difficultyCountOption4 = document.createElement('option');
    difficultyCountOption4.setAttribute('value', 4);
    difficultyCountOption4.innerText = 'Custom';

    difficultySelect.appendChild(difficultyCountOption1);
    difficultySelect.appendChild(difficultyCountOption2);
    difficultySelect.appendChild(difficultyCountOption3);
    difficultySelect.appendChild(difficultyCountOption4);
    difficultyStartingBudgetManager(); // This sets the default "easy" number value 
    
}

// Displays clickable options inside "player". This one is subject to change
function optionCreation() {
    let playerCountOption1 = document.createElement('option');
    playerCountOption1.setAttribute('value', 1);
    playerCountOption1.innerText = '1 Player';

    let playerCountOption2 = document.createElement('option');
    playerCountOption2.setAttribute('value', 2);
    playerCountOption2.innerText = '2 Players';

    let playerCountOption3 = document.createElement('option');
    playerCountOption3.setAttribute('value', 3);
    playerCountOption3.innerText = '3 Players';
    
    let playerCountOption4 = document.createElement('option');
    playerCountOption4.setAttribute('value', 4);
    playerCountOption4.innerText = '4 Players';

    let playerCountOption5 = document.createElement('option');
    playerCountOption5.setAttribute('value', 5);
    playerCountOption5.innerText = '5 Players';
    
    let playerCountOption6 = document.createElement('option');
    playerCountOption6.setAttribute('value', 6);
    playerCountOption6.innerText = '6 Players';

    let playerCountOption7 = document.createElement('option');
    playerCountOption7.setAttribute('value', 7);
    playerCountOption7.innerText = '7 Players';

    let playerCountOption8 = document.createElement('option');
    playerCountOption8.setAttribute('value', 8);
    playerCountOption8.innerText = '8 Players';

    playerCountSelect.appendChild(playerCountOption1);
    playerCountSelect.appendChild(playerCountOption2);
    playerCountSelect.appendChild(playerCountOption3);
    playerCountSelect.appendChild(playerCountOption4);
    playerCountSelect.appendChild(playerCountOption5);
    playerCountSelect.appendChild(playerCountOption6);
    playerCountSelect.appendChild(playerCountOption7);
    playerCountSelect.appendChild(playerCountOption8);
}

// Displays clickable options inside "shareScreenCreation"
function shareScreenCreation() {
    let shareScreenCountNull = document.createElement('option');
    shareScreenCountNull.setAttribute('value', 1);
    shareScreenCountNull.innerText = '--', null;

    let shareScreenCountOption1 = document.createElement('option');
    shareScreenCountOption1.setAttribute('value', 2);
    shareScreenCountOption1.innerText = 'Yes', true;
    
    let shareScreenCountOption2 = document.createElement('option');
    shareScreenCountOption2.setAttribute('value', 3);
    shareScreenCountOption2.innerText = 'No', false;

    shareScreenSelect.appendChild(shareScreenCountNull);
    shareScreenSelect.appendChild(shareScreenCountOption1);
    shareScreenSelect.appendChild(shareScreenCountOption2);
}

let startingBudget = document.getElementById('startingBudgetSelect');
let playerBudget;
startingBudget.addEventListener('click', (e) => {
    document.getElementById('startingBudgetSelect').value = playerBudget;
});

// ----------------------------------------
// Event 1: Settings / customizable options
// ----------------------------------------

let shareScreen = document.getElementById("shareScreenSelect"); // Handles options for shareScreenSelect menu popup
shareScreen.addEventListener("change", (e) =>shareScreenFunction());

function shareScreenFunction(){
    shareScreen = document.getElementById("shareScreenSelect").value;
}

let difficulty = document.getElementById("difficultySelect");  // Handles options for difficultySelect menu popup
difficulty.addEventListener("change", (e) =>difficultyFunction());
difficulty.addEventListener("change", (e) =>difficultyStartingBudgetManager());
function difficultyFunction(){
    difficulty = document.getElementById("difficultySelect").value;
}

// Handles options for startingBudgetSelect menu popup
startingBudget.addEventListener("change", (e) =>startingBudgetFunction());

function startingBudgetFunction() {
    startingBudget = document.getElementById("startingBudgetSelect").value;
}

// sets default value when event 1 starts 
document.getElementById("startingBudgetSelect").value = 600000; 
startingBudget = 600000;

// default settings for difficulty, this code changes the "startingBudgetSelect" value when one of the presets are clicked. The starting budget will be left empty/blank when the "custom" value is set for difficulty.
function difficultyStartingBudgetManager(){ 
    if (difficulty == NaN || difficulty == 1) {
        document.getElementById("startingBudgetSelect").value = 600000;
        startingBudget = 600000;
    } else if (difficulty == 2) {
        document.getElementById("startingBudgetSelect").value = 400000;
        startingBudget = 400000;
    } else if (difficulty == 3) {
        document.getElementById("startingBudgetSelect").value = 200000;
        startingBudget = 200000;
    } else if (difficulty == 4) {
        document.getElementById("startingBudgetSelect").value = "";
        startingBudget = "";
    }
}

let AI = false;
let playerAmount = 1;
let players = [];

function playerCreation(a) {
    playerAmount = playerCountSelect.value;
    for (let i = 0; i < playerAmount; i++) {
        players.push(player = {
            budget: a,
            property: 'none',
            doubles: 0,
            jailed: false
        });
    }
    console.log(players)
}

let world = {
    worldEvent: 'none',
    president: 'none',
    goCounter: 0
}

// ----------------------------------------
// Event 2: Game starts
// ----------------------------------------

function startGame() {
    document.getElementById('event1').style.display = 'none';
    document.getElementById('event2').style.display = 'flex';
    document.getElementById('event2').style.display = 'none';
    playerCreation(StartingBudget);
}

//daniel says holla
//Mason says salve
//Lucas says SANCTUS DOMINUS
//Mark says nyob zoo