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
            quote: `" Science Rules! " - Bill Nye, The Science Guy`
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