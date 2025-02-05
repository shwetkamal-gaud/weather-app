import { useEffect, useState } from 'react'
import './App.css'
import SearchBar from './Components/SearchBar'
import { useFetchWeather } from './hooks/useFetch'
import WeatherDisplay from './Components/WeatherDisplay'
import { Forecast, WeatherData } from './type'

function App() {
  const [city, setCity] = useState(localStorage.getItem("lastCity") || "Delhi");
  const { data, isLoading, isError } = useFetchWeather(city)
  const [weather, setWeather] = useState<WeatherData>(data?.weather)
  const [forecast, setForecast] = useState<Forecast>(data?.forecast)
  useEffect(() => {
    setWeather(data?.weather)
    setForecast(data?.forecast)
  }, [data])

  return (
    <>
      <div className="app">
        <h1 className='heading'>Weather Dashboard</h1>
        <SearchBar onSearch={(newCity) => setCity(newCity)} />
        {isLoading && <p>Loading...</p>}
        {isError && <p>Error fetching weather data. Please try again.</p>}
        {data?.weather && (
          <div className='weather'>

            <WeatherDisplay weather={weather} forecast={forecast} />
          </div>
        )}
      </div>
    </>
  )
}

export default App
