
interface Weather {
    id: 721,
    main: string,
    description: string,
    icon: string
}

interface Main {
    temp: number,
    feels_like: number,
    temp_min: number,
    temp_max: number,
    pressure: number,
    humidity: number,
    sea_level: number,
    grnd_level: number
}

interface Wind {
    speed: number,
    deg: number
}

interface Clouds {
    all: number
}

export interface WeatherData {
    coord: {
        lon: number,
        lat: number
    },
    weather: Weather[],
    base: string,
    main: Main,
    visibility: number,
    wind: Wind,
    clouds: Clouds,
    dt: number,
    sys: {
        type: number,
        id: number,
        country: string,
        sunrise: number,
        sunset: number
    },
    timezone: number,
    id: number,
    name: string,
    cod: string

}

export interface List {
    clouds: Clouds,
    wind: Wind,
    dt: number,
    dt_txt: string,
    pop: number,
    visibility: number,
    main: Main,
    weather: Weather[]
}

export interface Forecast {
    city: {
        coord: {
            lon: number,
            lat: number
        },
        country: string,
        sunrise: number,
        sunset: number,
        timezone: number,
        id: number,
        name: string,
        population: number
    }
    cnt: number,
    cod: string,
    list: List[]

}