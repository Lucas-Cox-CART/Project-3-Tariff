let properties = []

for (i = 0; i < 40; i++) {
    properties.push(null)
}

// const tiles = [
//     [document.getElementById("cell01")]
// ]
// null = {buildings: 0},null = {buildings: 0},null = {buildings: 0},null = {buildings: 0},null = {buildings: 0},null = {buildings: 0},null = {buildings: 0},null = {buildings: 0},null = {buildings: 0},null = {buildings: 0},null = {buildings: 0},null = {buildings: 0},null = {buildings: 0},null = {buildings: 0},null = {buildings: 0},null = {buildings: 0},null = {buildings: 0},null = {buildings: 0},null = {buildings: 0},null = {buildings: 0},null = {buildings: 0},null = {buildings: 0},null = {buildings: 0},null = {buildings: 0},null = {buildings: 0},null = {buildings: 0},null = {buildings: 0},null = {buildings: 0},null = {buildings: 0},null = {buildings: 0},null = {buildings: 0},null = {buildings: 0},null = {buildings: 0},null = {buildings: 0},null = {buildings: 0},null = {buildings: 0},null = {buildings: 0},null = {buildings: 0}
let tiles = [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]

//Use cell[x] to determine playerPosition for now on. 

function propertyIdentify() { //This function determines what property the player is on
    if (players[turnCycle].playerPosition != 9 || players[turnCycle].playerPosition != 23 || players[turnCycle].playerPosition != 37 || players[turnCycle].playerPosition != players[turnCycle].playerPosition != 3 || players[turnCycle].playerPosition != 18 || players[turnCycle].playerPosition != 34 || players[turnCycle].playerPosition != 5 || players[turnCycle].playerPosition != 39 || players[turnCycle].playerPosition != 1 || players[turnCycle].playerPosition != 11 || players[turnCycle].playerPosition != 21 || players[turnCycle].playerPosition != 31) {
    playProperty()
    }
}

let rentedProperty;

function playProperty() {
    if (properties[players[turnCycle].playerPosition] == bl) {
        players[turnCycle].budget = players[turnCycle].budget - (propertyData[players[turnCycle].playerPostion][10]);
        properties[players[turnCycle].playerPosition] = turnCycle = {buildings: 0};
    } else if (properties[players[turnCycle].playerPosition] == turnCycle) {
        buyBuildings();
    } else {
        rentedProperty = properties[players[turnCycle].playerPostion]
        if (propertyData[players[turnCycle].playerPosition].buildings == 0) {
        players[turnCycle].budget = players[turnCycle].budget - (propertyData[players[turnCycle].playerPostion][1]);
        players[rentedProperty].budget = players[rentedProperty].budget + (propertyData[players[turnCycle].playerPostion][1]);
        } else if (propertyData[players[turnCycle].playerPosition].buildings == 1) {
        players[turnCycle].budget = players[turnCycle].budget - (propertyData[players[turnCycle].playerPostion][2]);
        players[rentedProperty].budget = players[rentedProperty].budget + (propertyData[players[turnCycle].playerPostion][2]);
        } else if (propertyData[players[turnCycle].playerPosition].buildings == 2) {
        players[turnCycle].budget = players[turnCycle].budget - (propertyData[players[turnCycle].playerPostion][3]);
        players[rentedProperty].budget = players[rentedProperty].budget + (propertyData[players[turnCycle].playerPostion][3]);
        } else if (propertyData[players[turnCycle].playerPosition].buildings == 3) {
        players[turnCycle].budget = players[turnCycle].budget - (propertyData[players[turnCycle].playerPostion][4]);
        players[rentedProperty].budget = players[rentedProperty].budget + (propertyData[players[turnCycle].playerPostion][4]);
        } else if (propertyData[players[turnCycle].playerPosition].buildings == 4) {
        players[turnCycle].budget = players[turnCycle].budget - (propertyData[players[turnCycle].playerPostion][5]);
        players[rentedProperty].budget = players[rentedProperty].budget + (propertyData[players[turnCycle].playerPostion][5]);
        } else if (propertyData[players[turnCycle].playerPosition].buildings == 5) {
        players[turnCycle].budget = players[turnCycle].budget - (propertyData[players[turnCycle].playerPostion][6]);
        players[rentedProperty].budget = players[rentedProperty].budget + (propertyData[players[turnCycle].playerPostion][6]);
        }
    }
}

function buyBuildings() { //for buying houses and whatnot
 if (properties[players[turnCycle].playerPosition].buildings < 4) {
    if (players[turnCycle].budget < propertyData[players[turnCycle].playerPostion][8]) {
     alert('Not enough money to purchase building');
    } else {
        players[turnCycle].budget - propertyData[players[turnCycle].playerPostion][8];
        properties[players[turnCycle].playerPosition].buildings = properties[players[turnCycle].playerPosition].buildings + 1;
    }
 } else if (properties[players[turnCycle].playerPosition].buildings == 4) {
    if (players[turnCycle].budget < propertyData[players[turnCycle].playerPostion][9]) {
     alert('Not enough money to purchase building');
    } else {
        players[turnCycle].budget - propertyData[players[turnCycle].playerPostion][9];
        properties[players[turnCycle].playerPosition].buildings = properties[players[turnCycle].playerPosition].buildings + 1;
    }
 } else {
    alert('This property cannot have another building')
 }
}

function chanceDetect() {
    if (players[turnCycle].playerPosition  == 3 || players[turnCycle].playerPosition == 9 || players[turnCycle].playerPosition == 22){ // If player is on chance tile or chest tile
            performChanceCard();
            console.log("It works");
    } else {
        console.log("The Code does not recognize the player is on a chance card");
    }
}

function chestDetect() {
    if (players[turnCycle].playerPosition == 18 || players[turnCycle].playerPosition == 3 || players[turnCycle].playerPosition == 33) {
        performChestCard();
        console.log("It works")
    } else {
        console.log("The code does not recognize the player is on a chest card")
    }
}
