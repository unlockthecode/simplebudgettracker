let budget = 0;
let totalExpenses = 0;

function updateDisplay() {
    document.getElementById("display-budget").textContent = budget;
    document.getElementById("display-expenses").textContent = totalExpenses;
    document.getElementById("remaining-balance").textContent = budget - totalExpenses;
}

function setBudget(){
    budget = parseFloat(document.getElementById("budget").value);
    if (isNaN(budget) || budget < 0){
        alert("Please enter a valid budget!")
        return;
    }
    updateDisplay()
}

function addExpense() {
    let expenseName = document.getElementById("expense").value;
    let expenseValue = parseFloat(document.getElementById("expense-value").value);

    if (!expenseName || isNaN(expenseValue) || expenseValue <= 0) {
        alert("Please enter a valid expense!");
        return;
    }

    totalExpenses += expenseValue;

    let expenseList = document.getElementById("expenses-list");
    let listItem = document.createElement("li");
    listItem.textContent = `${expenseName}: ₱${expenseValue}`;
    expenseList.appendChild(listItem);

    updateDisplay();
}

function clearAll() {
    budget = 0; 
    document.getElementById("budget").value = "";
    totalExpenses = 0;
    document.getElementById("expenses-list").innerHTML = "";
    document.getElementById("expense").value = "";
    document.getElementById("expense-value").value = "";
    updateDisplay(); 
}