import { useQuery } from "@tanstack/react-query";

const API_KEY = import.meta.env.VITE_WEATHER_API_KEY;

const fetchWeatherData = async ({ queryKey }: { queryKey: string }) => {
    const weatherResponse = await fetch(
        `http://pro.openweathermap.org/data/2.5/weather?q=${queryKey}&appid=${API_KEY}&units=metric`
    );

    if (!weatherResponse.ok) {
        if (weatherResponse.status === 401) {
            throw new Error("Invalid API Key. Please check your credentials.");
        } else if (weatherResponse.status === 404) {
            throw new Error("City not found. Please enter a valid city name.");
        } else {
            throw new Error(`Weather API error: ${weatherResponse.status} ${weatherResponse.statusText}`);
        }
    }

    const weatherData = await weatherResponse.json();

    const forecastResponse = await fetch(
        `http://pro.openweathermap.org/data/2.5/forecast?q=${queryKey}&appid=${API_KEY}&units=metric`
    );

    if (!forecastResponse.ok) {
        if (weatherResponse.status === 401) {
            throw new Error("Invalid API Key. Please check your credentials.");
        } else if (weatherResponse.status === 404) {
            throw new Error("City not found. Please enter a valid city name.");
        } else {
            throw new Error(`Weather API error: ${weatherResponse.status} ${weatherResponse.statusText}`);
        }
    }

    const forecastData = await forecastResponse.json();

    return {
        weather: weatherData,
        forecast: forecastData,
    };
};
export const useFetchWeather = (query: string) => {
    return useQuery({
        queryKey: ["weather", query],
        queryFn: () => fetchWeatherData({ queryKey: query }),
        staleTime: 5 * 60 * 1000,
    })
}