let billAmount = document.getElementById("billAmount");
let people = document.getElementById("numPeople");
// let tipAmount = document.getElementById("tipAmount");
// let tipButtons = document.querySelectorAll(".tip-btn");
let calculateBtn = document.getElementById("calculateBtn")
let resetButton = document.getElementById("resetBtn");
let displayBill = document.getElementById("amountPerPerson")
function calculateBill(){
    let bill = parseInt(billAmount.value)
    let totalPeople = parseInt(people.value)
    if (isNaN(bill) || isNaN(totalPeople) || totalPeople <= 0){
        alert("Please enter valid bill amount and number of people.")
        return
    }
    let split = bill / totalPeople
    displayBill.innerText = `Each Person Owes:${split.toFixed(2)}`
}
calculateBtn.addEventListener('click', calculateBill)
resetButton.addEventListener('click', ()=>{
    billAmount.value = ""
    people.value = ""
    displayBill.innerText = "Each Person Owes: $0.00"
})