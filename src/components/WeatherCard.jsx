const weatherDescriptions = {
  0: "Clear sky",
  1: "Mainly clear",
  2: "Partly cloudy",
  3: "Overcast",
  45: "Foggy",
  51: "Light drizzle",
  61: "Light rain",
  80: "Showers",
  95: "Thunderstorm",
};

export default function WeatherCard({ data }) {
  return (
    <div className="bg-white shadow-md rounded-2xl p-6 mt-6 text-center w-full max-w-sm">
      <h2 className="text-xl font-semibold text-sky-800">
        {data.city}, {data.country}
      </h2>
      <p className="text-5xl font-bold text-sky-700 mt-2">
        {data.temperature}°C
      </p>
      <p className="text-sky-600 mt-1">
        {weatherDescriptions[data.conditionCode] || "Unknown conditions"}
      </p>
      <p className="text-green-700 mt-2 text-sm">
        💨 Wind: {data.windspeed} km/h
      </p>
    </div>
  );
}
