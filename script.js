async function fetchWeatherData(city) {
    const apiKey = 'c029542dac2901bc68ab9b0197c5a148';
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}`;
 
    try {
        const response = await fetch(url);
        if (!response.ok) throw new Error('City not found');
        const data = await response.json();
    
            document.getElementById('city').textContent = data.name;
            document.getElementById('temperature').textContent = data.main.temp;
            document.getElementById('humidity').textContent = data.main.humidity;
            document.getElementById('condition').textContent = data.weather[0].description;
            document.getElementById('error').textContent = '';
        } catch (error) {
            document.getElementById('error').textContent = error.message;
        }
}

fetchWeatherData('New York');
   