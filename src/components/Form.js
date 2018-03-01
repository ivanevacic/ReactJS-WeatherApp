import React from 'react';

const Form = props => (
    <form onSubmit={ this.props.getWeather }>
        <input type="text" name="city" placeholder="Enter city name..."/>
        <button>Get weather</button>
    </form>
);

export default Form;