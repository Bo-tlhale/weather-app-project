# Weather App 🌤️

A weather application developed as part of my **SheCodes** coursework. It lets users search for a city and view weather information alongside a five-day forecast.

## Features

- Search for weather conditions by city
- View the temperature in degrees Celsius, weather description, humidity and wind speed
- Display weather condition icons
- See forecast days with maximum and minimum temperatures
- Load weather information for Pretoria when the application opens

## Tech Stack

| Technology | Purpose |
| --- | --- |
| HTML | Page structure and weather display |
| CSS | Layout and styling |
| JavaScript | User interaction, data processing and dynamic updates |
| Axios | HTTP requests |
| SheCodes Weather API | Weather and forecast data |

## How It Works

1. The application loads weather information for Pretoria by default.
2. Users can enter a city in the search field.
3. JavaScript sends a request to the SheCodes Weather API using Axios.
4. The returned weather information is displayed on the page, followed by the forecast.

## Run Locally

1. Clone the repository:

   ```bash
   git clone https://github.com/Bo-tlhale/weather-app-project.git
   ```

2. Open the `weather-app-project` folder.
3. Open `index.html` in your browser.

An internet connection is required for the weather API and external libraries. Weather requests depend on the existing SheCodes API key remaining valid.

## Project Structure

```text
weather-app-project/
├── index.html
└── src/
    ├── script.js
    └── styles.css
```

## Learning Focus

This project provided practice with API requests, asynchronous JavaScript, JSON data, DOM manipulation and presenting dynamic information in a browser.

## Acknowledgement

Built as part of the **SheCodes** learning programme.

**Developed by:** [Botlhale Mpatlanyane](https://github.com/Bo-tlhale)
