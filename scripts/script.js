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

// Preparing the game

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

function difficultyCreation() {
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
}

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
startingBudget.addEventListener('change', (e) => {
    playerBudget = document.getElementById('startingBudgetSelect').value;
});

// (Temporary comment)
// let startingBudget = document.getElementById("startingBudgetSelect").value;
//     startingBudget.addEventListener("change", (e) => startingBudgetFunction());

//     function startingBudgetFunction(){
//        startingBudget = document.getElementById("startingBudgetSelect").value;
//     }

// Event 2: Settings / customizable options

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
            jailed: true
        });
    }
    console.log(players)
}

// Event 3: Game 
let world = {
    worldEvent: 'none',
    president: 'none'
}

function startGame() {
    document.getElementById('event1').style.display = 'none';
    document.getElementById('event2').style.display = 'none';
    playerCreation(playerBudget);
}

    //daniel says holla
    //Mason says salve
    //Lucas says SANCTUS DOMINUS
    //Mark says nyob zoo