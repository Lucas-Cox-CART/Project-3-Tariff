let gameBoard = document.getElementById('event2sub');

let world = {
    worldEventCooldown: false,
    worldEvent: 'none',
    president: 'none'
};

function startGame() {
    if (shareScreen == 1) {
        alert("You need to select an option for Share Screen.");
    } else {
        document.getElementById('event1').style.display = 'none';
        document.getElementById('event2').style.display = 'flex';
        playerCreation(startingBudget);
    }
    pcLogo();
    createPlayers();
}

let cell = [];
for (let i = 0; i < 40; i++) {
    cell[i] = document.getElementById(`cell${i}`);
}

let diceValue1;
let diceValue2;
let movement;

function rollDice(x) {
    diceValue1 = Math.round(Math.random() * 5) + 1;
    diceValue2 = Math.round(Math.random() * 5) + 1;
    if (players[x].jailed == true) {
        if (diceValue1 == diceValue2) {
            playerMove(x)
        }
    } else {
        playerMove(x)
    }
}

let playerIcon;
function createPlayers() {
    playerIcon = document.createElement('div');
    playerIcon.classList.add('active', 'frog');
    cell[30].appendChild(playerIcon);
}

function playerMove(x) {
    movement = diceValue1 + diceValue2;
    players[x].playerPosition = (players[x].playerPosition + movement) % 40;
    let newPosition = players[x].playerPosition;
    
    cell[newPosition].appendChild(playerIcon);
    if (cell[x]) {
        cell[x].removeChild(playerIcon);
    }
    
    if (diceValue1 == diceValue2) {
        players[x].doubles = players[x].doubles + 1;
    } else {
        goCheck(x)
    }    
    if (players[x].doubles == 3) {
        players[x].jailed = true;
        cell[x].removeChild(playerIcon);
        cell[0].appendChild(playerIcon);
        players[x].doubles = 10;
    }
}

function buyProperty() {
    let purchaseAlert = document.createElement('div');
    purchaseAlert.classList.add('purchaseAlert');
    gameBoard.appendChild(purchaseAlert);
    
    if (players[turnCycle].budget > (propertyData[players[x].playerPostion][10])) {
        players[turnCycle].property.push(propertyData[players[turnCycle].playerPostion]);
    } 
    playerTurnEnd(x);
}

function goCheck(x) {
    if (players[x].goCounter == 2) {
        if (world.worldEventCooldown == false) {
            beginEvent();
            world.worldEventCooldown = true; // Cooldown will be turned false when the worldEvent ends
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
        election();
    } else {
        buyProperty();
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
    if (diceValue1 != diceValue2) {
        players[x].doubles = 0
    }
    diceValue1 = 0;
    diceValue2 = 0;
    chanceDetect()
    chestDetect()
}

/* Board Information */
//multi-dimensional array
//The midday sun can elminate the dark of night. It can happen either way. Night dreams of day, and light dreams of darkness, and the sun is a giant ignorant mass of gas. It releases a huge amount of hot energy to track down and set ablaze every shadow... eventually burning up all of itself