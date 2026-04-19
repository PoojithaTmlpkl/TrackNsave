const API = "http://localhost:5000/api";

document.getElementById("savingForm").onsubmit = async function(e){

e.preventDefault();

const data = {
title: document.getElementById("title").value,
amount: Number(document.getElementById("amount").value),
date: new Date()
};

await fetch(API + "/savings/add",{
method: "POST",
headers:{
"Content-Type": "application/json"
},
body: JSON.stringify(data)
});

alert("Saving Added Successfully");

window.location.href = "dashboard.html";

};