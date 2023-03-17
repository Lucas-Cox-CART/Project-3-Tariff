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
    let electCandidates = [
        { 
            name: `Colby Kirk`,
            quote: `" Science demands we blow up the sun. "`
        },
        {
            name: 'Colby Olsen',
            quote: `" Every child should own a gun. "`
        },
        {
            name: 'Lucas Cox',
            quote: `" free juicer crocs fr fr no cap on god cuh "`
        },
        {
            name: 'Ethan Racca',
            quote: ` "anything for murica' "`
        },
        {
            name: 'Zach Ghosoph',
            quote: `" anything for hivemind' "`
        },
        {
            name: 'Mason Peters',
            quote: `" mass-cloning? mass-workers :) "`
        },
        {
            name: 'Paul Ziowalski',
            quote: `" anarchy. "`
        },
        {
            name: 'Justus Pettit',
            quote: `" how much gold for that rock? "`
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

function beginEvent() {

}

// world events 

const worldEvents = [
    ["Pandemic 1", "The pandemic has started! Lucky for you you get a 15000 stimulus, but... inflation is up 10%. Tread lightly. "],
    ["Pandemic 2", "Well that is not good... 5% inflation.... and you get only half your annual income!"],
    ["Bull Market", "At the end of every player's turn, the price of all stats on properties rise by 5-20%."],
    ["Recession", "OH NOES! The economy inflated by 15%, and now all properties produce 10% less!"],
    ["Waste of an event", "Some twitter person started up a whole conspiracy where something bad was going to happen. This is stupid. Nothing bad is ever going to happen."],
    ["War", "Some genius decided war is a good idea. This is super good for you! You get +20% extra on annual income... but be careful: Taxes are up."],
    ["Impending doom", "What did you guys do??? You idiots! Now you have to work together to solve this stupid problem. Everyone needs to work together to pitch in a total of 250,000 to fund a defense."],
    ["Technological Revolution", "A revolutionary new invention was just made! One player dominated the market and nearly doubled their income! Every other player wasted valuable resources and lost 20% of their wealth."],
    ["Government Engineering Project" ] //No info given yet
]

function pandemic1() {
    players[0].budget = players[0].budget + 15000;
    players[1].budget = players[1].budget + 15000;
    players[2].budget = players[2].budget + 15000;
    players[3].budget = players[3].budget + 15000;
    players[4].budget = players[4].budget + 15000;
    players[5].budget = players[5].budget + 15000;
    players[6].budget = players[6].budget + 15000;
    players[7].budget = players[7].budget + 15000;
    generalTax = generalTax + 0.1;
}

function pandemic2() {
    generalTax = generalTax + 0.05
    //Pending
}

let technologicalInventionPlayerChooser;
function technologicalInventionWorldEvent() { 
    technologicalInventionPlayerChooser = (Math.random(0-playerAmount -1) * 10).toFixed(0); 
    console.log("Function started")

    if (technologicalInventionPlayerChooser >= 0 && technologicalInventionPlayerChooser < players.length) {
        for (let i = 0; i < players.length; i++) {
            if (i === technologicalInventionPlayerChooser) {
                players[i].budget *= 2;
                console.log("PLAYER " + i + " GETS MONEY");
            } else {
                players[i].budget *= 0.20;
            }
        }
    }
}

function wasteOfAnEventWorldEvent() {
    //What did you expect was going to happen?
}

function bullMarketWorldEvent() {
    //Waiting for code pull
}

function recessionWorldEvent() {
    generalTax = generalTax + 0.15;
    //Pending
} 

function warWorldEvent() {
    //Pending
    generalTax // = generalTax + President tax value
}

function impendingDoom() {
    for (i = 4; i > 3; i++) {
    alert('AAAAAAAAAAAAAAAAAAAAAAAAAAAAAA');
    }
}

const propertyData = [
    //[name, rent, house1, house2, house3, house4, hotel, mortgage, pricehouse, pricehotel, purchaseCost]
    ['Go'],
    ['CandyLand', 500, 2500, 7500, 22500, 40000, 62500, 7500, 12500, 50000, 15000],
    ['Chest'],
    ['CornDog Castle', 1000, 5000, 15000, 45000, 80000, 112500, 7500, 12500, 50000, 15000],
    ['IRS Audit'],
    ['Mount President Face', 1500, 7500, 22500, 67500, 100000, 137500, 12500, 12500, 50000, 25000],
    ['Statue of Liberty', 1500, 7500, 22500, 67500, 100000, 137500, 12500, 12500, 50000, 25000],
    ['Chance'],
    ['Pearl Harbor', 2000, 10000, 25000, 75000, 112000, 150000, 15000, 12500, 50000, 30000],
    ['Jail'],
    ['MY Tech Center', 2500, 12500, 37500, 112500, 156300, 187500, 17500, 25000, 100000, 35000],
    ['Elec. Bill'],
    ['MP Architect', 2500, 12500, 37500, 112500, 156300, 187500, 17500, 25000, 100000, 35000],
    ['LC Clinic', 3000, 15000, 45000, 125000, 175000, 225000, 20000, 25000, 100000, 40000],
    ['Sputnik Express'],
    ['Ceasar Palace', 3500, 17500, 50000, 137500, 187500, 237500, 22500, 25000, 100000, 45000],
    ['Chest'],
    ['Sun City Casino', 3500, 17500, 50000, 137500, 187500, 237500, 22500, 25000, 100000, 45000],
    ['AG Turtle Preservation', 4000, 20000, 55000, 150000, 200000, 250000, 25000, 25000, 100000, 50000],
    ['BankLoan'],
    ['NORAD', 4500, 22500, 62500, 175000, 218750, 262500, 27500, 37500, 150000, 55000],
    ['Chance'],
    ['The Pentagon', 4500, 22500, 62500, 175000, 218750, 262500, 37500, 37500, 150000, 55000],
    ['Area51', 5000, 25000, 75000, 187500, 231250, 275000, 30000, 37500, 150000, 60000],
    ['USS Montana']
    ['Col. Corn Lighthouse', 5500, 27500, 82500, 200000, 243800, 287500, 32500, 37500, 150000, 65000],
    ['Fredbear Family Diner', 5500, 27500, 82500, 200000, 243800, 287500, 32500, 37500, 150000, 65000],
    ['Water Works'],
    ['Pious Sanctuary', 6000, 30000, 90000, 212500, 256500, 256300, 35000, 37500, 150000, 70000],
    ['Go to Jail'],
    ['Fast Fusion', 6500, 32500, 97500, 225000, 275000, 318800, 37500, 50000, 200000, 75000],
    ['MA Solar Field', 6500, 32500, 97500, 225000, 275000, 318800, 37500, 50000, 200000, 75000],
    ['Chest'],
    ['DeLaRosa Atomic', 7000, 37500, 112500, 250000, 300000, 350000, 40000, 50000, 200000, 80000],
    ['American Ambulance'],
    ['Chance'],
    ['Trump Tower', 8700, 43800, 125000, 275000, 325000, 375000, 43700, 50000, 200000, 87500],
    ['Luxury Tax'],
    ['Empire State Building', 12500, 50000, 150000, 350000, 425000, 500000, 50000, 50000, 200000, 100000]
]

const chanceCardData = [
    //There are 10 chance cards
    ['candyLane', 'Advance to Candylane'],
    ['bail', 'Get out of jail free card.'],
    ['capitalGains', '+10,000 capital! You made so much money this year that you need to spend it before the IRS takes it! You must spend 10,000 dollars before the next passing go or else you have to pay interest...'],
    ['bigSneeze', 'ACHOOO. You sneezed to hard you moved back 3 spaces.'],
    ['whaleFishing', 'YOU\'VE BEEN TROLLED! You lost 5000.'],
    ['generalRepairs', 'This one sucks late game... pay 15000 capital for each owned building'],
    ['gospelOfWealth', 'Your kind soul decided to give some money to charity. You donated 10000 capital to one. You lost 10000. How strange.'],
    ['taxEvasion', 'Next time you pass go, there is a 50% chance you will avoid taxes, but also a 50% you get sent to jail.'],
    ['takingRide', 'Move to the nearest transportation tile in front of you.'],
    ['biteOf87', '\" WAS THAT THE BITE OF 87???"\ Advance to Fredbear\'s Family Diner.']
]

const chestCardData = [
    // There are 10 chest cards
    ['framing', '\"IT WAS HIM. I SAW HIM VENT."\ Send one player of your choice to jail.'],
    ['emptyChest', 'Wow. the chest hates you so much it didn\'t even give you any content! Sucks to be you!'],
    ['jailBreak', 'If you are ever in jail, use this and you can get out for free!'],
    ['setBacks', 'You sucked so bad at capitalism that now you have to move back 3 tiles. '],
    ['inheritance', 'Your uncle died. CONGRATS! You inherit 15,000 capital!'],
    ['bigTower', 'LOOK AT YOU GOING BIG!! Advance to the Empire State Building. Do not pass go.'],
    ['opportunist', 'Advance to the closest chance card, and take a card.'],
    ['caughtLackin', 'Timeout corner for you buster.'],
    ['leapYear', 'Advance to go and instantly gain your annual income.']
    ['tardisTax', 'The TARDIS requests tax for a disclosed reason. -20000 capital. ']
]

let chanceAffectedPlayer;
let chanceCard;
let capitalGainsTimer;
let taxEvasionTimer;
function performChanceCard() {
    chanceAffectedPlayer = turnCycle;
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
                    players[chanceAffectedPlayer].budget = players[chanceAffectedPlayer].budget * (generalTax + 1)
                    //No taxes next round
                } else {
                    players[chanceAffectedPlayer].playerPosition = document.getElementById("cell00"); //Go to jail
                }
            }
        }
    } else if (chanceCard == 9) {
        //Takin' a ride
        if (players[chanceAffectedPlayer].playerPosition == document.getElementById("cell38")) {
            players[chanceAffectedPlayer].playerPosition = document.getElementById("cell05");
        } else if (players[chanceAffectedPlayer].playerPosition == document.getElementById("cell12")) {
            players[chanceAffectedPlayer].playerPosition = document.getElementById("cell15");
        } else if (players[chanceAffectedPlayer].playerPosition == document.getElementById("cell26")) {
            players[chanceAffectedPlayer].playerPosition = document.getElementById("cell35");
        } else {
            console.log("Something is going wrong with the takin a ride chance card")
        }
        //Player advances to closest transportation tile
    } else if (chanceCard == 10) {
        //WAS THAT THE BITE OF 87????????
        players[chanceAffectedPlayer].playerPosition = document.getElementById("cell17"); 
        //Player is advanced to Fredbear's family diner
    }
}

let chestAffectedPlayer;
let chestCard;
function performChestCard() {
    console.log("Chest Card started");
    chestAffectedPlayer = turnCycle;
    chestCard = Math.floor(Math.random() * (10 - 1) + 1);
    if (chestCard == 1) {
        //Framing
        //I can not do this at this current time
        console.log("Framing");
    } else if (chestCard == 2) {
        //Empty chest
        //LITTERALLY NOTHING HAPPENS
        console.log("Nothing happens");
    } else if (chestCard == 3) {
        //jailbreak
        //I can not do this at this current time 
    } else if (chestCard == 4) {
        //Set backs
        players[chestAffectedPlayer].playerPosition = players[chestAffectedPlayer].playerPosition - 3;
        console.log("Set backs");
    } else if (chestCard == 5) {
        //Inheritance
        players[chestAffectedPlayer].budget = players[chestAffectedPlayer].budget + 15000;
        console.log("Inhertance");
    } else if (chestCard = 6) {
        //Big Tower 
        players[chestAffectedPlayer].playerPosition = document.getElementById("cell29");
        console.log("Big tower");
    } else if (chestCard = 7) {
        //Opportunist
        if (players[chestAffectedPlayer].playerPosition == document.getElementById("cell33")) {
            players[chestAffectedPlayer].playerPosition = document.getElementById("cell38");
        } else if (players[chestAffectedPlayer].playerPosition == document.getElementById("cell07")) {
            players[chestAffectedPlayer].playerPosition = document.getElementById("cell12");
        } else if (players[chanceAffectedPlayer].playerPosition == document.getElementById("cell23")) {
            players[chestAffectedPlayer].playerPosition = document.getElementById("cell26");
        } else {
            console.log("Something is going wrong with the opportunist card")
        }
    } else if (chestCard = 8) {
        //CaughtLackin'
        players[chestAffectedPlayer].jailed = true;
        players[chestAffectedPlayer].playerPosition = document.getElementById("cell00");
        console.log("Caught Lackin");
    } else if (chestCard = 9) {
        //Leap Year
        players[chestAffectedPlayer].playerPosition = document.getElementById("cell30");
        // CAN NOT FINISH THIS BECAUSE WE DONT HAVE AN ANNUAL INCOME VARIABLE YET. 
        console.log("Leap year");
    } else if (chestCard = 10) {
        //Tardis Taxes
        players[chestAffectedPlayer].budget = players[chestAffectedPlayer].budget - 20000;
        console.log("Tardis Taxes");
    } else {
        console.log("Weird.");
    }
} 