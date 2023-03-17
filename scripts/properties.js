let properties = [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]

// const tiles = [
//     [document.getElementById("cell01")]
// ]

let tiles = [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]

//Playerposition equals as follows:
// GO = 0
// Candyland = 1
// CHEST = 2
// Corndog Castle = 3
// IRS Audit = 4
// Delta Airlines = 5
// Mount President Face = 6
// Statue of Liberty = 7
// Chance = 8
// Pearl Harbor = 9
// Jail = 10
// Mark Yang Tech Mueseum = 11
// Elec. Bill = 12
// Mason Peters Architect Center = 13
// Lucas Cox Clinic = 14
// Sputnik Express = 15
// Caesar's Palace = 16
// Chest = 17
// S.C. Casino = 18
// AG Turtle Preservation = 19
// Bank Loan = 20
// NORAD = 21
// Chance = 22
// The Pentagon = 23
// Area 51 = 24
// USS Montana = 25
// Col. Corn. Lighthouse = 26
// Fredbear's Family Diner = 27
// Water Works = 28
// Pious Sanctuary = 29
// Go to jail = 30
// Fast Fusion = 31
// MA Solar = 32
// Chest = 33
// DeLaRosa Atomic = 34
// American Ambulance = 35
// Chance = 36
// Trump Tower = 37
// Luxury Tax = 38
// Empire State Building = 39

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
    properties[players[x].playerPosition] = properties[players[x].playerPosition] + 1
}

function payRent(x) {
    players[x].budget = players[x].budget - (propertyData[players[x].playerPostion][1]) //Current Player pays rent on whatever property they are on
}

function chanceDetect() {
    if (players[turnCycle].playerPosition  == 8 || 22 || 36) { // If player is on chance tile or chest tile
        if (players[turnCycle].playerPosition  == 8 || 22 || 36) { //Make sure to add all 3 chest cards
            performChanceCard();
        } else {
            console.log("The code does not recognize the player is on a chance card")
        }
    }
}

function chestDetect() {
    if (players[turnCycle].playerPosition == 2 || 17 || 33) {
        if (players[turnCycle].playerPosition == 2 || 17 || 33) {
            performChestCard();
        } else {
            console.log("The code does not recognize the player is on a chest card")
        }
    }
}

// daniel was here :> 
// Consider eating some bananas later mason 
// I do not know for sure, but there is a chance I am allergic to bananas actually. - Mason