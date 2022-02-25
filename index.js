const billAmount = document.querySelector("#bill-amount");
const cashGiven = document.querySelector("#cash-given");
const checkButton = document.querySelector("#check-button");
const message = document.quesrySelector("#error-message");
const noOfNotes = document.querySelector(".no-of-notes");
const availableNotes = [2000, 500, 100, 20, 10, 5, 1];
checkButton.addEventListener("click",Function validateBillAndCashAmount() {
 hideMessage();
if (billAmount.value > 0)
 {
     if (cashGiven.value >= billAmount.value) {
         const amountToBeReturned = cashGiven.value - billAmount.value;
         calculateChanges(amountToBeReturned);
     } else {
        showMessage(
            "The Cash Provided Should Atleast Be Equal To The Bill Amount");
     }
 } else {
     showMessage("invalidBillAmount");
 } 
});

function calculateChanges(amountToBeReturned)
{
    for(let i=0; i<availableNotes.length; i++) {
        const numberOfNotes = Math.trunc(
            amountToBeReturned/amountToBeReturned[i]
        );

        amountToBeReturned = amountToBeReturned % availableNotes[i];
        noOfNotes[i].innerText = numberOfNotes;
    }
}

function hidenMessage() {
    message.style.display = "none";
}

function showMessage(msg) 
  {
    message.style.display = "block";
    message.innerText = msg;
  }

}