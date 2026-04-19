document.getElementById("loginForm").addEventListener("submit", async function(e){

e.preventDefault();

const phone = document.getElementById("phone").value;
const password = document.getElementById("password").value;

try{

const res = await fetch("/api/auth/login",{

method:"POST",

headers:{
"Content-Type":"application/json"
},

body: JSON.stringify({
phone: phone,
password: password
})

});

const data = await res.json();

if(data.success){

localStorage.setItem("user", JSON.stringify(data.user));

alert("Login Successful");

window.location.href="dashboard.html";

}else{

alert("Invalid phone or password");

}

}catch(err){

alert("Login error");

}

});