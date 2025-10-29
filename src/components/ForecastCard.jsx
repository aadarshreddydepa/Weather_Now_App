const weatherDescriptions = {
  0: "☀️ Clear",
  1: "🌤️ Mostly Clear",
  2: "⛅ Partly Cloudy",
  3: "☁️ Overcast",
  45: "🌫️ Fog",
  51: "🌦️ Drizzle",
  61: "🌧️ Rain",
  80: "🌦️ Showers",
  95: "⛈️ Thunderstorm",
};

export default function ForecastCard({ data }) {
  const date = new Date(data.date).toLocaleDateString(undefined, {
    weekday: "short",
    month: "short",
    day: "numeric",
  });

  return (
    <div className="bg-white p-4 rounded-xl shadow-md text-center">
      <h3 className="text-sky-800 font-semibold">{date}</h3>
      <p className="text-2xl mt-2">{weatherDescriptions[data.code] || "🌈"}</p>
      <p className="text-sky-700 mt-2 text-sm">
        {data.min}°C / {data.max}°C
      </p>
    </div>
  );
}
