import React from 'react';
//  Import Titles component
import Titles from './components/Titles';
//  Import Form component
import Form from './components/Form';
//  Import Weather component
import Weather from './components/Weather';
//  OpenWeatherMap API key
const API_KEY = process.env.API_WEATHER_KEY;

class App extends React.Component {
  //  Initial state of the object
  state = {
    temperature: null,
    city: null,
    country: null,
    humidity: null,
    description: null,
    error: null
  }
  //  Function to fetch weather from API
  getWeather = async (e) => {
   //  Prevent default behavior of the component when we press button
   e.preventDefault();
   //  Value from Form input (<input type="text" name="city" placeholder="City.."/>)
   const city = e.target.elements.city.value;
   try {
    //  Fetch data from API using our API_KEY 
    const api_call = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`);
    //  Convert data we get from API to JSON format
    const data = await api_call.json();
    //  VALIDATION -> If city returns true,set state
    if(city) {
      //  Set values of the state based on data we get from API
      this.setState({
        temperature: data.main.temp,
        city: data.name,
        country: data.sys.country,
        humidity: data.main.humidity,
        description: data.weather[0].description,
        error: ''
      });
    } else {
      this.setState({
        temperature: null,
        city: null,
        country: null,
        humidity: null,
        description: null,
        error: 'Please enter city name!'
      });
    }   
   } catch (error) {
    this.setState({
      temperature: null,
      city: null,
      country: null,
      humidity: null,
      description: null,
      error: 'Not possible to get data for that city'
    });
   }   
  }
  // Returns JSX
  render(){
    return (
      <div>
        <div className="wrapper">
          <div className="main">
            <div className="container">
              <div className="row">
                <div className="col-xs-5 title-container">
                  <Titles/>
                </div>
                <div className="col-xs-7 form-container">
                <Form getWeather={ this.getWeather }/>
                  <Weather
                    // When we set state here,we have access to this in Weather component  
                      temperature={ this.state.temperature }
                      city={ this.state.city }
                      country={ this.state.country }
                      humidity={ this.state.humidity }
                      description={ this.state.description }
                      error={ this.state.error }
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
};

//  Export component
export default App;