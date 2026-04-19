function checkReminder(){

let today = new Date()

let emiDate = new Date("2026-07-10")

let diff = emiDate - today

let days = diff/(1000*60*60*24)

if(days <= 2){

alert("Reminder: Your EMI payment is due soon")

}

}

checkReminder()