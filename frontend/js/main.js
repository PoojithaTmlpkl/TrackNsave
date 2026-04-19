const apiUrl = "http://localhost:5000/api";

// Example fetch for savings
async function getSavings(userId){
  const res = await fetch(`${apiUrl}/savings/${userId}`);
  const data = await res.json();
  console.log(data);
}