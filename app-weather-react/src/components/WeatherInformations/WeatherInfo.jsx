import './WeatherInfo.css'

function WeatherInfo({weather}) {

    console.log(weather)

    if (!weather?.main || !weather?.weather) return <p>Carregando...</p>

    return (
        <div className='weather-container'>
            <h2>{weather.name}</h2>

            <div className='weather-info'>
                {<img src={`https://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`} alt="Icon" />}
                <p className='temperature'>{Math.round(weather.main.temp)}°C</p>
            </div>

            <p className='description'>{weather.weather[0].description}</p>
            <div className='temp-container'>
                <p>Sensação térmica: {Math.round(weather.main.feels_like)}°C</p>
                <p>Umidade: {weather.main.humidity}%</p>
                <p>Temp. máxima: {Math.round(weather.main.temp_max)}°C</p>

            </div>
        </div>
    )
}

export default WeatherInfo