import { useState, useRef } from 'react'
import './App.css'
import axios from 'axios'
import WeatherInfo from './components/WeatherInformations/WeatherInfo'

function App() {

  const [weather, setWeather] = useState()
  const [weatherForecast, setWatherForecast] = useState()

  const inputRef = useRef()

  const searchCity = async () => {
    try {
      const city = inputRef.current.value
      const apiKey = '5452e31c86094b903cdb90c07a391619'
      
      const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric&lang=pt_br`  
      const urlForecast = `api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${apiKey}&units=metric&lang=pt_br`

      const response = await axios.get(url)
      const forecast = await axios.get(urlForecast)

      setWatherForecast(forecast.data)
      setWeather(response.data)

    } catch (err) {
        console.log(err)
    }
  }

  return (

    <div className='container'>
      <div className='header'>
        <h1>GoWeather</h1>
        <img src="./images/weather.png" alt="GoWeather" />
      </div>
      <div className='container-form'>
        <input ref={inputRef} type="text" placeholder='Digite o nome da cidade' />
        <button onClick={searchCity}>Buscar</button>
      </div>

      {weather && <WeatherInfo weather={weather} />}
    </div>

  )
}

export default App