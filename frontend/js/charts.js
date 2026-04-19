const ctx=document.getElementById("trendChart")

new Chart(ctx,{
type:"bar",
data:{
labels:["Jan","Feb","Mar","Apr","May","Jun"],
datasets:[
{
label:"Savings",
data:[75000,70000,72000,80000,90000,85000]
},
{
label:"Expenses",
data:[30000,35000,32000,40000,37000,36000]
}
]
}
})