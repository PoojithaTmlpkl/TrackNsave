const API = "http://localhost:5000/api"

document.getElementById("expenseForm").onsubmit = async function(e){

e.preventDefault()

const data = {

title: document.getElementById("title").value,
amount: Number(document.getElementById("amount").value),
category: document.getElementById("category").value,
date: new Date()

}

await fetch(API+"/expenses/add",{

method:"POST",
headers:{
"Content-Type":"application/json"
},
body:JSON.stringify(data)

})

alert("Expense Added Successfully")

window.location.href="dashboard.html"

}