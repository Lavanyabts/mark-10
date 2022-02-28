const billAmount = document.querySelector("#bill-amount");
const cashGiven = document.querySelector("#cash-given");
const checkButton = document.querySelector("#check-button");
const message = document.querySelector("#error-message");
const noOfNotes = document.querySelectorAll(".no-of-notes");

const availableNotes = [2000, 500, 100, 20, 10, 5, 1];

checkButton.addEventListener("click", function validateBillAndCashAmount()
{
    hideMessage();
    if (billAmount.value > 0) {
        if (cashGiven.value >= billAmount.value) {
            const amountToBeReturned = cashGiven.value - billAmount.value; // 2022 - 12 = 2010
            calculateChange(amountToBeReturned);
        } else {
            showMessage("Do you wanna wash plates?");
        }
    } else {
        showMessage("Invalid Bill Amount");
    }
});

function calculateChange(amountToBeReturned) {
    for (let i = 0; i < availableNotes.length; i++) {
        
        const numberOfNotes = Math.trunc(
            amountToBeReturned / availableNotes[i]
        );
       
        amountToBeReturned = amountToBeReturned % availableNotes[i];
        noOfNotes[i].innerText = numberOfNotes;
    }
}

/* hideMessage();
var bill = Number(billAmount.value);
var cash = Number(cashGiven.value);
if (bill > 0) {
    if (cash >= bill) {
        const returnAmount = cash - bill;
        calculateChange(returnAmount);
    }
    else {
        showMessage("Cash given can't be less than the bill amount");
        calculateChange(0);
    }
}
else {
    showMessage("Invalid bill amount");
    calculateChange(0);
}
});

function calculateChange(returnAmount) {
for(let i=0; i<availableNotes.length; i++) {
    const numberOfNotes = Math.trunc( returnAmount / availableNotes[i] );
    returnAmount %= availableNotes[i];
    noOfNotes[i].innerText = numberOfNotes;
}
} */

function hideMessage() {
    message.style.display = "none"; 
} 

function showMessage(msg) {
    Message.style.display = "block";
    Message.innerText = msg; 
}