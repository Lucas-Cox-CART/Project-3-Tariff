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
document.getElementById('event1').style.display = 'none';
document.getElementById('event2').style.display = 'none';

let main = document.getElementById('main'); 
function SettingsMenu() {
    difficultySliderSettings = true;
    document.getElementById('event0').style.display = 'none';
    document.getElementById('event1').style.display = 'inline';
    document.getElementById('footer').style.display = 'none';
    optionCreation();
    difficultyCreation();
    shareScreenCreation();
}

// Event 2: Settings

function difficultyCreation() {  
    // Displays clickable options inside "difficulty"
    let difficultyCountOption1 = document.createElement('option');
    difficultyCountOption1.setAttribute('value', 1);
    difficultyCountOption1.innerText = 'Easy';

    let difficultyCountOption2 = document.createElement('option');
    difficultyCountOption2.setAttribute('value', 2);
    difficultyCountOption2.innerText = 'Normal';

    let difficultyCountOption3 = document.createElement('option');
    difficultyCountOption3.setAttribute('value', 3);
    difficultyCountOption3.innerText = 'Hard';
    
    let difficultyCountOption4 = document.createElement('option');
    difficultyCountOption4.setAttribute('value', 4);
    difficultyCountOption4.innerText = 'Custom';

    difficultySelect.appendChild(difficultyCountOption1);
    difficultySelect.appendChild(difficultyCountOption2);
    difficultySelect.appendChild(difficultyCountOption3);
    difficultySelect.appendChild(difficultyCountOption4);
    difficultyStartingBudgetManager(); 
    // This sets the default "easy" number value 
    
}

function optionCreation() { 
    // Displays clickable options inside "player". This one is subject to change
    let playerCountOption1 = document.createElement('option');
    playerCountOption1.setAttribute('value', 1);
    playerCountOption1.innerText = '1 Player';

    let playerCountOption2 = document.createElement('option');
    playerCountOption2.setAttribute('value', 2);
    playerCountOption2.innerText = '2 Players';

    let playerCountOption3 = document.createElement('option');
    playerCountOption3.setAttribute('value', 3);
    playerCountOption3.innerText = '3 Players';
    
    let playerCountOption4 = document.createElement('option');
    playerCountOption4.setAttribute('value', 4);
    playerCountOption4.innerText = '4 Players';

    let playerCountOption5 = document.createElement('option');
    playerCountOption5.setAttribute('value', 5);
    playerCountOption5.innerText = '5 Players';
    
    let playerCountOption6 = document.createElement('option');
    playerCountOption6.setAttribute('value', 6);
    playerCountOption6.innerText = '6 Players';

    let playerCountOption7 = document.createElement('option');
    playerCountOption7.setAttribute('value', 7);
    playerCountOption7.innerText = '7 Players';

    let playerCountOption8 = document.createElement('option');
    playerCountOption8.setAttribute('value', 8);
    playerCountOption8.innerText = '8 Players';

    playerCountSelect.appendChild(playerCountOption1);
    playerCountSelect.appendChild(playerCountOption2);
    playerCountSelect.appendChild(playerCountOption3);
    playerCountSelect.appendChild(playerCountOption4);
    playerCountSelect.appendChild(playerCountOption5);
    playerCountSelect.appendChild(playerCountOption6);
    playerCountSelect.appendChild(playerCountOption7);
    playerCountSelect.appendChild(playerCountOption8);
}

function shareScreenCreation() { 
    // Displays clickable options inside "shareScreenCreation"
    let shareScreenCountNull = document.createElement('option');
    shareScreenCountNull.setAttribute('value', 1);
    shareScreenCountNull.innerText = '--', null;

    let shareScreenCountOption1 = document.createElement('option');
    shareScreenCountOption1.setAttribute('value', 2);
    shareScreenCountOption1.innerText = 'Yes', true;
    
    let shareScreenCountOption2 = document.createElement('option');
    shareScreenCountOption2.setAttribute('value', 3);
    shareScreenCountOption2.innerText = 'No', false;

    shareScreenSelect.appendChild(shareScreenCountNull);
    shareScreenSelect.appendChild(shareScreenCountOption1);
    shareScreenSelect.appendChild(shareScreenCountOption2);
}

let shareScreen = document.getElementById("shareScreenSelect"); 
// Handles options for shareScreenSelect menu popup
    shareScreen.addEventListener("change", (e) =>shareScreenFunction());

    function shareScreenFunction(){
        shareScreen = document.getElementById("shareScreenSelect").value;
    }

let difficulty = document.getElementById("difficultySelect");  
// Handles options for difficultySelect menu popup
    difficulty.addEventListener("change", (e) =>difficultyFunction());
    difficulty.addEventListener("change", (e) =>difficultyStartingBudgetManager());
    function difficultyFunction(){
        difficulty = document.getElementById("difficultySelect").value;
    }

let startingBudget = document.getElementById("startingBudgetSelect");  
// Handles options for startingBudgetSelect menu popup
    startingBudget.addEventListener("change", (e) =>startingBudgetFunction());

    function startingBudgetFunction(){
        startingBudget = document.getElementById("startingBudgetSelect").value;
    }

let generalTax = document.getElementById("generalTaxSelect");  
// Handles options for startingBudgetSelect menu popup
    generalTax.addEventListener("change", (e) =>generalTaxFunction());


document.getElementById("startingBudgetSelect").value = 600000; 
// sets default value when event 1 starts 
startingBudget = 600000;

document.getElementById("generalTaxSelect").value = 9; 
// sets default value when event 1 starts 
generalTax = 0.09;

shareScreen = 1;

function startingBudgetFunction(){
    startingBudget = document.getElementById("startingBudgetSelect").value;
}
let playerBudget;
startingBudgetSelect.addEventListener('click', (e) => {
    document.getElementById('startingBudgetSelect').value = playerBudget;
});

document.getElementById("startingBudgetSelect").value = 600000;
startingBudget = 600000;
function difficultyStartingBudgetManager(){ 
    //When a difficulty is selected, it sets these predetermined values. (General tax and starting budget)
    if (difficulty == NaN || difficulty == 1) {
        document.getElementById("startingBudgetSelect").value = 600000;
        startingBudget = 600000;
        document.getElementById("generalTaxSelect").value = 9;
        generalTax = 0.09;
    } else if (difficulty == 2) {
        document.getElementById("startingBudgetSelect").value = 400000;
        startingBudget = 400000;
        document.getElementById("generalTaxSelect").value = 12;
        generalTax = 0.12;
    } else if (difficulty == 3) {
        document.getElementById("startingBudgetSelect").value = 200000;
        startingBudget = 200000;
        document.getElementById("generalTaxSelect").value = 16;
        generalTax = 0.16;
    } else if (difficulty == 4) {
        document.getElementById("startingBudgetSelect").value = "";
        startingBudget = "";
        document.getElementById("generalTaxSelect").value = "";
        generalTax = "";
    }
}

let funnyCounter = 0;
function generalTaxFunction(){ 
    //Handles options for the generalTax variable, and also has a funny thing I made during break
    generalTax = document.getElementById("generalTaxSelect").value / 100;
    
    if (document.getElementById("generalTaxSelect").value >= 80 && funnyCounter == 0) {
        alert("WHOAH WHOAH WHOAH")
        alert("WHY WOULD YOU DO THIS TO YOURSELF??")
        alert("I AM NOT ALLOWING THAT. YOU DO NOT PUT YOURSELF THROUGH THAT");
        document.getElementById("generalTaxSelect").value = 25;
        generalTax = 0.25;
        alert("I AM CHANGING THIS. DON'T YOU EVER DO THAT AGAIN.")
        alert("YOU CAN THANK ME LATER.")
        funnyCounter = 1;
    } else if (document.getElementById("generalTaxSelect").value >= 80 && funnyCounter == 1) {
        alert("SERIOUSLY?");
        alert("DO YOU VALUE SELF-PAIN THAT MUCH??");
        alert("I AM WARNING YOU.");
        alert("YOU SHOULD NOT DO THAT.");
        alert("HERE. HERE IS A CHALLENGE.");
        alert("I HOPE YOU ARE HAPPY WITH YOURSELF.");
        document.getElementById("generalTaxSelect").value = 35;
        generalTax = 0.35;
        funnyCounter = 2;
    } else if (document.getElementById("generalTaxSelect").value >= 80 && funnyCounter == 2) {
        alert("Bruh.")
        alert("I don't get it.")
        alert("I KEEP TRYING TO WARN YOU.")
        alert("THIS IS MY LAST WARNING.")
        alert("STOP.")
        alert("DOING.")
        alert("THAT.")
        alert("I WILL RAISE IT TO 40%. AND THAT IS FINAL.")
        document.getElementById("generalTaxSelect").value = 40;
        generalTax = 0.40;
        funnyCounter = 3;
    } else if (document.getElementById("generalTaxSelect").value >= 80 && funnyCounter == 3) {
        alert("Alright.")
        alert("I see how it is.")
        alert("Fine.")
        alert("No more changing it.")
        alert("You clearly don't want to listen to me.")
        alert("No general tax for you.")
        document.getElementById("generalTaxSelect").value = 1;
        generalTax = 1;
        document.getElementById('funnyHiddenThing').style.display = 'none';
    } 
}

let AI = false;
let playerAmount = 1;
let players = [];

function playerCreation(a) {
    playerAmount = playerCountSelect.value;
    for (let i = 0; i < playerAmount; i++) {
        players.push(player = {
            budget: a,
            property: [],
            doubles: 0,
            jailed: false,
            goCounter: 0,
            playerPosition: 0,
        });
    }
    console.log(players)
}

playerAmount = playerCountSelect.value;

// Event 3: Game 
let world = {
    worldEventCooldown: false,
    worldEvent: 'none',
    president: 'none'
}

// ----------------------------------------
// Event 2: Game starts
// ----------------------------------------

function startGame() {
    if (shareScreen == 1) {
        alert("You need to select an option for Share Screen.");
    } else {
        document.getElementById('event1').style.display = 'none';
        document.getElementById('event2').style.display = 'flex';
        playerCreation(startingBudget);

        rollDice()
        election()
    }
    
}

function rollDice() {

}

// world events 
let technologicalInventionPlayerChooser;
function technologicalInventionWorldEvent() { // random player gets 2x budget multiplier every other other player gets budget reduced by 20%
    technologicalInventionPlayerChooser = (Math.random(0-playerAmount -1) * 10).toFixed(0); 
    console.log("Function started")

        if (technologicalInventionPlayerChooser == 0 ) {
            players[0].budget = players[0].budget * 2;
            players[1].budget = players[1].budget * 0.20;
            players[2].budget = players[2].budget * 0.20;
            players[3].budget = players[3].budget * 0.20;
            players[4].budget = players[4].budget * 0.20;
            players[5].budget = players[5].budget * 0.20;
            players[6].budget = players[6].budget * 0.20;
            players[7].budget = players[7].budget * 0.20;
            console.log("PLAYER 0 GETS MONEY")
        } else if (technologicalInventionPlayerChooser == 1) {
            players[1].budget = players[1].budget * 2;
            players[0].budget = players[0].budget * 0.20;
            players[2].budget = players[2].budget * 0.20;
            players[3].budget = players[3].budget * 0.20;
            players[4].budget = players[4].budget * 0.20;
            players[5].budget = players[5].budget * 0.20;
            players[6].budget = players[6].budget * 0.20;
            players[7].budget = players[7].budget * 0.20;
            console.log("PLAYER 1 GETS MONEY")
        } else if (technologicalInventionPlayerChooser == 2) {
            players[2].budget = players[2].budget * 2;
            players[0].budget = players[0].budget * 0.20;
            players[1].budget = players[1].budget * 0.20;
            players[3].budget = players[3].budget * 0.20;
            players[4].budget = players[4].budget * 0.20;
            players[5].budget = players[5].budget * 0.20;
            players[6].budget = players[6].budget * 0.20;
            players[7].budget = players[7].budget * 0.20;
            console.log("PLAYER 2 GETS MONEY")
        } else if (technologicalInventionPlayerChooser == 3) {
            players[3].budget = players[3].budget * 2;
            players[0].budget = players[0].budget * 0.20;
            players[1].budget = players[1].budget * 0.20;
            players[2].budget = players[2].budget * 0.20;
            players[4].budget = players[4].budget * 0.20;
            players[5].budget = players[5].budget * 0.20;
            players[6].budget = players[6].budget * 0.20;
            players[7].budget = players[7].budget * 0.20;
            console.log("PLAYER 3 GETS MONEY")
        } else if (technologicalInventionPlayerChooser == 4) {
            players[4].budget = players[4].budget * 2;
            players[0].budget = players[0].budget * 0.20;
            players[1].budget = players[1].budget * 0.20;
            players[2].budget = players[2].budget * 0.20;
            players[3].budget = players[3].budget * 0.20;
            players[5].budget = players[5].budget * 0.20;
            players[6].budget = players[6].budget * 0.20;
            players[7].budget = players[7].budget * 0.20;
            console.log("PLAYER 4 GETS MONEY")
        } else if (technologicalInventionPlayerChooser == 5) {
            players[5].budget = players[5].budget * 2;
            players[0].budget = players[0].budget * 0.20;
            players[1].budget = players[1].budget * 0.20;
            players[2].budget = players[2].budget * 0.20;
            players[3].budget = players[3].budget * 0.20;
            players[4].budget = players[4].budget * 0.20;
            players[6].budget = players[6].budget * 0.20;
            players[7].budget = players[7].budget * 0.20;
            console.log("PLAYER 5 GETS MONEY")
        } else if (technologicalInventionPlayerChooser == 6) {
            players[6].budget = players[6].budget * 2;
            players[0].budget = players[0].budget * 0.20;
            players[1].budget = players[1].budget * 0.20;
            players[2].budget = players[2].budget * 0.20;
            players[3].budget = players[3].budget * 0.20;
            players[4].budget = players[4].budget * 0.20;
            players[5].budget = players[5].budget * 0.20;
            players[7].budget = players[7].budget * 0.20;
            console.log("PLAYER 6 GETS MONEY")
        } else if (technologicalInventionPlayerChooser == 7) {
            players[7].budget = players[7].budget * 2;
            players[0].budget = players[0].budget * 0.20;
            players[1].budget = players[1].budget * 0.20;
            players[2].budget = players[2].budget * 0.20;
            players[3].budget = players[3].budget * 0.20;
            players[4].budget = players[4].budget * 0.20;
            players[5].budget = players[5].budget * 0.20;
            players[6].budget = players[6].budget * 0.20;
            console.log("PLAYER 7 GETS MONEY")
        } else {
            technologicalInventionWorldEvent();
        }
    }
   
let bullMarketActive = false;
let bullMarketCounter;
let bullMarketCounterLimit;
// W I P
function bullMarketWorldEvent() { //After the end of any player's turn, the price of stock goes up anywhere between 5% - 20%, lasts 2-8 passes of go. 
    bullMarketActive = true;
    bullMarketCounterLimit = (Math.random() * (8 - 2) + 2).toFixed(0); //Picks random number ranging between 2-8
    while (bullMarketCounter != bullMarketCounterLimit) {
        if (bullMarketCounter != bullMarketCounterLimit) {
            bullMarketActive = true;
        } else {
            bullMarketActive = false
        }
    } 
 }

 //Properties


 const propertyData = [
                   //[name, rent, house1, house2, house3, house4, hotel, mortgage, pricehouse,pricehotel]
                 ['CandyLand', 500, 2500, 7500, 22500, 40000, 62500, 7500, 12500, 50000],
            ['CornDog Castle', 1000, 5000, 15000, 45000, 80000, 112500, 7500, 12500, 50000],
      ['Mount President Face', 1500, 7500, 22500, 67500, 100000, 137500, 12500, 12500, 50000],
         ['Statue of Liberty', 1500, 7500, 22500, 67500, 100000, 137500, 12500, 12500, 50000],
              ['Pearl Harbor', 2000, 10000, 25000, 75000, 112000, 150000, 15000, 12500, 50000],
            ['MY Tech Center', 2500, 12500, 37500, 112500, 156300, 187500, 17500, 25000, 100000],
              ['MP Architect', 2500, 12500, 37500, 112500, 156300, 187500, 17500, 25000, 100000],
                 ['LC Clinic', 3000, 15000, 45000, 125000, 175000, 225000, 20000, 25000, 100000],
             ['Ceasar Palace', 3500, 17500, 50000, 137500, 187500, 237500, 22500, 25000, 100000],
           ['Sun City Casino', 3500, 17500, 50000, 137500, 187500, 237500, 22500, 25000, 100000],
    ['AG Turtle Preservation', 4000, 20000, 55000, 150000, 200000, 250000, 25000, 25000, 100000],
                     ['NORAD', 4500, 22500, 62500, 175000, 218750, 262500, 27500, 37500, 150000],
              ['The Pentagon', 4500, 22500, 62500, 175000, 218750, 262500, 37500, 37500, 150000],
                    ['Area51', 5000, 25000, 75000, 187500, 231250, 275000, 30000, 37500, 150000],
      ['Col. Corn Lighthouse', 5500, 27500, 82500, 200000, 243800, 287500, 32500, 37500, 150000],
     ['Fredbear Family Diner', 5500, 27500, 82500, 200000, 243800, 287500, 32500, 37500, 150000],
           ['Pious Sanctuary', 6000, 30000, 90000, 212500, 256500, 256300, 35000, 37500, 150000],
               ['Fast Fusion', 6500, 32500, 97500, 225000, 275000, 318800, 37500, 50000, 200000],
            ['MA Solar Field', 6500, 32500, 97500, 225000, 275000, 318800, 37500, 50000, 200000],
          ['DeLaRosa Atomic ', 7000, 37500, 112500, 250000, 300000, 350000, 40000, 50000, 200000],
              ['Trump Tower ', 8700, 43800, 125000, 275000, 325000, 375000, 43700, 50000, 200000],
    ['Empire State Building ', 12500, 50000, 150000, 350000, 425000, 500000, 50000, 50000, 200000]
 ]

 const chanceCardData = [
    ['candyLane', 'Advance to Candylane'],
    ['bail', 'Get out of jail free card.'],
    ['capitalGains', '+10,000 capital! You made so much money this year that you need to spend it before the IRS takes it! You must spend 10,000 dollars before the next passing go or else you have to pay interest...'],
    ['bigSneeze', 'ACHOOO. You sneezed to hard you moved back 3 spaces.'],
    ['whaleFishing', 'YOU\'VE BEEN TROLLED! You lost 5000.'],
    ['generalRepairs', 'This one sucks late game... pay 15000 capital for each owned building'],
    ['gospelOfWealth', 'Your kind soul decided to give some money to charity. You donated 10000 capital to one. You lost 10000. How strange.'],
    ['taxEvasion', 'Next time you pass go, there is a 50% chance you will avoid taxes, but also a 50% you get sent to jail.'],
    ['takingRide', 'Move to the nearest transportation tile.'],
    ['biteOf87', '\" WAS THAT THE BITE OF 87???"\ Advance to Fredbear\'s Family Diner.']
 ]

 const chestCardData = [
    ['framing', '\" IT WAS HIM. I SAW HIM VENT."\ Send one player of your choice to jail.'],
    ['emptyChest', 'Wow. the chest hates you so much it didn\'t even give you any content! Sucks to be you!'],
    ['jailBreak', 'If you are ever in jail, use this and you can get out for free!'],
    ['setBacks', 'You sucked so bad at capitalism that now you have to move back 3 tiles. '],
    ['inheritance', 'Your uncle died. CONGRATS! You inherit 15,000 capital!'],
    ['bigTower', 'LOOK AT YOU GOING BIG!! Advance to the Empire State Building. Do not pass go.'],
    ['opportunist', 'Take a chance card. No questions asked.'],
    ['caughtLackin', 'Timeout corner for you buster.'],
    ['leapYear', 'Advance to go and instantly gain your annual income.']
 ]


 let chanceAffectedPlayer;
 let chanceCard;
 let capitalGainsTimer;
 let taxEvasionTimer;
 function performChanceCard() {
    chanceAffectedPlayer = //turnCounter;
    chanceCard = Math.floor(Math.random() * (10 - 1) + 1);
    if (chanceCard == 1) {
        //candy Lane
        players[chanceAffectedPlayer].playerPosition = document.getElementById("cell31");
    } else if (chanceCard == 2) {
        //bail
        // I can not write this yet
    } else if (chanceCard == 3) {
        //Capital Gains
        players[chanceAffectedPlayer].budget = players[chanceAffectedPlayer].budget + 10000;
        capitalGainsTimer = players[chanceAffectedPlayer].goCounter
        while (capitalGainsTimer != capitalGainsTimer + 1) { //while the player still has not passed go, check if they have.
        if (capitalGainsTimer != capitalGainsTimer + 1) {
                //Do nothing
        } else {
                if (players[chanceAffectedPlayer].budget < players [chanceAffectedPlayer].budget + 10000) {
                    //The good ending
                } else {
                    players[chanceAffectedPlayer].budget = players[chanceAffectedPlayer].budget - (10000 * generalTax)
                    //The bad ending
                }
            }
        }
    } else if (chanceCard == 4) {
        //Big Sneeze
        players[chanceAffectedPlayer].playerPosition = players[chanceAffectedPlayer].playerPosition - 3;
    } else if (chanceCard == 5) {
        //Whale Fishing
        players[chanceAffectedPlayer].budget = players[chanceAffectedPlayer].budget - 5000;
    } else if (chanceCard == 6) {
        //General Repairs
        if (players[chanceAffectedPlayer].property['length'] == 0) {
            //Do nothing
        } else {
            players[chanceAffectedPlayer].budget = players[chanceAffectedPlayer].budget - (15000 * players[chanceAffectedPlayer].property['length']); 
        }
    } else if (chanceCard == 7) {
        //Gospel of Wealth
        players[chanceAffectedPlayer].budget = players[chanceAffectedPlayer].budget - 10000
    } else if (chanceCard == 8) {
        //Tax Evasion
        taxEvasionTimer = players[chanceAffectedPlayer].budget;
        while (players[chanceAffectedPlayer].goCounter === taxEvasionTimer) {
            if (players[chanceAffectedPlayer].goCounter != taxEvasionTimer) {
                if ((Math.floor(Math.random() * (100 - 1) + 1)) <= 50) {
                    players[chanceAffectedPlayer].budget = players[chanceAffectedPlayer].budget * generalTax.toFixed(0)
                    //Make it so they don't get taxes. 
                }
            }
        }
    }

 }

// let gameBoard = document.getElementById('event2sub');
// function election() {
//     let electionAlert = document.createElement('div');
//     electionAlert.setAttribute('class', 'electionAlert');
//     gameBoard.appendChild(electionAlert);

//     let electionSide1 = document.createElement('div');
//     electionSide1.setAttribute('class', 'electionSide');
//     electionAlert.appendChild(electionSide1);

//     let electionSide2 = document.createElement('div');
//     electionSide2.setAttribute('class', 'electionSide');
//     electionAlert.appendChild(electionSide2);

//     if (true) {
//         electionSide1.setAttribute('class', 'PKirk');
//         electionSide2.setAttribute('class', 'POlsen');
//     }
// }

    //daniel says holla
    //Mason says salve
    //Lucas says SANCTUS DOMINUS
    //Mark says nyob