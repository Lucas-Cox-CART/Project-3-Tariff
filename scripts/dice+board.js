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


let dL1 = document.getElementById('dL1');
let dL2 = document.getElementById('dL2');
let diceValue1;
let diceValue2;
let movement;

function rollDice(x) { 
    diceValue1 = Math.floor(Math.random() * (6 - 1) + 1);
    diceValue2 = Math.floor(Math.random() * (6 - 1) + 1);
    if (players[x].jailed == true) {
        if (diceValue1 == diceValue2) {
            playerMove(x);
            dL1.classList.remove(`D${1-6}`);
            dL2.classList.remove(`D${1-6}`);
        }
    } else {
        playerMove(x);
    }

    function diceAnim() {
        switch (diceValue1) {
            case 1: 
                dL1.classList.add('D1');
                break;
            case 2:
                dL1.classList.add('D2');
                break;
            case 3:
                dL1.classList.add('D3');
                break;
            case 4:
                dL1.classList.add('D4');
                break;
            case 5:
                dL1.classList.add('D5');
                break;
            case 6:
                dL1.classList.add('D6');
                break;
        }
        switch (diceValue2) {
            case 1: 
                dL2.classList.add('D1');
                break;
            case 2:
                dL2.classList.add('D2');
                break;
            case 3:
                dL2.classList.add('D3');
                break;
            case 4:
                dL2.classList.add('D4');
                break;
            case 5:
                dL2.classList.add('D5');
                break;
            case 6:
                dL2.classList.add('D6');
                break;
        }
    }
    diceAnim();
}

let playerIcon = document.createElement('div');
function createPlayers() {
    playerIcon.classList.add('active', 'frog');
    cell[30].appendChild(playerIcon);
}

function playerMove(x) { 
    movement = diceValue1 + diceValue2;
    players[x].playerPosition = (players[x].playerPosition + movement) % 40;
    let newPosition = players[x].playerPosition;
    
    cell[newPosition].appendChild(playerIcon);
    // if (cell[x]) {
    //     cell[x].removeChild(playerIcon);
    // }
    
    if (diceValue1 == diceValue2) {
        players[x].doubles = players[x].doubles + 1;
    } else {
        goCheck(x);
    }    
    if (players[x].doubles == 3) {
        if (cell[x].hasChildNodes()) {
            cell[x].removeChild(playerIcon); 
        }
        players[x].jailed = true;
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

//Everything above is good and clear

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
        playerTurnEnd();
    }
}

function playerTurnEnd(turnCycle) {
    console.log(players[turnCycle].goCounter);
    console.log(players[turnCycle].playerPosition);
    console.log(players[turnCycle].budget);
    console.log(players[turnCycle].jailed);
    console.log(players[turnCycle].doubles);
    turnCycle = turnCycle + 1;
    if (turnCycle == playerAmount) {
        turnCycle = 0;
    }
    if (players[turnCycle].jailed == true) {
        players[turnCycle].playerPosition = 10; // jail positionasdasdashdnasdfhyiaf
    }
    if (diceValue1 != diceValue2) {
        players[turnCycle].doubles = 0;
    }
    diceValue1 = 0;
    diceValue2 = 0;
    chanceDetect(x);
    chestDetect(x);
}