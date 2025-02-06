import styles from "../styles/Weather.module.css";
import { Forecast, List, WeatherData } from "../type";

const WeatherDisplay = ({ weather, forecast }: { weather: WeatherData, forecast: Forecast }) => {
    if (weather === undefined || forecast === undefined) return null;
    else{
        const { name, main, weather: weatherDetails, wind } = weather;
        console.log(name, main, wind, weatherDetails,)
        const iconUrl = `https://openweathermap.org/img/wn/${weatherDetails[0].icon}@2x.png`;
    
        const dailyForecast = forecast.list.filter((_: List, index: number) => index % 8 === 0).slice(0, 5);
        if (weather !== undefined && forecast !== undefined) {
            return (
                <div className={styles.weatherContainer}>
                    <div className={styles.weatherHeader}>
                        <h1>{weatherDetails[0].main}</h1>
                        <div className={styles.subHeader}>
                            <p>{name}</p>
                            <p>{new Date().toLocaleTimeString()}</p>
                        </div>
    
                    </div>
                    <div className={styles.currentWeather}>
                        <img className={styles.icon} src={iconUrl} alt={weatherDetails[0].description} />
                    </div>
                    <h3 style={{ textAlign: 'left' }}>WEATHER</h3>
                    <div className={styles.forecast}>
                        <div>
                            <h1>{Math.round(main.temp)}°C</h1>
                            <p>{new Date().toLocaleTimeString()}</p>
                        </div>
                        <div>
                            <img width={65} src={iconUrl} alt={weatherDetails[0].description} />
                            <p>{wind.speed} </p>
                        </div>
                        {dailyForecast.map((day: any, index: number) => (
                            <div className={styles.forecast}>
                                <div className={styles.vr}></div>
                                <div key={index} className={styles.forecastDay}>
                                    <p>{new Date(day.dt * 1000).toLocaleDateString("en-US", { weekday: "short" })}</p>
                                    <img
                                        src={`https://openweathermap.org/img/wn/${day.weather[0].icon}@2x.png`}
                                        alt={day.weather[0].description}
                                    />
                                    <p>{Math.round(day.main.temp)}°C</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            );
    
        }
    }
    return null
};

export default WeatherDisplay;
