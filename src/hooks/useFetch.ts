import { useQuery } from "@tanstack/react-query";

const API_KEY = import.meta.env.VITE_WEATHER_API_KEY;

const fetchWeatherData = async ({ queryKey }: { queryKey: string }) => {
    try {
        const weatherResponse = await fetch(
            `http://pro.openweathermap.org/data/2.5/weather?q=${queryKey}&appid=${API_KEY}&units=metric`
        ).then((res) => res.json()).then((data) => { return data });
        const forecastResponse = await fetch(
            `http://pro.openweathermap.org/data/2.5/forecast?q=${queryKey}&appid=${API_KEY}&units=metric`
        ).then((res) => res.json()).then((data) => { return data });
        console.log(weatherResponse, forecastResponse)
        return {
            weather: weatherResponse,
            forecast: forecastResponse,
        };
    }
    catch (e) {
        console.log(e)
    }
};
export const useFetchWeather = (query: string) => {
    return useQuery({
        queryKey: ["weather", query],
        queryFn: () => fetchWeatherData({ queryKey: query }),
        staleTime: 5 * 60 * 1000,
    })
}