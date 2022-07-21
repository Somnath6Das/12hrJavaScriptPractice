

let API_KEY = "a8e71c9932b20c4ceb0aed183e6a83bb";

const getWeatherData = (city) => {

  const options = {
    method: "GET",
    headers: {
      "X-RapidAPI-Key": "d372a19e2dmsh33303918b2188ffp1f4a97jsn3dc04b6fe039",
      "X-RapidAPI-Host": "community-open-weather-map.p.rapidapi.com",
    },
  };

  return fetch(
    `https://community-open-weather-map.p.rapidapi.com/weather?q=${city}&units=imperial`,
    options
  )
    .then((response) => response.json())
    .then((data) => data)
    .catch((err) => console.error(err));
};

const searchCity = async () => {
  const city = document.getElementById("city-input").value;
  console.log(city);
 const data = await getWeatherData(city);
  showWeatherData(data);
};

const showWeatherData = (weatherData) => {
  console.log(weatherData, 'hi')
document.getElementById('city-name').innerText =weatherData.name;
document.getElementById('weather-type').innerText =weatherData.weather[0].main;
document.getElementById('temp').innerText =weatherData.main.temp;
document.getElementById('min-temp').innerText = weatherData.main.temp_min;
document.getElementById('max-temp').innerText = weatherData.main.temp_max;
document.getElementById('humidity').innerText = weatherData.main.humidity;
};
