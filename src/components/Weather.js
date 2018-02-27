import React from 'react';

class Weather extends React.Component {
    render() {
        return(
            <div>
                City: { this.props.city }
                Country: { this.props.country }
                Temperature: { this.props.temperature }
                Humidity: { this.props.humidity }
                Description: { this.props.description }                               
            </div>
        );
    }
}

export default Weather;