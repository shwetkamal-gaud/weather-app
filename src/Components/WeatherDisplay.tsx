import styles from "../styles/Weather.module.css";
import { Forecast, List, WeatherData } from "../type";

const WeatherDisplay = ({ weather, forecast }: { weather: WeatherData, forecast: Forecast }) => {
    if (!weather || !forecast) return null;
    const { name, main, weather: weatherDetails, wind } = weather;
    console.log(name, main, wind, forecast)
    const iconUrl = `https://openweathermap.org/img/wn/${weatherDetails[0].icon}@2x.png`;

    const dailyForecast = forecast.list.filter((_: List, index: number) => index % 8 === 0).slice(0, 5);

    return (
        <div className={styles.weatherContainer}>
            <div className={styles.currentWeather}>
                <h2>{name}</h2>
                <p>{new Date().toLocaleTimeString()}</p>
                <img src={iconUrl} alt={weatherDetails[0].description} />
                <p>{Math.round(main.temp)}°C</p>
                <p>{weatherDetails[0].description}</p>
                <p>Wind: {wind.speed} m/s</p>
            </div>

            <div className={styles.forecast}>
                {dailyForecast.map((day: any, index: number) => (
                    <div key={index} className={styles.forecastDay}>
                        <p>{new Date(day.dt * 1000).toLocaleDateString("en-US", { weekday: "short" })}</p>
                        <img
                            src={`https://openweathermap.org/img/wn/${day.weather[0].icon}@2x.png`}
                            alt={day.weather[0].description}
                        />
                        <p>{Math.round(day.main.temp)}°C</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default WeatherDisplay;
