let gameBoard = document.getElementById('event2sub');

let world = {
    worldEventCooldown: false,
    worldEvent: 'none',
    president: 'none'
}

function startGame() {
    if (shareScreen == 1) {
        alert("You need to select an option for Share Screen.");
    } else {
        document.getElementById('event1').style.display = 'none';
        document.getElementById('event2').style.display = 'flex';
        playerCreation(startingBudget);

        ini();
    }
    pcLogo();
}

function ini() {

}

let diceValue1;
let diceValue2;
let movement;

function rollDice(x) {
    diceValue1 = (Math.random(1-6) * 6).toFixed(0);
    diceValue2 = (Math.random(1-6) * 6).toFixed(0);
    if (players[x].jailed == true) {
        if (diceValue1 == diceValue2) {
            playerMove(x)
        } else {
            goCheck(x)
        }
    } else {
        playerMove(x)
    }
}

function playerMove(x) {
    movement = diceValue1 + diceValue2;
    players[x].playerPosition = players[x].playerPosition + movement;
    if (diceValue1 == diceValue2) {
        players[x].doubles = players[x].doubles + 1;
    } else {
        goCheck(x)
    }
    if (players[x].playerPosition >= 40) { 
        for (i = players[x].playerPositon; i >= 40; players[x].playerPosition = players[x].playerPosition - 40) {
            players[x].goCounter = players[x].goCounter + 1;
        }
    }
    // if (players[x].playerPosition >= 40) {
    //     players[x].playerPosition = players[x].playerPosition - 40;
    //     players[x].goCounter = players[x].goCounter + 1;
    if (players[x].doubles == 3) {
        players[x].jailed = true;
        goCheck(x);
    }
}

function goCheck(x) {
    if (players[x].goCounter == 2) {
        if (world.worldEventCooldown == false) {
            beginEvent();
            world.worldEventCooldown = true;
        } else {
            playerTurnEnd(turnCycle);
        }
    } else if (players[x].goCounter == 4) {
        for (let player of players) {
            player.goCounter = 0;
        }
        for (let player of players) {
            player.playerPosition = 0;
        }
        beginElection();
    } else {
        playerTurnEnd(x);
    }
}

function playerTurnEnd(x) {
    console.log(players[x].goCounter)
    console.log(players[x].playerPosition)
    console.log(players[x].budget)
    console.log(players[x].jailed)
    console.log(players[x].doubles)
    turnCycle = turnCycle + 1;
    if (turnCycle == playerAmount) {
        turnCycle = 0;
    }
    if (players[x].jailed == true) {
        players[x].playerPosition = 10 //jail position
    }
    players[x].doubles = 0;
    diceValue1 = 0;
    diceValue2 = 0;
}

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
