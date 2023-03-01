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

let main = document.getElementById("main");
function SettingsMenu() {
    difficultySliderSettings = true;
    document.getElementById('startButton').style.display = 'none';
    document.getElementById('introIcon').style.display = 'none';

    
    let pageFather = document.createElement('section');
    pageFather.setAttribute('class', 'pageFather');
    main.appendChild(pageFather);

    let settingFather = document.createElement('section');
    settingFather.setAttribute('class', 'settingFather');

    let settingHead = document.createElement('p');
    settingHead.setAttribute('class', 'settingHead');
    settingHead.innerText = 'Settings';

    let settingHandler = document.createElement('div');
    settingHandler.setAttribute('class', 'settingHandler');

    let playerCountHandler = document.createElement('form');
    playerCountHandler.setAttribute('class', 'playerCountHandler');
    
    let playerCountSelect = document.createElement('select');
    playerCountSelect.setAttribute('class', 'playerCountSelect');

    optionCreation();
    
    let playerCountText = document.createElement('p');
    playerCountText.setAttribute('class', 'playerCountText');

    let difficultyHandler = document.createElement('div');
    difficultyHandler.setAttribute('class', 'difficultyHandler');

    settingHandler.appendChild(playerCountHandler);
    settingHandler.appendChild(difficultyHandler);
    playerCountHandler.appendChild(playerCountSelect);

    pageFather.appendChild(settingHead);
    pageFather.appendChild(settingHandler);

    startGameButton.addEventListener('click', (event) => {
        startGame();
    });
    let startGameButton = document.createElement('button');
}

function optionCreation() {
    let playerCountOption1 = document.createElement('option');
    playerCountOption1.setAttribute('value', 1);

    let playerCountOption2 = document.createElement('option');
    playerCountOption2.setAttribute('value', 2);

    let playerCountOption3 = document.createElement('option');
    playerCountOption3.setAttribute('value', 3);
    
    let playerCountOption4 = document.createElement('option');
    playerCountOption4.setAttribute('value', 4);

    let playerCountOption5 = document.createElement('option');
    playerCountOption5.setAttribute('value', 5);
    
    let playerCountOption6 = document.createElement('option');
    playerCountOption5.setAttribute('value', 6);

    let playerCountOption7 = document.createElement('option');
    playerCountOption5.setAttribute('value', 7);

    let playerCountOption8 = document.createElement('option');
    playerCountOption5.setAttribute('value', 8);

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
let playerAmount = 0;
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

    // Elements of the game that will change

    let world = {
        worldEvent: "none",
        president: "none"
    }
}

// Event 3: Game 

