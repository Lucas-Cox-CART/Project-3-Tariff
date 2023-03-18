let properties = [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]

// const tiles = [
//     [document.getElementById("cell01")]
// ]

let tiles = [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]

//Use cell[x] to determine playerPosition for now on. 

function propertyIdentify(x,y) { //This function determines what property the player is on
    if (players[x].playerPosition != 8 || 22 || 36 || 2 || 17 || 33 || 4 || 38 || 0 || 10 || 20 || 30) {
        if (properties[x] = 0) {
            purchaseProperty()
        } else if (properties[x] = 1) {
            payRent(y)
        }
    }
}

function purchaseProperty(x) {
    players[x].budget = players[x].budget - (propertyData[players[x].playerPostion][10])
    properties[players[x].playerPosition] = properties[players[ x].playerPosition] + 1
}

function payRent(x) {
    players[x].budget = players[x].budget - (propertyData[players[x].playerPostion][1]) //Current Player pays rent on whatever property they are on
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
        console.log("It works")
    } else {
        console.log("The code does not recognize the player is on a chest card")
    }
}

// daniel was here :> 
// Consider eating some bananas later mason 
// I do not know for sure, but there is a chance I am allergic to bananas actually. - Jason from Friday the 13th (I had my birthday on Friday the 13th 2 years ago >:) )