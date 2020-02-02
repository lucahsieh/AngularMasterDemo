export class CurrentWeather {

    constructor(raw: CurrentWeather) {
        this.id = raw.id;
        this.weather = raw.weather;
        this.name = raw.name;
    }
    id: number;
    main: Main;
    weather: Weather;
    name: string;
}

class Main {
    temp: number;
    humidity: number;
}

interface Weather {
    id: number;
    description: string;
}