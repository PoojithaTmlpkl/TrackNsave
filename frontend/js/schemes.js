const API = "http://localhost:5000/api"

async function loadSchemes(){

const schemes = await fetch(API+"/schemes").then(res=>res.json())

const list = document.getElementById("schemesList")

list.innerHTML=""

schemes.forEach(s=>{

list.innerHTML += `
<li>
<strong>${s.name}</strong><br>
${s.description}
</li>
`

})

}

loadSchemes()