import React from 'react'
import Clouds from '../images/clouds.png'
import Clear from '../images/sun.png'
import Snow from '../images/snow.png'
import Rain from '../images/rain.png'
import Hail from '../images/hail.png'

const skyLook = {
    "Clouds": Clouds,
    "Clear": Clear,
    "Snow": Snow,
    "Rain": Rain,
    "Hail": Hail
  }
  

 const Weather = (props)=>{
    return(
        <div className="weather_block">
            {props.city&&
            <div className="wrapper_weather">
                <div className="cit_tem">
                    <p>{props.city}</p>
                    <div className="tempe"><p>{props.temp}&deg;C</p><p className="feels_like">Fells like {props.temp}&deg;C</p></div>
                </div>
                <div className="sky_over">
                    <div className="over">
                        <p>{props.wain}</p>
                        <p>Влажность: {props.humidity}%</p>
                        <p>Скорость ветра: {props.wind} м/с</p>
                    </div>
                    <img src={skyLook[props.sky]} alt={"sky"} className="sky_clouds"/>
                </div>
            </div>
            }
            <p>{props.error}</p>
        </div>
    )
}

export default Weather;