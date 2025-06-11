async function getWeather() {
  const city = document.getElementById('city').value;
  const apiKey = '54f9dc16d60b36f626e83f068c8fefd0';
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

  const response = await fetch(url);
  const data = await response.json();

  if (data.cod == 200) {
    document.getElementById('result').innerHTML = `
      <h2>${data.name}</h2>
      <p>Temperature: ${data.main.temp} °C</p>
      <p>Weather: ${data.weather[0].main}</p>
    `;
  } else {
    document.getElementById('result').innerHTML = `<p>City not found</p>`;
  }
}