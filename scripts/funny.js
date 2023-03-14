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