let gameBoard = document.getElementById('E2R');

let world = {
    worldEventCooldown: false,
    worldEvent: 'none',
    president: 'none'
};

function startGame() {
    if (shareScreen == 1) {
        alert("You need to select an option for Share Screen.");
    } else {
        document.getElementById('E1').style.display = 'none';
        document.getElementById('E2').style.display = 'flex';
        playerCreation(startingBudget);
    }
    pcLogo();
    createPlayers();
}

let cell = [];
for (let i = 0; i < 40; i++) {
    cell[i] = document.getElementById(`cell${i}`);
}


let DL1 = document.getElementById('DL1');
let DL2 = document.getElementById('DL2');
let diceValue1;
let diceValue2;
let movement;
let turnCycle = 0;

function rollDice(x) { 
    diceValue1 = Math.floor(Math.random() * (6 - 1) + 1);
    diceValue2 = Math.floor(Math.random() * (6 - 1) + 1);
    if (players[x].jailed == true) {
        if (diceValue1 == diceValue2) {
            playerMove(x);
            DL1.classList.remove(`D${1-6}`);
            DL2.classList.remove(`D${1-6}`);
        }
    } else {
        playerMove(x);
    }

    function diceAnim() {
        switch (diceValue1) {
            case 1: 
                DL1.classList.add('D1');
                break;
            case 2:
                DL1.classList.add('D2');
                break;
            case 3:
                DL1.classList.add('D3');
                break;
            case 4:
                DL1.classList.add('D4');
                break;
            case 5:
                DL1.classList.add('D5');
                break;
            case 6:
                DL1.classList.add('D6');
                break;
        }
        switch (diceValue2) {
            case 1: 
                DL2.classList.add('D1');
                break;
            case 2:
                DL2.classList.add('D2');
                break;
            case 3:
                DL2.classList.add('D3');
                break;
            case 4:
                DL2.classList.add('D4');
                break;
            case 5:
                DL2.classList.add('D5');
                break;
            case 6:
                DL2.classList.add('D6');
                break;
        }
    }
    diceAnim();
}

let playerIcon = document.createElement('span');
function createPlayers() {
    playerIcon.classList.add('active', 'frog');
    cell[1].appendChild(playerIcon);
    players[turnCycle].playerPosition = 30;
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
    if (bullMarket == true) {
        if (players[turnCycle].budget > (propertyData[players[x].playerPostion][10] * bullMarketMultiplier)) {
            players[turnCycle].property.push(propertyData[players[turnCycle].playerPostion]);
            
        } 
    } else if (players[turnCycle].budget > (propertyData[players[x].playerPostion][10])) {
        players[turnCycle].property.push(propertyData[players[turnCycle].playerPostion]);
    }
    playerTurnEnd(x);
}

//Everything above is good and clear

function goCheck(x) {
    if (players[turnCycle].goCounter == 2) { //If the player has passed go twice start a world event
        if (world.worldEventCooldown == false) {
            console.log("World Event started")
            beginEvent();
            world.worldEventCooldown = true; // Cooldown will be turned false when the worldEvent ends
        } else {
            playerTurnEnd(turnCycle);
        }
    } else if (players[turnCycle].goCounter == 4) { //If the player has passed go 4 times start an election
        for (let player of players) {
            player.goCounter = 0;
            player.budget = player.budget + ((50000 + (player.property['length'] * ( 50000 * 0.33))) - ((50000 + (player.property['length'] * ( 50000 * 0.33))) * generalTax));
        }
        for (let player of players) {
            player.playerPosition = cell[0];
        }
        election();
    } else {
        playerTurnEnd();
    }
}

function playerTurnEnd(x) {
    if (capitalGains == true) {
        if (capitalGainsTimer != capitalGainsTimer + 1) { //Checking if capital gains card is active, and if the player has spent more than 10,000 this turn
        //Do nothing
        } else {
            if (players[chanceAffectedPlayer].budget < players [chanceAffectedPlayer].budget + 10000) {
            //The good ending
            capitalGains = false;
            } else {
            players[chanceAffectedPlayer].budget = players[chanceAffectedPlayer].budget - (10000 * generalTax)
            capitalGains = false;
            //The bad ending
            }
        } 
    }
   

    if (players[turnCycle].playerPosition > 30 || (players[turnCycle].playerPosition > 0 && players[turnCycle].playerPosition <= 2)) { //If the player has passed go this turn
        players[turnCycle].goCounter = players[turnCycle].goCounter + 1
        if (recession == true) {
            players[turnCycle].budget = players[turnCycle].budget + ((50000 + (players[turnCycle].property['length'] * ( 50000 * 0.20))) - ((50000 + (players[turnCycle].property['length'] * ( 50000 * 0.20))) * generalTax)) 
        //If Recession is active there is a slight decrease in annual income. 
        } else {
             players[turnCycle].budget = players[turnCycle].budget + ((50000 + (players[turnCycle].property['length'] * ( 50000 * 0.20))) - ((50000 + (players[turnCycle].property['length'] * ( 50000 * 0.20))) * generalTax)) 
        }
       
        //Annual income (Players get more annual income depending on how many properties they own.) The default is 50,000$.
    }
    if (bullMarket == true) {
        bullMarketMultiplier = bullMarketMultiplier + 0.05
    }
    console.log(players[turnCycle].goCounter);
    console.log(players[turnCycle].playerPosition);
    console.log(players[turnCycle].budget);
    console.log(players[turnCycle].jailed);
    console.log(players[turnCycle].doubles);
    turnCycle = turnCycle + 1;
    console.log("The current player is player", turnCycle)
    if (turnCycle == playerAmount) {
        turnCycle = 0;
    }
    if (players[turnCycle].jailed == true) {
        players[turnCycle].playerPosition = cell[0]; // jail position
    }
    if (diceValue1 != diceValue2) {
        players[turnCycle].doubles = 0;
    }
    diceValue1 = 0;
    diceValue2 = 0;
    chanceDetect(turnCycle); //Checks if the player is on a chance tile
    chestDetect(turnCycle); //Checks if the player is on a chest tile
}