const map = L.map('map').setView([40, -3.7], 6);
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
  attribution: '© OpenStreetMap contributors'
}).addTo(map);

async function loadWeather() {
  const res = await fetch('http://localhost:3001/api/weather');
  const data = await res.json();
  console.log(data);
}
loadWeather();
