// FETCH DATA
fetch('http://localhost:5000/api/expenses')
.then(res=>res.json())
.then(data=>{
  const list = document.getElementById('list');
  data.forEach(item=>{
    const li = document.createElement('li');
    li.innerText = `${item.title} - ₹${item.amount}`;
    list.appendChild(li);
  });
});

// PIE
new Chart(document.getElementById('pieChart'), {
  type: 'doughnut',
  data: {
    labels: ['Housing','Food','Transport'],
    datasets: [{ data: [40,30,30] }]
  }
});

// BAR
new Chart(document.getElementById('barChart'), {
  type: 'bar',
  data: {
    labels: ['Jan','Feb','Mar'],
    datasets: [{ label:'Expenses', data:[2000,3000,2500] }]
  }
});
