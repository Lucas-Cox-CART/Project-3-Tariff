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
function difficultyStartingBudgetManager(){ // default settings for difficulty and generalTax, this code changes the "startingBudgetSelect" value when one of the presets are clicked. The starting budget will be left empty/blank when the "custom" value is set for difficulty 
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
            property: 'none',
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

        rollDice();
        if (goCounter = 4) {
            election();
        }
    }
    
}

function rollDice() {

}

let gameBoard = document.getElementById('event2sub');
function election() {
    let electionAlert = document.createElement('div');
    electionAlert.classList.add('electionAlert');
    gameBoard.appendChild(electionAlert);

    let electionSide1 = document.createElement('div');
    electionSide1.classList.add('electionSide');
    electionAlert.appendChild(electionSide1);

    let electionSide2 = document.createElement('div');
    electionSide2.classList.add('electionSide');
    electionAlert.appendChild(electionSide2);

    let electDiv = [];
    // let electHead = [];
    // let electCont = [];
    let electCandidates = [
        { 
            name: `Colby Kirk`,
            quote: `"Science Rules!" - Bill Nye, The Science Guy`
        },
        {
            name: 'Colby Olsen',
            quote: `"Every child should own a gun."`
        },
        {
            name: 'Lucas Cox',
            quote: "free juicer crocs fr fr no cap on god cuh"
        },
        {
            name: 'Ethan Racca',
            quote: "anything for murica'"
        },
        {
            name: 'Zach Ghosoph',
            quote: "anything for hivemind'"
        },
        {
            name: 'Mason Peters',
            quote: "mass-cloning? mass-workers :)"
        },
        {
            name: 'Paul Ziowalski',
            quote: "anarchy."
        },
        {
            name: 'Justus Pettit',
            quote: "how much gold for that rock?"
        }
    ]

    for (let i = 0; i <= 7; i++) {
        electDiv[i] = document.createElement('div');
        let electHead = document.createElement('h3');
        let electCont = document.createElement('p');
            electHead.innerText = electCandidates[i].name;
            electCont.innerText = electCandidates[i].quote;
        
        electDiv[i].appendChild(electHead);
        electDiv[i].appendChild(electCont);
        electDiv[i].style.display = 'none';
        electionAlert.appendChild(electDiv[i]);
    }

    let CandidateOne;
    function C1Maker() {
        let CandidateOne = Math.floor(Math.random() * 8);
        if (CandidateOne == 0 && CandidateTwo != 0) {
            electionSide1.classList.add('PKirk');
            electDiv[0].style.display = 'flex';
        } else if (CandidateOne == 1 && CandidateTwo != 1) {
            electionSide1.classList.add('POlsen');
            electDiv[1].style.display = 'flex';
        } else if (CandidateOne == 2 && CandidateTwo != 2) {
            electionSide1.classList.add('PCox');
            electDiv[2].style.display = 'flex';
        } else if (CandidateOne == 3 && CandidateTwo != 3) {
            electionSide1.classList.add('PEthan');
            electDiv[3].style.display = 'flex';
        } else if (CandidateOne == 4 && CandidateTwo != 4) {
            electionSide1.classList.add('PZach');
            electDiv[4].style.display = 'flex';
        } else if (CandidateOne == 5 && CandidateTwo != 5) {
            electionSide1.classList.add('PMason');
            electDiv[5].style.display = 'flex';
        } else if (CandidateOne == 6 && CandidateTwo != 6) {
            electionSide1.classList.add('PPaul');
            electDiv[6].style.display = 'flex';
        } else if (CandidateOne == 7 && CandidateTwo != 7) {
            electionSide1.classList.add('PJustus');
            electDiv[7].style.display = 'flex';
        } else {
            C1Maker();
        }
    }

    let CandidateTwo;
    function C2Maker() {
        let CandidateTwo = Math.floor(Math.random() * 7);
        if (CandidateTwo == 0 && CandidateOne != 0) {
            electionSide2.classList.add('PKirk');
            electDiv[0].style.display = 'flex';
        } else if (CandidateTwo == 1 && CandidateOne != 1) {
            electionSide2.classList.add('POlsen');
            electDiv[1].style.display = 'flex';
        } else if (CandidateTwo == 2 && CandidateOne != 2) {
            electionSide2.classList.add('PCox');
            electDiv[2].style.display = 'flex';
        } else if (CandidateTwo == 3 && CandidateOne != 3) {
            electionSide2.classList.add('PEthan');
            electDiv[3].style.display = 'flex';
        } else if (CandidateTwo == 4 && CandidateOne != 4) {
            electionSide2.classList.add('PZach');
            electDiv[4].style.display = 'flex';
        } else if (CandidateTwo == 5 && CandidateOne != 5) {
            electionSide2.classList.add('PMason');
            electDiv[5].style.display = 'flex';
        } else if (CandidateTwo == 6 && CandidateOne != 6) {
            electionSide2.classList.add('PPaul');
            electDiv[6].style.display = 'flex';
        } else if (CandidateTwo == 7 && CandidateOne != 7) {
            electionSide2.classList.add('PJustus');
            electDiv[7].style.display = 'flex';
        } else {
            C2Maker();
        }
    }
    C1Maker();
    C2Maker();
}

    //daniel says holla
    //Mason says salve
    //Lucas says SANCTUS DOMINUS
    //Mark says nyob