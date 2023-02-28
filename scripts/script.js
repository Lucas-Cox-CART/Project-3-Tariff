let tiles = [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]

// a couple ways to store "board" information
// one-dimensionmal array
//let board = [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]; // all 16 spaces indexed 0 - 15 useful for linear games like monopoly, sorry, etc
/*
a 4x4 board
# # # #
# # # #
# # # #
# # # #
*/
//multi-dimensional array
// let gridBoard = [
//     [0,0,0,0], // y 0, x 0-3
//     [0,0,0,0], // y 1, x 0-3
//     [0,0,0,0], // y 2, x 0-3
//     [0,0,0,0]  // y 3, x 0-3
// ];
//more useful where x,y coordinates are used... battleship, tic-tac-toe... topleft space is gridBoard[0][0], bottom right is gridBoard[3][3] or think about it as gridBoard[y][x]

//numbers in your arrays may be used to represent the 'state' of that board space... which player is there, what kind of space it is etc...




// Preparing the game

let DifficultySliderSettings = false;

function StartGame() {
    DifficultySliderSettings = true;
    document.getElementById("StartButton").style.display = "none";
    document.getElementById("introIcon").style.display = "none";
    document.getElementsByClassName("middle").style.display="none";
    let SettingFather = document.createElement("section");
    let SettingHead = document.createElement("p");
    let SettingHandler = document.createElement("div");
    let SettingPlayerCount = document.createElement("div");
}

let playerAmount = 0;

let players = [];

// SETTINGS SECTION 

function playerCreation() {
    if (playerAmount == 1) {
        // CREATE PLAYER AND AI 
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

