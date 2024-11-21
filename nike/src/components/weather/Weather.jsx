import React, { useEffect, useState } from "react";
import searchlogo from "../../assets/weather/search.png";
import clearLogo from "../../assets/weather/clear.png";
import cloudLogo from "../../assets/weather/cloud.png";
import drizzleLogo from "../../assets/weather/drizzle.png";
import humidityLogo from "../../assets/weather/humidity.png";
import rainLogo from "../../assets/weather/rain.png";
import snowLogo from "../../assets/weather/snow.png";
import windLogo from "../../assets/weather/wind.png";

import axios from  'axios'

const Weather = () => {
  const apiKey = import.meta.env.VITE_API_KEY;
  const [weatherData, setWeatherData] = useState(null);
  const [searchQuery, setSearchQuery] = useState("");

  const allIcons = {
    "01d": clearLogo,
    "01n": clearLogo,
    "02d": cloudLogo,
    "02n": cloudLogo,
    "03d": cloudLogo,
    "03n": cloudLogo,
    "04d": drizzleLogo,
    "04n": drizzleLogo,
    "09d": rainLogo,
    "09n": rainLogo,
    "10d": rainLogo,
    "10n": rainLogo,
    "13d": snowLogo,
    "13n": snowLogo,
  };

  const search = async (city) => {
    if (!city) return; 

    try {
      const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}`;
      
      
     const response = await axios.get(url);
        const data = response.data
        
      const icon = allIcons[data.weather[0].icon] || clearLogo;

      setWeatherData({
        humidity: data.main.humidity,
        windSpeed: data.wind.speed,
        temperature: Math.floor(data.main.temp),
        location: data.name,
        icon: icon,
      });
        console.log(data);
        
    } catch (error) {
      console.error("Error fetching weather data:", error);
      setWeatherData(null); // Clear data if error occurs
    }
  };

  useEffect(() => {
    search("Manila"); // Default city
  }, []);

  return (
    <div className="flex items-center justify-center flex-col p-6">
      
      <div className="flex items-center space-x-2">
        <input
          type="text"
          placeholder="Search"
          className="inp"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
        <img
          src={searchlogo}
          className="w-[40px] rounded-full bg-[#ebfffc] p-[12px] cursor-pointer"
          alt="Search"
          onClick={() => search(searchQuery)}
        />
      </div>

      {/* Weather Display */}
      {weatherData ? (
        <>
          <img src={weatherData.icon} alt="Weather Icon" />
          <p className="text-4xl font-poppins text-white">
            {weatherData.temperature}°C
          </p>
          <p className="text-2xl text-white font-poppins">{weatherData.location}</p>

          <div className="flex w-full justify-between mt-9 space-x-10 font-poppins">
            <div className="col">
              <img className="w-[25px]" src={humidityLogo} alt="Humidity" />
              <div>
                <p>{weatherData.humidity}%</p>
                <span>Humidity</span>
              </div>
            </div>

            <div className="col">
              <img className="w-[25px]" src={windLogo} alt="Wind Speed" />
              <div>
                <p>{weatherData.windSpeed} kph</p>
                <span>Wind Speed</span>
              </div>
            </div>
          </div>
        </>
      ) : (
        <p className="text-white mt-5">No weather data available</p>
      )}
    </div>
  );
};

export default Weather;
