export interface CurrentWeather {
    id: number;
    // main: Main;
    weather: Weather;
    name: string;
}

// class Main {
//     temp: number;
//     humidity: number;
// }

interface Weather {
    id: number;
    description: string;
}