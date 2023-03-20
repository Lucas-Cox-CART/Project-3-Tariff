let properties = [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]

// const tiles = [
//     [document.getElementById("cell01")]
// ]

let tiles = [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]

//Use cell[x] to determine playerPosition for now on. 

function propertyIdentify(x,y) { //This function determines what property the player is on
    if (players[x].playerPosition != 8 || 22 || 36 || 2 || 17 || 33 || 4 || 38 || 0 || 10 || 20 || 30) {
        if (properties[x] = 0) {
            playProperty();
        } else if (properties[x] = 1) {
            payRent(y);
        }
    }
}

function playProperty(x) {
    if (properties[players[x].playerPosition] == 0) {
        if (players[x].budget > propertyData[players[x].playerPostion][10]) {
        players[x].budget = players[x].budget - propertyData[players[x].playerPostion][10];
        properties[players[x].playerPosition] = players[x]
        } else {
            //turn end or something
        }
    } else if (properties[players[x].playerPosition] == players[x]) {
        if (players[x].budget > propertyData[players[x].playerPostion][8]) {
        buyBuildings();
        } else {
            //turn end or something
        }
    } else {
        players[x].budget = players[x].budget - (propertyData[players[x].playerPostion][1])
    }
    //maybe move turn end call to here
}

function buyBuildings() { //for buying houses and whatnot
 //some function to create UI to choose to buy house or not
    if (players[x].playerposition == 11 || players[x].playerposition == 27) {
        //turn end
    } else {

    }
} 

function chanceDetect(turnCycle) {
    if (players[turnCycle].playerPosition  == 38 || players[turnCycle].playerPosition == 12 || players[turnCycle].playerPosition == 26){ // If player is on chance tile or chest tile
            performChanceCard();
            console.log("It works");
    } else {
        console.log("The Code does not recognize the player is on a chance card");
    }
}

function chestDetect(turnCycle) {
    if (players[turnCycle].playerPosition == 7 || players[turnCycle].playerPosition == 32 || players[turnCycle].playerPosition == 23) {
        performChestCard();
        console.log("It works");
    } else {
        console.log("The code does not recognize the player is on a chest card");
    }
}

function extrasDetect() {
    if (players[turnCycle].playerPosition ==  2) {
        players[turnCycle].budget = players[turnCycle].budget - (players[turnCycle].budget * (generalTax + 0.15));
    }
    //If the player lands on the elec. bill, they have to pay generalTax + 0.15.
    if (players[turnCycle].playerPosition ==  18) {
        if (players[turnCycle].budget > 37500) {
            //Display option for if they want to buy water works
            players[turnCycle].property.push(propertyData[26]);
        }
    }
    //If the player lands on water works, they have the option to buy it. It can not be expanded on like properties. 
    if (players[turnCycle].playerPosition ==  36) {
        players[turnCycle].budget = players[turnCycle].budget - (players[turnCycle].budget * (generalTax + 0.15));
        //Functions the same as the elec.bill
    }
}

// daniel was here :> 
// Consider eating some bananas later mason 
// I do not know for sure, but there is a chance I am allergic to bananas actually. - Jason from Friday the 13th (I had my birthday on Friday the 13th 2 years ago >:) )