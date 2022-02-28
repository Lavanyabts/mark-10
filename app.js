const billAmount = document.querySelector("#bill-amount");
const cashGiven = document.querySelector("#cash-given");
const checkButton = document.querySelector("#check-button");
const message = document.querySelector("#error-message");
const noOfNotes = document.querySelectorAll(".no-of-notes");

const availableNotes = [2000, 500, 100, 20, 10, 5, 1];

checkButton.addEventListener("click", function validateBillAndCashAmount()

hideMessage();
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
}



/* {
  hideMessage();
  var bill = Number(billAmount.value);
  var cash = Number(cashGiven.value);
  if (bill > 0) {
      if (cash >= bill) {
          const returnAmount = cash - bill;
          calculateChange(returnAmount);
    } else 
    {
        showMessage("Do You Wanna Make DosaBater?");
        calculateChange(0);
    } 
} else {
    showMessage("Invalid Bill Amount");
    calculateChange(0);
}
});

function calculateChange() {
    for (let i=0; i<availableNotes.length; i++) {
        const numberOfNotes = Math.trunc(
            returnAmount / availableNotes[i]
        );
        returnAmount %= availableNotes[i];
      noOfNotes[i].innerText = numberOfNotes;  
    }
}  */

function hideMessage() {
    message.style.display = "none"; 
} 

function showMessage(msg) {
    Message.style.display = "block";
    Message.innerText = msg; 
}