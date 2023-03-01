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

let main = document.getElementById("main");
function SettingsMenu() {
    difficultySliderSettings = true;
    document.getElementById('event0').style.display = 'none';
    document.getElementById('event1').style.display = 'inline';
    document.getElementById('footer').style.display = "none";
    optionCreation();
    difficultyCreation();
    
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

    difficultyOptions.appendChild(difficultyCountOption1);
    difficultyOptions.appendChild(difficultyCountOption2);
    difficultyOptions.appendChild(difficultyCountOption3);
    difficultyOptions.appendChild(difficultyCountOption4);
}

function optionCreation() {
    let playerCountOption1 = document.createElement('option');
    playerCountOption1.setAttribute('value', 1);
    playerCountOption1.innerText = '1 player';

    let playerCountOption2 = document.createElement('option');
    playerCountOption2.setAttribute('value', 2);
    playerCountOption2.innerText = '2 players';

    let playerCountOption3 = document.createElement('option');
    playerCountOption3.setAttribute('value', 3);
    playerCountOption3.innerText = '3 players';
    
    let playerCountOption4 = document.createElement('option');
    playerCountOption4.setAttribute('value', 4);
    playerCountOption4.innerText = '4 players';

    let playerCountOption5 = document.createElement('option');
    playerCountOption5.setAttribute('value', 5);
    playerCountOption5.innerText = '5 players';
    
    let playerCountOption6 = document.createElement('option');
    playerCountOption6.setAttribute('value', 6);
    playerCountOption6.innerText = '6 players';

    let playerCountOption7 = document.createElement('option');
    playerCountOption7.setAttribute('value', 7);
    playerCountOption7.innerText = '7 players';

    let playerCountOption8 = document.createElement('option');
    playerCountOption8.setAttribute('value', 8);
    playerCountOption8.innerText = '8 players';

    playerCountSelect.appendChild(playerCountOption1);
    playerCountSelect.appendChild(playerCountOption2);
    playerCountSelect.appendChild(playerCountOption3);
    playerCountSelect.appendChild(playerCountOption4);
    playerCountSelect.appendChild(playerCountOption5);
    playerCountSelect.appendChild(playerCountOption6);
    playerCountSelect.appendChild(playerCountOption7);
    playerCountSelect.appendChild(playerCountOption8);
}

// Event 2: Settings / customizable options


let AI = false;
let playerAmount = 1;
let players = [];

playerAmount = playerCountSelect.value

function playerCreation() {
    if (playerAmount == 1) {
        // CREATE PLAYER AND AI 
        players.push(player1);
        AI = true;
    } else if (playerAmount == 2) {
        players.push(player1);
        players.push(player2);
    } else if (playerAmount == 3) {
        players.push(player1);
        players.push(player2);
        players.push(player3);
    } else if (playerAmount == 4) {
        players.push(player1);
        players.push(player2);
        players.push(player3);
        players.push(player4);
    } else if (playerAmount == 5) {
        players.push(player1);
        players.push(player2);
        players.push(player3);
        players.push(player4);
        players.push(player5);
    } else if (playerAmount == 6) {
        players.push(player1);
        players.push(player2);
        players.push(player3);
        players.push(player4);
        players.push(player5);
        players.push(player6);
    } else if (playerAmount == 7) {
        players.push(player1);
        players.push(player2);
        players.push(player3);
        players.push(player4);
        players.push(player5);
        players.push(player6);
        players.push(player7);
    } else if (playerAmount == 8) {
        players.push(player1);
        players.push(player2);
        players.push(player3);
        players.push(player4);
        players.push(player5);
        players.push(player6);
        players.push(player7);
        players.push(player8);
        alert("Game has reached maximum player capacity.")
    } else if (playerAmount > 8) {  // (If Player count is greater than 8)
        players.push(player1);
        players.push(player2);
        players.push(player3);
        players.push(player4);
        players.push(player5);
        players.push(player6);
        players.push(player7);
        players.push(player8);
        alert("Game has reached maximum player capacity.")
    } else {
        alert("The PlayerAmount variable is not doing what it should.");
    }
}

    // Elements of the game that will change

    let world = {
        worldEvent: "none",
        president: "none"
    }

// Event 3: Game 

    //daniel says holla
    //Mason says salve
    //Lucas says SANCTUS DOMINUS
    //Mark says nyob zoo