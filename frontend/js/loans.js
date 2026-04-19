const API = "http://localhost:5000/api"

document.getElementById("loanForm").onsubmit = async function(e){

e.preventDefault()

const data = {

title: document.getElementById("title").value,
amount: Number(document.getElementById("amount").value),
date: new Date()

}

await fetch(API+"/loans/add",{

method:"POST",
headers:{
"Content-Type":"application/json"
},
body:JSON.stringify(data)

})

alert("Loan Added Successfully")

window.location.href="dashboard.html"

}