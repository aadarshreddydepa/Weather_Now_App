import { useState } from "react";
import SearchBar from "./components/SearchBar";
import WeatherCard from "./components/WeatherCard";
import ForecastCard from "./components/ForecastCard";

export default function App() {
  const [weather, setWeather] = useState(null);
  const [forecast, setForecast] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const fetchWeather = async (city) => {
    try {
      setLoading(true);
      setError("");
      setWeather(null);
      setForecast([]);

      // Get coordinates for the city
      const geoRes = await fetch(
        `https://geocoding-api.open-meteo.com/v1/search?name=${city}&count=1`
      );
      const geoData = await geoRes.json();

      if (!geoData.results || geoData.results.length === 0) {
        setError("City not found. Try another location.");
        setLoading(false);
        return;
      }

      const { latitude, longitude, name, country } = geoData.results[0];

      // Get current weather & forecast
      const weatherRes = await fetch(
        `https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&current_weather=true&daily=temperature_2m_max,temperature_2m_min,weathercode&forecast_days=3&timezone=auto`
      );
      const weatherData = await weatherRes.json();

      setWeather({
        city: name,
        country,
        temperature: weatherData.current_weather.temperature,
        windspeed: weatherData.current_weather.windspeed,
        conditionCode: weatherData.current_weather.weathercode,
      });

      setForecast(
        weatherData.daily.time.map((day, i) => ({
          date: day,
          min: weatherData.daily.temperature_2m_min[i],
          max: weatherData.daily.temperature_2m_max[i],
          code: weatherData.daily.weathercode[i],
        }))
      );
    } catch (err) {
      setError("Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-sky-100 to-green-100 flex flex-col items-center py-10 px-4">
      <h1 className="text-3xl font-bold text-sky-700 mb-6">
        🌤️ Outdoor Weather Tracker
      </h1>
      <SearchBar onSearch={fetchWeather} />
      {loading && <p className="text-sky-700 mt-4">Loading...</p>}
      {error && <p className="text-red-600 mt-4">{error}</p>}
      {weather && <WeatherCard data={weather} />}
      {forecast.length > 0 && (
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-6">
          {forecast.map((f) => (
            <ForecastCard key={f.date} data={f} />
          ))}
        </div>
      )}
    </div>
  );
}
