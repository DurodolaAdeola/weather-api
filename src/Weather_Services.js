export default class WeatherServices {
    static async getWeather(city) {
        
        try {
            const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${process.env.API_KEY}`);
            if (!response.ok) {
                throw Error(response.statusText);
            }
            return response.json()
        } catch (error) {
            return error.message
        }
    }
}