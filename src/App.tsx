import { useEffect, useState } from 'react'
import './App.css'
import SearchBar from './Components/SearchBar'
import { useFetchWeather } from './hooks/useFetch'
import WeatherDisplay from './Components/WeatherDisplay'
import { Forecast, WeatherData } from './type'
import Error from './Components/Error'

function App() {
  const [city, setCity] = useState(localStorage.getItem("lastCity") || "Delhi");
  const { data, isLoading, isError, error } = useFetchWeather(city)
  const [weather, setWeather] = useState<WeatherData>(data?.weather)
  const [forecast, setForecast] = useState<Forecast>(data?.forecast)
  useEffect(() => {
    setWeather(data?.weather)
    setForecast(data?.forecast)
  }, [data])
  console.log(Object.keys(weather || {}).length > 0, weather?.base)
  return (
    <>
      <div className="app">
        <h1 className='heading'>Weather Dashboard</h1>
        <SearchBar onSearch={(newCity) => setCity(newCity)} />
        {isLoading && <p>Loading...</p>}
        {isError ? (
          <Error error={error} />
        ) : (weather?.base && forecast.city &&
          Object.keys(weather || {}).length > 0 &&
          Object.keys(forecast || {}).length > 0 && (
            <div className="weather">
              <WeatherDisplay weather={weather} forecast={forecast} />
            </div>
          )
        )}
      </div>
    </>
  )
}

export default App
