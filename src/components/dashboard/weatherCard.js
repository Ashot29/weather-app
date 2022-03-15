import React from "react";
import {useSelector} from "react-redux";

export default function WeatherCard() {
    const cityName = useSelector(state => state.cityWeather.cityName);
    // const temperature = useSelector(state => state.cityWeather.weatherData?.temp);
    const weatherData = useSelector(state => state.cityWeather.weatherData)
    const description = useSelector(state => state.cityWeather.description)

    if (!weatherData) return null;

    return (
        <div className="weather-card">
            <h1>{cityName}</h1>
            <div className={'temperature-wrapper'}>
                {weatherData.temp ? Math.floor(weatherData.temp - 273): null}
            </div>
            <div className={'weather-description'}>
                {description?.toUpperCase()}
            </div>
        </div>
    );
}
