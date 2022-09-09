import './App.css';
import React from 'react';
import Form from './components/Form';
import Weather from './components/Weather';

const api_key="b6bb88e80ff03d836c6ccc942f656d2c";

class App extends React.Component{
  state = {
    city:undefined,
    temp:undefined,
    wain:undefined,
    feels: undefined,
    humidity:undefined,
    wind:undefined,
    sky:undefined,
    error:undefined
  }
  getWeather= async (event) =>{

    event.preventDefault()
    const city = event.target.elements.city.value;

    if(city){
      const ap_u = await
      fetch(`http://api.openweathermap.org/data/2.5/weather?q=${city}&lang=ru&appid=${api_key}`);
      const data = await ap_u.json();
      

      this.setState({
      city:data.name,
      temp:Math.round(data.main.temp-273),
      wain:data.weather[0]['description'],
      feels: Math.round(data.main.feels_like-273),
      humidity:data.main.humidity,
      wind:data.wind.speed,
      sky:data.weather[0]["main"],
      error:''

    })
    };
    
  }
  render(){
    return (
      <div >
        <div className='wrapper'>
        <Form showWeatherMethod={this.getWeather}></Form>
        <Weather
        city={this.state.city}
        temp={this.state.temp}
        wain={this.state.wain}
        feels={this.state.feels}
        humidity={this.state.humidity}
        wind={this.state.wind}
        sky={this.state.sky}
        ></Weather>
        </div>
      
      </div>
    );
  }
}

export default App;