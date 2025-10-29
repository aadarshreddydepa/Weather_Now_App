Here's a comprehensive **README.md** file for your Outdoor Weather Tracker app:

```markdown
# 🌤️ Outdoor Weather Tracker

A modern, responsive weather application built with React, Vite, and Tailwind CSS that provides real-time weather data and 3-day forecasts for any city worldwide.

![Weather App Screenshot](https://img.shields.io/badge/React-18.x-blue) ![Vite](https://img.shields.io/badge/Vite-5.x-646CFF) ![Tailwind CSS](https://img.shields.io/badge/Tailwind-3.x-38B2AC)

## ✨ Features

- 🔍 **City Search** - Search weather information for any city worldwide
- 🌡️ **Current Weather** - Display current temperature, conditions, and wind speed
- 📅 **3-Day Forecast** - View minimum and maximum temperatures with weather conditions
- 🎨 **Modern UI** - Clean, responsive design with Tailwind CSS
- ⚡ **Fast Performance** - Built with Vite for lightning-fast development and build
- 🆓 **No API Key Required** - Uses free Open-Meteo API

## 🚀 Live Demo

[View Live App](https://stackblitz.com/edit/vitejs-vite-vtbm4omm)

## 🛠️ Technologies Used

- **React 18** - UI library
- **Vite** - Build tool and development server
- **Tailwind CSS** - Utility-first CSS framework
- **Open-Meteo API** - Free weather data API
  - [Geocoding API](https://geocoding-api.open-meteo.com) - Convert city names to coordinates
  - [Weather Forecast API](https://api.open-meteo.com) - Fetch weather data

## 📦 Installation

### Prerequisites

- Node.js (v14 or higher)
- npm or yarn

### Setup Instructions

1. **Clone the repository**
   ```
   git clone https://github.com/yourusername/weather-app.git
   cd weather-app
   ```

2. **Install dependencies**
   ```
   npm install
   ```

3. **Install Tailwind CSS**
   ```
   npm install -D tailwindcss@3 postcss autoprefixer
   npx tailwindcss init -p
   ```

4. **Run the development server**
   ```
   npm run dev
   ```

5. **Open your browser**
   - Navigate to `http://localhost:5173`

## 📁 Project Structure

```
weather-app/
├── src/
│   ├── components/
│   │   ├── SearchBar.jsx       # Search input component
│   │   ├── WeatherCard.jsx     # Current weather display
│   │   └── ForecastCard.jsx    # Forecast card component
│   ├── App.jsx                 # Main application component
│   ├── index.css               # Tailwind CSS imports
│   └── main.jsx                # Application entry point
├── package.json
├── tailwind.config.js
├── vite.config.js
└── README.md
```

## 🎯 Usage

1. **Enter a city name** in the search bar (e.g., "London", "Tokyo", "New York")
2. **Click the Search button** or press Enter
3. **View current weather** - Temperature, conditions, and wind speed
4. **Check the 3-day forecast** - Daily min/max temperatures with weather icons

## 🌐 API Information

This app uses the **Open-Meteo API**, which is:
- ✅ Completely free
- ✅ No API key required
- ✅ No rate limits for reasonable usage
- ✅ Open-source weather data

Learn more at [open-meteo.com](https://open-meteo.com)

## 🎨 Customization

### Modify Weather Descriptions

Edit the `weatherDescriptions` object in `WeatherCard.jsx` and `ForecastCard.jsx`:

```
const weatherDescriptions = {
  0: "Clear sky",
  1: "Mainly clear",
  // Add more conditions...
};
```

### Change Color Scheme

Update Tailwind classes in components or modify `tailwind.config.js`:

```
theme: {
  extend: {
    colors: {
      // Add custom colors
    }
  }
}
```

## 📱 Responsive Design

The app is fully responsive and works seamlessly on:
- 📱 Mobile devices
- 💻 Tablets
- 🖥️ Desktop screens

## 🚀 Deployment

### Deploy to Vercel

1. Push code to GitHub
2. Import repository on [vercel.com](https://vercel.com)
3. Deploy with one click

### Deploy to Netlify

1. Push code to GitHub
2. Connect repository on [netlify.com](https://netlify.com)
3. Deploy automatically

## 🤝 Contributing

Contributions are welcome! Feel free to:
1. Fork the repository
2. Create a feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📝 License

This project is open source and available under the [MIT License](LICENSE).

## 👨‍💻 Author

**Your Name**
- GitHub: [@yourusername](https://github.com/aadarshreddydepa)
- StackBlitz: [Live Demo](https://stackblitz.com/edit/vitejs-vite-vtbm4omm?file=index.html)

## 🙏 Acknowledgments

- [Open-Meteo](https://open-meteo.com) - Free weather API
- [Tailwind CSS](https://tailwindcss.com) - CSS framework
- [Vite](https://vitejs.dev) - Build tool
- [React](https://react.dev) - UI library

## 📸 Screenshots

[Screenshot](screenshot/Screenshot 2025-10-29 at 12.48.58 PM.png)

---

⭐ If you found this project helpful, please give it a star!
```
