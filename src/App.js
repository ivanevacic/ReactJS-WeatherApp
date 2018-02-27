import React from 'react';
//  Import Titles component
import Titles from './components/Titles';
//  Import Form component
import Form from './components/Form';
//  Import Weather component
import Weather from './components/Weather';

//  OpenWeatherMap API key
const API_KEY = '129410857ca7a65921957e105b006227';

class App extends React.Component {
  //  Function to fetch weather from API
  getWeather = async (e) => {
    //  Prevent default behavior of the component when we press button
    e.preventDefault();
    //  Value from Form input (<input type="text" name="city" placeholder="City.."/>)
    const city = e.target.elements.city.value;
    //  Fetch data from API using our API_KEY
    const api_call = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`);
    //  Convert data we get from API to JSON format
    const data = await api_call.json();
    //  Console.log data we get to make sure it works
    console.log(data);
  }
  // Returns JSX
  render(){
    return (
      <div>
        <Titles/>
        <Form getWeather={this.getWeather}/>
        <Weather/>
      </div>
    );
  }
}

//  Export component
export default App;