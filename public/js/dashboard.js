const token = localStorage.getItem("token")

async function loadDashboard(){

const savings = await fetch("/api/savings",{
headers:{ "Authorization": token }
})

const savingsData = await savings.json()

const expenses = await fetch("/api/expenses",{
headers:{ "Authorization": token }
})

const expenseData = await expenses.json()

let totalSavings = savingsData.reduce((a,b)=>a+b.amount,0)
let totalExpenses = expenseData.reduce((a,b)=>a+b.amount,0)

document.getElementById("totalSavings").innerText=totalSavings
document.getElementById("totalExpenses").innerText=totalExpenses


new Chart(document.getElementById("financeChart"),{

type:"bar",

data:{
labels:["Savings","Expenses"],
datasets:[{
data:[totalSavings,totalExpenses]
}]
}

})

}

function logout(){

localStorage.removeItem("token")
window.location.href="login.html"

}

loadDashboard()